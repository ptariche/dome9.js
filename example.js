'use strict';

let co    = require('co');
let Dome9 = require('./index');

const USERNAME = '';
const APIKEY   = '';

let start = function () {
  co(function *() {
    let dome9         = new Dome9(USERNAME, APIKEY);
    // let servers       = yield dome9.getAgentServers();
    // let server        = yield dome9.getAgentServerById();
    // let accessLeases  = yield dome9.getAccessLeases();
    // let accessLease   = yield dome9.getAccessLeaseById();
    // let blacklist     = yield dome9.getBlacklist();
    // let blacklistIp   = yield dome9.getBlacklistByIp();
    // let ipLists       = yield dome9.getIplists();

    // console.log('servers', servers);
    // console.log('server', server);
    // console.log('accessLeases', accessLeases);
    // console.log('accessLease', accessLease);
    // console.log('blacklist', blacklist);
    // console.log('blacklistIp', blacklistIp);
    // console.log('ipLists', ipLists);
  }).catch(function (err) {
    console.error(err.stack);
  });
};

start();
