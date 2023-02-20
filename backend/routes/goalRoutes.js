const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal} = require ('../controllers/goalController')
const {protect}= require('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,setGoal)
/*
line 5 will replace these 2 lines inline (chained):

router.get('/', getGoals)
router.post('/',setGoal)
*/

router.route('/:id').put(protect,updateGoal).delete(protect, deleteGoal)
/*
line 12 will replace these 2 lines inline (chained):

router.put('/:id',updateGoal)
router.delete('/:id',deleteGoal)
*/
module.exports=router