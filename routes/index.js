const router = require('express').Router();

const adHook_Controller = require('../controllers/adHook_Controller');
// TODO: Create route(s?) for construction and display of adventure hooks

// Display single advneture hook
router.route('/generateOne')
	.get(adHook_Controller.generate_hook);

	
router.route('/generateMultiple')
	.get(adHook_Controller.generate_multiple);

module.exports = router;
