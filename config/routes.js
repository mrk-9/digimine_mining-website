module.exports.routes = {

  // HTML Views
  '/': { view: 'homepage' },
  '/works': { view: 'works' },
  '/pricing': { view: 'pricing' },
  '/faq': { view: 'faq' },
  '/about': { view: 'about' },
  '/contact': { view: 'contact' },
  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/welcome': { view: 'user/welcome' },

  // Endpoints
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',
};
