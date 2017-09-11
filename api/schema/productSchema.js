const mongoose = require('mongoose');
const counter = require('../model/counter');

const productSchema = mongoose.Schema({
    productId: Number,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: String,
    price: {
        type: Number,
        required: true
    },
    category: String,
    recommended: [String],
    discount: Number,
    promotions: Boolean,
    status: Boolean,
    caloricity: Number,
    servingSize: Number,
    difficulty: String,
    spiceLevel: String,
    ingredients: [
        {
            ingredientId: Number,
            ingredientName: String,
            quantity: Number
        }
    ]
    // rate: {
    //     users_quantity: Number
    // }
});

productSchema.pre('save', function(next) {
    let doc = this;
    counter.findByIdAndUpdate({_id: 'productId'}, {$inc: { seq: 1} }, function(error, counter)   {
        if(error)
            return next(error);
        doc.productId = counter.seq;
        next();
    });
});

module.exports = productSchema;