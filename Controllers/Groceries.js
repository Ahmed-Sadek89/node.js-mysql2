const Groceries = require('../Models/Groceries');

const getAllGroceries = async (req, res) => {
    await Groceries.getAllGroceries().then((result) => {
        res.json(result[0])
    })
}

const getGroceryById = async (req, res) => {
    await Groceries.getGroceryById(req.params.id).then((result) => {
        if ( result[0].length > 0 ) {
            res.json(result[0])
        } else {
            res.json({ message: "grocery is not found" })
        }
    })
}

const postGrocery = async (req, res) => {
    await Groceries.postGrocery(req.body.item)
    .then(() => {
        res.json({
            success: true, 
            result: 'the row is inserted successfully'
        })
    })
    .catch((error) => {
        res.json({
            success: false, 
            result: error.message
        })
    })
}

const putGroceryById = async (req, res) => {
    await Groceries.putGroceryById(req.params.id, req.body.item) 
    .then(() => {
        res.json({
            success: true, 
            result: 'the row is updated successfully'
        })
    })
    .catch((error) => {
        res.json({
            success: false, 
            result: error.message
        })
    })
}

const deleteGroceryById = async (req, res) => {
    await Groceries.deleteGroceryById(req.params.id)
    .then(() => {
        res.json({
            success: true, 
            result: 'the row is deleted successfully'
        })
    })
    .catch((error) => {
        res.json({
            success: false, 
            result: error.message
        })
    })
}

module.exports = {
    getAllGroceries,
    getGroceryById,
    postGrocery,
    putGroceryById,
    deleteGroceryById
}