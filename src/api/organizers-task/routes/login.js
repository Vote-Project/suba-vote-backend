module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/login/:id/:nic',
        handler: 'login.login',
      }
    ]
  }