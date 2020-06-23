const express = require('express');
const router = express.Router();
const boogiesCtrl = require('../../controllers/boogies');

router.get('/', boogiesCtrl.index);
router.get('/:id', boogiesCtrl.show);
router.post('/', boogiesCtrl.create);
router.delete('/:id', boogiesCtrl.delete);
router.put('/:id', boogiesCtrl.update);


module.exports = router;