const mongoose = require("mongoose");

// Define the Service schema for individual services
// const ServiceSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: String }, // Assuming price can be optional
//     image: { type: String, required: true }
// });

// Define the main schema for the Model
const ModelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: {type: String ,required: true},
   categories: [{type:String, required: true}],
    price: {type: String , required: true}
});

// Create and export the model using the ModelSchema
module.exports = mongoose.model('ServiceModel', ModelSchema);
