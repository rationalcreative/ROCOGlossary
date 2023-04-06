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
			return browser.assert.text(ROCOGlossaryHeading, uLocalized('ROCOGlossaryHeadingText'));
		});

		it('localizes ROCOGlossaryDoorlessLink', function () {
			return browser.assert.text(ROCOGlossaryDoorlessLink, uLocalized('ROCOGlossaryDoorlessLinkText'));
		});

		it('localizes ROCOGlossaryDoorlessBlurb', function() {
			return browser.assert.text(ROCOGlossaryDoorlessBlurb, uLocalized('ROCOGlossaryDoorlessBlurbText'));
		});

		it('localizes ROCOGlossaryZeroDataLink', function () {
			return browser.assert.text(ROCOGlossaryZeroDataLink, uLocalized('ROCOGlossaryZeroDataLinkText'));
		});

		it('localizes ROCOGlossaryZeroDataBlurb', function() {
			return browser.assert.text(ROCOGlossaryZeroDataBlurb, uLocalized('ROCOGlossaryZeroDataBlurbText'));
		});

		it('localizes ROCOGlossaryGoingWebLink', function () {
			return browser.assert.text(ROCOGlossaryGoingWebLink, uLocalized('ROCOGlossaryGoingWebLinkText'));
		});

		it('localizes ROCOGlossaryGoingWebBlurb', function() {
			return browser.assert.text(ROCOGlossaryGoingWebBlurb, uLocalized('ROCOGlossaryGoingWebBlurbText'));
		});

		it('localizes ROCOGlossaryAppsLink', function () {
			return browser.assert.text(ROCOGlossaryAppsLink, uLocalized('ROCOGlossaryAppsLinkText'));
		});

		it('localizes ROCOGlossaryAppsBlurb', function() {
			return browser.assert.text(ROCOGlossaryAppsBlurb, uLocalized('ROCOGlossaryAppsBlurbText'));
		});

	});

});
