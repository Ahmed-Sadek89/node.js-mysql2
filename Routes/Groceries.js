const { Router } = require('express');
const router = Router();

const { 
    getAllGroceries, 
    getGroceryById,
    postGrocery,
    putGroceryById,
    deleteGroceryById,
} = require('../Controllers/Groceries');

router.get('/', getAllGroceries)
router.get('/grocery/:id', getGroceryById);
router.post('/', postGrocery);
router.put('/:id', putGroceryById);
router.delete('/:id', deleteGroceryById)

module.exports = router