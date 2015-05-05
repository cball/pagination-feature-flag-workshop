import Pretender from 'pretender';
import Ember from 'ember';

Ember.Test.registerHelper('createServer', function(){
  let server = new Pretender();

  server.prepareBody = function(body){
    return body ? JSON.stringify(body) : '{"error": "not found"}';
  };

  server.prepareHeaders = function(headers){
    headers['content-type'] = 'application/json';
    return headers;
  };

  return server;
});
