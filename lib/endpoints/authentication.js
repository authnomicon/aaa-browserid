exports = module.exports = function(server) {
  
  var config = {
    public-key: 'x',
    authentication: '/browserid/authentication',
    provisioning: '/broserid/provisioning'
  };
  
  
  
  
  function respond(req, res) {
    res.json(config);
  }
  
  // curl http://127.0.0.1:8080/.well-known/browserid
  return [ respond ];
};


exports['@require'] = [ 'http://schemas.modulate.io/js/aaa/browserid/Server' ];

exports['@implements'] = 'http://i.expressjs.com/endpoint';
