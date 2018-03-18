const sqlite3 = require('sqlite3').verbose();

module.exports = {

    fetchBal: function(userID) {
        const getInfo = new Promise((resolve) => {

            var db;
            let response;
            let log = false;

            function createDb() { 
                if (log) console.log('Creating Database Chain');
                db = new sqlite3.Database('./userMoneyDBA.sqlite', createTable);
            }

            function createTable() { 
                if (log) console.log('Creating Table.');
                db.run("CREATE TABLE IF NOT EXISTS eco (userID TEXT, money INTEGER, userName TEXT)", checkIfCreated);
            }

            function checkIfCreated() {
                db.get(`SELECT * FROM eco WHERE userID = '${userID}'`, function(err, row) {

                    if (!row) {
                        insertRows();
                    }
                    else {
                        if (log) console.log('Row Found.')
                        response = row;
                        returnDb();
                    }

                })

            }

            function insertRows() {
                if (log) console.log('Inserting Rows.');
                var stmt = db.prepare("INSERT INTO eco (userID,money,userName) VALUES (?,?,?)");

                stmt.run(userID, 0, 'Username')

                stmt.finalize(readAllRows);
            }

            function readAllRows() {
                if (log) console.log('Display New Row.');

                /**db.all("SELECT rowid AS id, userID, money FROM eco", function(err, rows) { 
                    rows.forEach(function(row) {
                        console.log(row);
                    });
                    closeDb();
                });**/

                db.get(`SELECT * FROM eco WHERE userID = '${userID}'`, function(err, row) {
                    response = row;
                    closeDb()
                })

            }

            function closeDb() { 
                if (log) console.log("Closing Database.");
                db.close();
                returnDb();
            }

            function returnDb() {
                if (log) console.log(response)
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
