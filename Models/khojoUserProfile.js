const mongoose = require('mongoose');

const khojoProfileSchema = new mongoose.Schema({
    pfp: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true
    },
    businessAddress: {
        type: String,
        required: true
    },
    businessDetails: {
        type: String,
        required: true
    },
    socialLinks: {
        type: String, //to be converted to to an array of objects or a normal object
        required: false
       
    },
    skills: {
        type: String, // to be converted to array
        required:false
       
    }
});

module.exports = mongoose.model('KhojoProfile', khojoProfileSchema);
