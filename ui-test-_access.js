const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOGlossary: '.ROCOGlossary',

	ROCOGlossaryHeading: '.ROCOGlossaryHeading',

	ROCOGlossaryDoorlessLink: '.ROCOGlossaryDoorlessLink',
	ROCOGlossaryDoorlessBlurb: '.ROCOGlossaryDoorlessBlurb',

	ROCOGlossaryZeroDataLink: '.ROCOGlossaryZeroDataLink',
	ROCOGlossaryZeroDataBlurb: '.ROCOGlossaryZeroDataBlurb',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('ROCOGlossary_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOGlossary', function () {
		browser.assert.elements(ROCOGlossary, 1);
	});

	it('hides ROCOGlossaryHeading', function () {
		browser.assert.elements(ROCOGlossaryHeading, 0);
	});

	it('shows ROCOGlossaryDoorlessLink', function () {
		browser.assert.elements(ROCOGlossaryDoorlessLink, 1);
	});

	it('shows ROCOGlossaryDoorlessBlurb', function () {
		browser.assert.elements(ROCOGlossaryDoorlessBlurb, 1);
	});

	it('shows ROCOGlossaryZeroDataLink', function () {
		browser.assert.elements(ROCOGlossaryZeroDataLink, 1);
	});

	it('shows ROCOGlossaryZeroDataBlurb', function () {
		browser.assert.elements(ROCOGlossaryZeroDataBlurb, 1);
	});

	context('ROCOGlossaryHeadingEnabled', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				ROCOGlossaryHeadingEnabled: true,
			});
		});

		it('shows ROCOGlossaryHeading', function () {
			browser.assert.elements(ROCOGlossaryHeading, 1);
		});
	
	});

});
