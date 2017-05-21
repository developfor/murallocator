
const proxy = require('express-http-proxy');

module.exports = class ApiProxy extends proxy {
    constructor(host, port, accessToken) {
        super(`${host}:${port}/`, {
            decorateRequest: function(proxyReq, originalReq) {
                console.log(`decorateRequest: `);
    
                return proxyReq;
            },
            intercept: function(rsp, data, req, res, callback) {
                console.log(`intercept: data= ${data}, req.baseUrl= ${req.baseUrl}, req.originalUrl= ${req.originalUrl},
                   req.url= ${req.url}, req.path= ${req.path}, req.query= ${req.query}, req.route= ${req.route}`);
                callback(null, data);
            },
            filter: function(req, res) {
                console.log(`filter: req.method= ${req.method}`);
                return true;
            }
        });
    }
}