const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('ROCOGlossary_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
				ROCOGlossaryHeadingEnabled: true,
			});
		});

		it('localizes ROCOGlossaryHeading', function () {
			browser.assert.text(ROCOGlossaryHeading, uLocalized('ROCOGlossaryHeadingText'));
		});

		it('localizes ROCOGlossaryDoorlessLink', function () {
			browser.assert.text(ROCOGlossaryDoorlessLink, uLocalized('ROCOGlossaryDoorlessLinkText'));
		});

		it('localizes ROCOGlossaryDoorlessBlurb', function() {
			browser.assert.text(ROCOGlossaryDoorlessBlurb, uLocalized('ROCOGlossaryDoorlessBlurbText'));
		});

		it('localizes ROCOGlossaryZeroDataLink', function () {
			browser.assert.text(ROCOGlossaryZeroDataLink, uLocalized('ROCOGlossaryZeroDataLinkText'));
		});

		it('localizes ROCOGlossaryZeroDataBlurb', function() {
			browser.assert.text(ROCOGlossaryZeroDataBlurb, uLocalized('ROCOGlossaryZeroDataBlurbText'));
		});

		it('localizes ROCOGlossaryAppsLink', function () {
			browser.assert.text(ROCOGlossaryAppsLink, uLocalized('ROCOGlossaryAppsLinkText'));
		});

		it('localizes ROCOGlossaryAppsBlurb', function() {
			browser.assert.text(ROCOGlossaryAppsBlurb, uLocalized('ROCOGlossaryAppsBlurbText'));
		});

	});

});
