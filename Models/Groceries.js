const table = require('../Utils/database');

class Groceries {
    // execute('yr query command , ?' [your params])
    // execute(`your query ${your params}`)
    
    constructor( id, item ){
        // here, declare all column names
        this.id = id;
        this.item = item;
    }

    static getAllGroceries() {
        // from model => make select all query for groceries
        return table.execute('select * from groceries order by id asc');
    }

    static getGroceryById(id) {
        // from model => make select by id
        return table.execute(`select * from groceries where id = ${id}`)
    }

    static postGrocery(item) {
        return table.execute(`insert into groceries set item = '${item}' `)
    }

    static putGroceryById(id, item) {
        return table.execute(`update groceries set item='${item}' where id=${id}`)
    }

    static deleteGroceryById(id) {
        return table.execute(`delete from groceries where id = ${id}`);
    }
}

module.exports = Groceries;