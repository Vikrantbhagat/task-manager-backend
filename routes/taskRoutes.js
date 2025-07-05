// const router = require("express").Router();
// const verify = require("../middleware/verifyToken");
// const { getAll, create, update, remove } = require("../controllers/taskController");

// router.use(verify);
// router.get("/", getAll);
// router.post("/", create);
// router.put("/:id", update);
// router.delete("/:id", remove);

// module.exports = router;


const router = require('express').Router();
const verify = require('../middleware/verifyToken');
const c = require('../controllers/taskController');

router.use(verify);
router.get('/',     c.getAll);
router.post('/',    c.create);
router.put('/:id',  c.update);
router.delete('/:id', c.remove);

module.exports = router;
