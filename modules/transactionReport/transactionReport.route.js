'use strict';


var transactionReportCtrl = require('./transactionReport.controller');

module.exports = function(app) {

    /**Declare all routes file */
    app.post('/addTransaction',[transactionReportCtrl.addTransaction]);
    app.get('/getTransaction',[transactionReportCtrl.getTransaction]);

};