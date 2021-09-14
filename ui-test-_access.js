const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOGlossary: '.ROCOGlossary',

	ROCOGlossaryZeroDataLink: '.ROCOGlossaryZeroDataLink',
	ROCOGlossaryZeroDataBlurb: '.ROCOGlossaryZeroDataBlurb',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('ROCOGlossary_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOGlossary', function () {
		browser.assert.elements(ROCOGlossary, 1);
	});

	it('shows ROCOGlossaryZeroDataLink', function () {
		browser.assert.elements(ROCOGlossaryZeroDataLink, 1);
	});

	it('shows ROCOGlossaryZeroDataBlurb', function () {
		browser.assert.elements(ROCOGlossaryZeroDataBlurb, 1);
	});

});
