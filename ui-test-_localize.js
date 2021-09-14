const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('ROCOGlossary_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes ROCOGlossaryZeroDataLink', function () {
			browser.assert.text(ROCOGlossaryZeroDataLink, uLocalized('ROCOGlossaryZeroDataLinkText'));
		});

		it('localizes ROCOGlossaryZeroDataBlurb', function() {
			browser.assert.text(ROCOGlossaryZeroDataBlurb, uLocalized('ROCOGlossaryZeroDataBlurbText'));
		});

	});

});
