'use strict';

var Bootcamp = require('../../../models/bootcamp');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/bootcamps',
    config: {
      description: 'Access all Bootcamps',
      auth: false,
      handler: function(request, reply){
        Bootcamp.find(function(err, bootcamps){
          if(err){ return reply().code(400); }
          return reply(bootcamps);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'bootcamps.index'
};
