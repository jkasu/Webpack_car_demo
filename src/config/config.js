module.exports = {
	development : {
		app : {
			name : 'CarPool',
			port : process.env.PORT || 3000,
			mongoUrl: 'mongodb://jyothsna:jyo123@ds147011.mlab.com:47011/car_pool'
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint : 'http://gmail.com',
				issuer : 'passport-saml'			}
		},
		googleAuth : {
	        clientID      : '552667241370-ok8al3kvov66dmikjpg3c5v36u44onti.apps.googleusercontent.com',
	        clientSecret  : 'cOk1hmg6uiCLzEt22MRnbQ6Z',
	        callbackURL   : 'http://localhost:3000/auth/google/callback'
	    }
	},

	production : {
		app : {
			name : 'BC-CarPool',
			port : process.env.PORT || 3000,
			mongoUrl: process.env.MONGOLAB_URI ||'mongodb://localhost:27017/carpool'

			// (async function() {
			// 	try {
			  
			// 	  const client = await MongoClient.connect(uri,{ useNewUrlParser: true });
			// 	  // ... anything
			  
			// 	  client.close();
			// 	} catch(e) {
			// 	  console.error(e)
			// 	}
			  
			//   })()
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint: 'https://ortusconsulting.co',
				//entryPoint : 'https://thoughtworks.oktapreview.com/app/thoughtworks_thola_1/exk5ef234whg4Xo090h7/sso/saml',
				issuer : 'passport-saml'			}
		},
		googleAuth : {
			clientID      : '652660183776-3flm1st7t9c0bu0epktro3eruv472kte.apps.googleusercontent.com',
			clientSecret  : '0NaHD3Oyp1Xak9CRihsLBJSo',
			//callbackURL : 'https://mysterious-badlands-42742.herokuapp.com/'
			callbackURL   : 'https://thola.herokuapp.com/auth/google/callback'
	       
	    }
	}

}

