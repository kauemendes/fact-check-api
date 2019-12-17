'use strict';

const domainWhiteList = require('../fixtures/domainWhiteList.json').whitelist;

class CheckURL {
    
    constructor(message) {
        this.msg = message;
    }

    verify(url) {
        return { domainWhiteList }
    }

    sanitizeURL(url) {
        
    }


}

module.exports = CheckURL;