const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOGlossary_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('ROCOGlossaryDoorlessLink', function test_ROCOGlossaryDoorlessLink () {

		it('sets href', function () {
			browser.assert.attribute(ROCOGlossaryDoorlessLink, 'href', 'https://rosano.hmm.garden/01evv3hq1ak4b6ng1jzppx5n2j');
		});

		it('sets target', function () {
			browser.assert.attribute(ROCOGlossaryDoorlessLink, 'target', 	'_blank');
		});
	
	});

	describe('ROCOGlossaryZeroDataLink', function test_ROCOGlossaryZeroDataLink () {

		it('sets href', function () {
			browser.assert.attribute(ROCOGlossaryZeroDataLink, 'href', 'https://rosano.hmm.garden/01etqm6qmcva4hja4y037ecaj6');
		});

		it('sets target', function () {
			browser.assert.attribute(ROCOGlossaryZeroDataLink, 'target', 	'_blank');
		});
	
	});

	describe('ROCOGlossaryAppsLink', function test_ROCOGlossaryAppsLink () {

		it('sets href', function () {
			browser.assert.attribute(ROCOGlossaryAppsLink, 'href', 'https://rosano.ca/apps');
		});

		it('sets target', function () {
			browser.assert.attribute(ROCOGlossaryAppsLink, 'target', 	'_blank');
		});
	
	});

});
