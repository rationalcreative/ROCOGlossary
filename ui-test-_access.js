const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOGlossary: '.ROCOGlossary',

	ROCOGlossaryHeading: '.ROCOGlossaryHeading',

	ROCOGlossaryDoorlessLink: '.ROCOGlossaryDoorlessLink',
	ROCOGlossaryDoorlessBlurb: '.ROCOGlossaryDoorlessBlurb',

	ROCOGlossaryZeroDataLink: '.ROCOGlossaryZeroDataLink',
	ROCOGlossaryZeroDataBlurb: '.ROCOGlossaryZeroDataBlurb',

	ROCOGlossaryGoingWebLink: '.ROCOGlossaryGoingWebLink',
	ROCOGlossaryGoingWebBlurb: '.ROCOGlossaryGoingWebBlurb',

	ROCOGlossaryAppsLink: '.ROCOGlossaryAppsLink',
	ROCOGlossaryAppsBlurb: '.ROCOGlossaryAppsBlurb',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('ROCOGlossary_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOGlossary', function () {
		return browser.assert.elements(ROCOGlossary, 1);
	});

	it('hides ROCOGlossaryHeading', function () {
		return browser.assert.elements(ROCOGlossaryHeading, 0);
	});

	it('shows ROCOGlossaryDoorlessLink', function () {
		return browser.assert.elements(ROCOGlossaryDoorlessLink, 1);
	});

	it('shows ROCOGlossaryDoorlessBlurb', function () {
		return browser.assert.elements(ROCOGlossaryDoorlessBlurb, 1);
	});

	it('shows ROCOGlossaryZeroDataLink', function () {
		return browser.assert.elements(ROCOGlossaryZeroDataLink, 1);
	});

	it('shows ROCOGlossaryZeroDataBlurb', function () {
		return browser.assert.elements(ROCOGlossaryZeroDataBlurb, 1);
	});

	it('shows ROCOGlossaryGoingWebLink', function () {
		return browser.assert.elements(ROCOGlossaryGoingWebLink, 1);
	});

	it('shows ROCOGlossaryGoingWebBlurb', function () {
		return browser.assert.elements(ROCOGlossaryGoingWebBlurb, 1);
	});

	it('shows ROCOGlossaryAppsLink', function () {
		return browser.assert.elements(ROCOGlossaryAppsLink, 1);
	});

	it('shows ROCOGlossaryAppsBlurb', function () {
		return browser.assert.elements(ROCOGlossaryAppsBlurb, 1);
	});

	context('ROCOGlossaryHeadingEnabled', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				ROCOGlossaryHeadingEnabled: true,
			});
		});

		it('shows ROCOGlossaryHeading', function () {
			return browser.assert.elements(ROCOGlossaryHeading, 1);
		});
	
	});

});
