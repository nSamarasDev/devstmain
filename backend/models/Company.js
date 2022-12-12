const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  companyName: {
    type: String,
    required: true,
  },
  dispatchPhoneNumber: {
    type: String,
  },
  companyContact: {
    type: String,
  },
  email: {
    type: String,
  },
  companyServices: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  stateProv: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  phoneNumber1: {
    type: String,
  },
  ext: {
    type: String,
  },
  cellular: {
    type: String,
  },
  faxNumber: {
    type: String,
  },
  website: {
    type: String,
  },
  mcNumber: {
    type: String,
  },
  dotNumber: {
    type: String,
  },
  howDidYouHearAboutUs: {
    type: String,
  },
  wouldYouLikeContacted: {
    type: String,
  },
  aboutOurServices: [
    {
      service1: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      service2: {
        type: String,
      },
      description2: {
        type: String,
      },
      service3: {
        type: String,
      },
      description3: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
    },
  ],
  aboutTheCompany: [
    {
      whatWeDo: {
        type: String,
        required: true,
      },
      companyAchievements: {
        type: String,
        required: true,
      },

      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      companyGoals: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],

  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Company = mongoose.model('company', CompanySchema);
