var express = require('express'); 

const router = express.Router()

// -------------------------------------
const auth_sign = require('../controllers/auth/auth_sign');
const _system = require('../controllers/frontend/exam1'); 


// ------------ authentication --------------------
router.post('/sign', auth_sign.authenticateSignToken.sign_mid);
router.post('/verify', auth_sign.authenticateSignToken.verify_mid);
//-------------------------------------------------

// ------------- exam1 ------------------
router.post('/counter_control1', auth_sign.authenticateSignToken.verify_mid, _system.exam1);
router.post('/counter_control2',  _system.exam1);
 

module.exports = router;