const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOGlossary_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('ROCOGlossaryZeroDataLink', function test_ROCOGlossaryZeroDataLink () {

		it('sets href', function () {
			browser.assert.attribute(ROCOGlossaryZeroDataLink, 'href', 'https://rosano.hmm.garden/01etqm6qmcva4hja4y037ecaj6');
		});

		it('sets target', function () {
			browser.assert.attribute(ROCOGlossaryZeroDataLink, 'target', 	'_blank');
		});
	
	});

});
