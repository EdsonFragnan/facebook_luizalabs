"use strict";

const FB = require('fb');
let auth = require('./../config/auth.js');

module.exports.processor = (id, callback) => {
  FB.api('oauth/access_token', {
    client_id: auth.facebookAuth.clientID,
    client_secret: auth.facebookAuth.clientSecret,
    grant_type: auth.facebookAuth.grantType,
    user: id
  }, (res) => {
    if(!res || res.error) {
      callback(res.error, null);
    }
    const token = res.access_token;
    FB.setAccessToken(token);
    FB.api(id, 'get', {fields: ['id', 'name', 'gender']}, (res) => {
      if(!res || res.error) {
        callback(res.error, null);
      } else {
        const request = {
          username: res.username === undefined ? res.name : res.username,
          facebookId: parseInt(res.id),
          name: res.name,
          gender: res.gender === undefined ? 'não especificado' : res.gender
        };
        callback(null, request);
      }
    });
  });
};
