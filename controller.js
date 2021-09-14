const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'ROCOGlossaryStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.assign({
						ROCOGlossaryTopic: Math.random().toString(),
					}, Object.fromEntries((new URLSearchParams(req.query)).entries())));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		}];
	},

};

Object.assign(exports, mod);
