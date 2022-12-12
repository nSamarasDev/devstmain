const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');
const slugify = require('slugify');

const LoadBoardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company',
  },
  nameOfPay: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    enum: ['new', 'in transit', 'current', 'closed'],
    default: 'new',
  },
  tripMiles: {
    type: String,
  },
  originAddress: {
    type: String,
    required: true,
  },
  originLocation: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],

      index: '2dsphere',
    },
    formattedOrigin: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  destinationAddress: {
    type: String,
    required: true,
  },
  destinationLocation: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],

      index: '2dsphere',
    },
    formattedDestinationAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  trailerType: {
    type: String,
  },
  loadSize: {
    type: String,
  },
  loadLength: {
    type: String,
  },
  weight: {
    type: String,
  },
  payRate: {
    type: String,
  },
  shipDate: {
    type: Date,
  },
  shipmentContents: {
    type: String,
  },
  description: {
    type: String,
  },
  slug: String,
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create bootcamp slug from the name
LoadBoardSchema.pre('save', function (next) {
  this.slug = slugify(this.nameOfPay, { lower: true });
  next();
});

// Geocode & create origian location field
LoadBoardSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.originAddress);
  this.originLocation = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedOrigin: loc[0].formattedOrigin,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode,
  };

  // Do not save address in DB
  this.originAddress = undefined;
  next();
});

// Geocode & create origian location field
LoadBoardSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.destinationAddress);
  this.destinationLocation = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedDestinationAddress: loc[0].formattedDestinationAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode,
  };

  // Do not save address in DB
  this.destinationAddress = undefined;
  next();
});

//next

module.exports = LoadBoard = mongoose.model('loadBoard', LoadBoardSchema);
