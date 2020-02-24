const mongoose = require('../../../config/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
   date: Date,
   description: String,
   credit: Number,
   debit: Number,
   runningBalance:Number
});

const Transactions = mongoose.model('Transaction', transactionSchema);

exports.createTransaction = (data) => {
    const transaction = new Transactions(data);
    return transaction.save();
};

exports.allTransaction = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Transactions.find()
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

