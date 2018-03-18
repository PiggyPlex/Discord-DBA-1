const sqlite3 = require('sqlite3').verbose();

module.exports = {

        updateBal: function(userID, increase) {

        const getInfo = new Promise((resolve,error) => {

            increase = parseInt(increase);

            if (isNaN(increase)) {
                return TypeError('Discord-DBA Error: Increase value must be a NUMBER not a STRING');
            }

            // Variables
            var db;
            var response;
            var log = false;

            function createDb() { 
                if (log) console.log('Creating Database.');
                db = new sqlite3.Database('./userMoneyDBA.sqlite', createTable);
            }

            function createTable() { 
                db.run("CREATE TABLE IF NOT EXISTS eco (userID TEXT, money INTEGER, userName TEXT)", checkIfCreated);
            }

            function checkIfCreated() {
                if (log) console.log('Creating Table');
                db.get(`SELECT * FROM eco WHERE userID = '${userID}'`, function(err, row) {
                    if (!row) {
                        insertRows();
                    }
                    else {
                        db.run(`UPDATE eco SET money = '${row.money + increase}' WHERE userID = '${userID}'`)
                        db.get(`SELECT * FROM eco WHERE userID = '${userID}'`, function(err, row) {
                            response = row;
                            returnDb();
                        });
                    }
                })
            }

            function insertRows() {
                var stmt = db.prepare("INSERT INTO eco (userID,money,userName) VALUES (?,?,?)");

                stmt.run(userID, 0, 'Username')

                stmt.finalize(readAllRows);
            }

            function readAllRows() { 

                /**db.all("SELECT rowid AS id, userID, money, userName FROM eco", function(err, rows) { 
                    rows.forEach(function(row) {
                        console.log(row);
                    });
                    closeDb();
                });**/

                db.get(`SELECT * FROM eco WHERE userID = '${userID}'`, function(err, row) {
                    closeDb()
                })

            }

            function closeDb() {
                checkIfCreated()
                db.close();
            }

            function returnDb() {
                return resolve(response)
            }

            function runChain() {
                createDb();
            }

            runChain();

        });

        return getInfo;

    }

}
