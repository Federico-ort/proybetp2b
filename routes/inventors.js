let express = require('express');
let router = express.Router();
const dataInventor = require('./../data/Inventor');
const verifyToken = require('./verifyToken');
const jwt = require('jsonwebtoken');
const config = require('../config');

const userid = 146;


/* GET generarToken */
router.get('/registerToken', async function (req, res, next) {
    const token = jwt.sign({ id: userid }, config.secret, {
        expiresIn: 60 * 60 * 24
    })
    res.json({ auth: true, token: token });
});

/* GET listado de inventores */
router.get('/', verifyToken, async function (req, res, next) {
    if (req.userid != userid) {
        res.status(404).json({
            auth: false,
            message: 'No user found'
        });
    }
    res.json(await dataInventor.getAllInventors());

});

// GET de un inventor
// /inventors/6
router.get('/:id', verifyToken, async (req, res) => {
    if (req.userid != userid) {
        res.status(404).json({
            auth: false,
            message: 'No user found'
        });
    }
    res.json(await dataInventor.getInventor(req.params.id));
});

// POST alta de un inventor
router.post('/',verifyToken, async (req, res) => {
    if (req.userid != userid) {
        res.status(404).json({
            auth: false,
            message: 'No user found'
        });
    }
    const inventor = req.body;
    await dataInventor.pushInventor(inventor);
    const inventorPersistido = await dataInventor.getInventor(inventor._id);
    res.json(inventorPersistido);
});

// PUT modificacion de un inventor
router.put('/:id',verifyToken, async (req, res) => {
    if (req.userid != userid) {
        res.status(404).json({
            auth: false,
            message: 'No user found'
        });
    }
    const inventor = req.body;
    inventor._id = req.params.id;
    await dataInventor.updateInventor(inventor);

    res.json(await dataInventor.getInventor(req.params.id));
});

router.delete('/:id',verifyToken, async (req, res) => {
    if (req.userid != userid) {
        res.status(404).json({
            auth: false,
            message: 'No user found'
        });
    }
    await dataInventor.deleteInventor(req.params.id);
    res.send('Inventor eliminado');
});

module.exports = router;