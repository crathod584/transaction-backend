const TransactionModel = require('./model/transactionReport.model');

exports.addTransaction = (req, res) => {
   TransactionModel.createTransaction(req.body)
       .then((result) => {
           res.status(201).send({id: result._id});
       });
};


exports.getTransaction = (req, res) => {   
   TransactionModel.allTransaction().then((result) => {
       res.status(200).send(result);
   })
};