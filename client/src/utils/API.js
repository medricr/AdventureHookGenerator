import axios from 'axios';

export default {
	getSingleHook: function(adventureHook_tense){
		return axios.get('/generateOne', {
			params: {
				table: adventureHook_tense
			}
		});
	},
	getMultipleHooks: function(adventureHook_tense){
		return axios.get('/generateMultiple', {
			params: {
				table: adventureHook_tense
			}
		})
	}
}