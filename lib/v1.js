'use strict';

let QS = {
  format : 'json'
};

const REQUEST       = require('request-promise');
const DOME9_CONFIG  = REQUEST.defaults({
  baseUrl: 'https://api.dome9.com/v1/',
  json: true
});

class dome9 {
  constructor(username, apiKey) {
    this.username = username;
    this.apiKey   = apiKey;
  };

  authHeader() {
    return {
      Authorization: 'Basic ' + new Buffer(this.username + ':' + this.apiKey, 'utf8').toString('base64')
    };
  };

  getAgentServers() {
    return DOME9_CONFIG({
      uri: 'servers',
      headers: this.authHeader(),
      qs: QS
    });
  };

  getAgentServerById(id) {
    if (!id) throw new Error('id required in function getAgentServerById');
    return DOME9_CONFIG({
      uri: 'servers/' + id,
      headers: this.authHeader(),
      qs: QS
    });
  };

  getAccessLeases() {
    return DOME9_CONFIG({
      uri: 'accessleases',
      headers: this.authHeader(),
      qs: QS
    });
  };

  getIplists() {
    return DOME9_CONFIG({
      uri: 'iplists',
      headers: this.authHeader(),
      qs: QS
    });
  };

  createIplist(name, description, items) {
    if (!name || !descript || !items) throw new Error('name, description, & items required in function createIplist');
    return DOME9_CONFIG({
      method: 'POST',
      uri: 'iplists',
      headers: this.authHeader(),
      body: {
        Name: name,
        Description: description,
        Items: items
      }
    });
  };

  updateIplist(ip, description, items) {
    if (!ip || !name || !descript || !items) throw new Error('ip, description, & items required in function updateIplist');
    return DOME9_CONFIG({
      method: 'POST',
      uri: 'iplists/' + ip,
      headers: this.authHeader(),
      body: {
        Description: description,
        Items: items
      }
    });
  };

  deleteIplist(id) {
    if (!id) throw new Error('id required in function deleteIpList');
    return DOME9_CONFIG({
      method: 'DELETE',
      uri: 'iplists/' + id,
      headers: this.authHeader(),
      qs: QS
    });
  };

  getIplistItems(id) {
    if (!id) throw new Error('id required in function getIplistItems');
    return DOME9_CONFIG({
      uri: 'iplists/' + id + '/items',
      headers: this.authHeader(),
      qs: QS
    });
  };

  createIplistItem(id, ip, comment) {
    if (!id || !ip || !comment) throw new Error('id, ip & comment required in function createIplistItem');
    return DOME9_CONFIG({
      method: 'POST',
      uri: 'iplists/' + id + '/items/' + ip,
      headers: this.authHeader(),
      body: {
        Comment: comment
      }
    });
  };

  deleteIplistItem(id, ip) {
    if (!id || !ip) throw new Error('id & ip required in function deleteIplistItem');
    return DOME9_CONFIG({
      method: 'DELETE',
      uri: 'iplists/' + id + '/items/' + ip,
      headers: this.authHeader()
    });
  };

  getBlacklist() {
    return DOME9_CONFIG({
      uri: 'blacklist',
      headers: this.authHeader(),
      qs: QS
    });
  };

  getBlacklistByIp(ip) {
    if (!ip) throw new Error('ip required in function getBlacklistByIp');
    return DOME9_CONFIG({
      uri: 'blacklist/items/' + ip,
      headers: this.authHeader(),
      qs: QS
    });
  };

  deleteBlacklistByIp(ip) {
    if (!ip) throw new Error('ip required in function deleteBlacklistByIp');
    return DOME9_CONFIG({
      method: 'DELETE',
      uri: 'blacklist/items/' + ip,
      headers: this.authHeader()
    });
  };

  createBlacklistItem(ip, comment, ttl) {
    if (!ip || !comment || !ttl) throw new Error('ip, comment, & ttl required in function createBlacklistItem');
    return DOME9_CONFIG({
      method: 'POST',
      uri: 'blacklist/items' + ip,
      headers: this.authHeader(),
      body: {
        Comment: comment,
        TTL: ttl
      }
    });
  };

  updateBlacklist(items) {
    if (!items) throw new Error('items required in function updateBlacklist');
    return DOME9_CONFIG({
      method: 'PUT',
      uri: 'blacklist',
      headers: this.authHeader(),
      body: {
        Items: items
      }
    });
  };

  getAccessLeaseById(id) {
    // Endpoint does not seem to presently access ID correctly
    if (!id) throw new Error('id required in function getAccessLeaseById');
    return DOME9_CONFIG({
      uri: 'accessleases/' + id,
      headers: this.authHeader(),
      qs: QS
    });
  }

  createLease(serviceURI, name) {
    if (!serviceURI || name) throw new Error('serviceURI & name required in function createLease');
    return DOME9_CONFIG({
      method: 'POST',
      uri: 'accessleases',
      headers: this.authHeader(),
      body: {
        ServiceURI: serviceURI,
        Name: name
      }
    });
  };

  deleteLeaseById(id) {
    if (!id) throw new Error('id required in function deleteLeaseById');
    return DOME9_CONFIG({
      method: 'DELETE',
      uri: 'accessleases/' + id,
      headers: this.authHeader(),
      qs: QS
    });
  };

};

module.exports = dome9;
