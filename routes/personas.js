const { Router } = require('express');

const {     
    personaoPost } = require('../controllers/persona');


const router = Router();
router.post('/',personaoPost );

module.exports = router;