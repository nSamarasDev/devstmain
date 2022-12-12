const mongoose = require('mongoose');
const slugify = require('slugify');

const ContactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slug: String,
  description: {
    type: String,
    //required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be longer than 500 characters'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create slug from name
ContactSchema.pre('save', function (next) {
  //console.log('Slugify ran', this.name)
  this.slug = slugify(this.email, { lowerr: true });
  next();
});

module.exports = Contact = mongoose.model('contact', ContactSchema);
