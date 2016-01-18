# dome9.js

## Documentation
  - [API Reference](http://developer.dome9.com/reference.html)
  - [API Console](http://developer.dome9.com/console.html)

## Usage

    let Dome9 = require('./index');
    let dome9 = new Dome9(USERNAME, APIKEY);

## Class Functions
  [Promises](#promises)

  - .getAgentServers()
  - .getAgentServerById(id)
  - .getAccessLeases()
  - .getIplists()
  - .createIpList(name, description, items)
  - .updateIpList(ip, description, items)
  - .deleteIpList(id)
  - .getIplistItems(id)
  - .createIplistItem(id, ip, comment)
  - .deleteIplistItem(id, ip)
  - .getBlacklist()
  - .getBlacklistByIp(ip)
  - .deleteBlacklistByIp(ip)
  - .createBlacklistItem(ip, comment, ttl)
  - .updateBlacklist(items)
  - .getAccessLeaseById(id)
  - .createLease(serviceURI, name)
  - .deleteLeaseById(id)

## Example

    'use strict';

    let co    = require('co');
    let Dome9 = require('dome9');

    const USERNAME = '';
    const APIKEY   = '';

    let start = function () {
      co(function *() {
        let dome9         = new Dome9(USERNAME, APIKEY);
        let servers       = yield dome9.getAgentServers();
        // let server        = yield dome9.getAgentServerById();
        // let accessLeases  = yield dome9.getAccessLeases();
        // let accessLease   = yield dome9.getAccessLeaseById();
        // let blacklist     = yield dome9.getBlacklist();
        // let blacklistIp   = yield dome9.getBlacklistByIp();
        // let ipLists       = yield dome9.getIplists();

        console.log('servers', servers);
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

### Author
  [Peter A. Tariche](https://github.com/ptariche)
