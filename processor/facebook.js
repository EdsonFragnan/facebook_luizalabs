'use strict';

const FB = require('fb');
const logger = require('./../servicos/logger.js');
const auth = require('./../config/auth.js');

module.exports.processor = (id, callback) => {
  FB.api('oauth/access_token', {
    client_id: auth.facebookAuth.clientID,
    client_secret: auth.facebookAuth.clientSecret,
    grant_type: auth.facebookAuth.grantType,
    user: id
  }, (res) => {
    if(!res || res.error) {
      logger.info(res.error);
      callback(res.error, null);
    }
    const token = res.access_token;
    FB.setAccessToken(token);
    FB.api(id, 'get', {fields: [
      'id',
      'first_name',
      'middle_name',
      'last_name',
      'name',
      'birthday',
      'hometown',
      'locale',
      'gender',
      'public_key',
      'website'
    ]}, (res) => {
      if(!res || res.error) {
        logger.info(res.error);
        callback(res.error, null);
      } else {
        const request = {
          facebookId: res.id === undefined ? 'não especificado' : res.id,
          first_name: res.first_name === undefined ? 'não especificado' : res.first_name,
          middle_name: res.middle_name === undefined ? 'não especificado' : res.middle_name,
          last_name: res.last_name === undefined ? 'não especificado' : res.last_name,
          name: res.name === undefined ? 'não especificado' : res.name,
          birthday: res.birthday === undefined ? 'não especificado' : res.birthday,
          hometown: res.hometown === undefined ? 'não especificado' : res.hometown,
          locale: res.locale === undefined ? 'não especificado' : res.locale,
          gender: res.gender === undefined ? 'não especificado' : res.gender,
          public_key: res.public_key === undefined ? 'não especificado' : res.public_key,
          website: res.website === undefined ? 'não especificado' : res.website
        };
        callback(null, request);
      }
    });
  });
};



