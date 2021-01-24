const router = require('express').Router();
const adHook_Controller = require('../controllers/adHook_Controller');

router.route('/generateOne')
	.get(adHook_Controller.generate_hook);

router.route('/generateMultiple')
	.get(adHook_Controller.generate_multiple);

module.exports = router;
