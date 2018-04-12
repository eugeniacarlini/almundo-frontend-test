/*
* HOTELS SERVER MODEL
*/

import mongoose from 'mongoose';
var Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: String,
    image: String,
    stars: Number,
    price: Number,
    amenities: [String],
    id: String
});
export default mongoose.model('Hotel', Schema);