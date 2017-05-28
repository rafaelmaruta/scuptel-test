import jQuery from 'jquery';
import Config from '../Config';

function RequestsAsync(callback) {
	var $        = jQuery,
		callback = callback || undefined,
		pricing  = $.getJSON(Config.urlPricing),
		details  = $.getJSON(Config.urlDetails),
		plans    = $.getJSON(Config.urlPlans);

	$.when(pricing, details, plans)
		.done(function(rPricing, rDetails, rPlans) {
			var results = {
				pricing: rPricing,
				details: rDetails,
				plans  : rPlans
		    };  
			if (callback) {
				callback(results);
			} else {
			    return results;
			};
		}).fail(function(error) {
			console.log('Error: ', error);
		});
}

export default RequestsAsync;