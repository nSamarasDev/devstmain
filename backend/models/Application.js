const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      //required: [true, 'Please add a middle name or type none'],
    },
    lastName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      //enum: ['new', 'closed', 'current'],
    },
    email: {
      type: String,
      //required: [true, 'Please add your email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    socialSecurityNumber: {
      type: String,
      //required: [true, 'Please add a social security number'],
      maxlength: [9, 'No more than 9 digits'],
      match: [
        /^(?!666|000|9\d{2})\d{3}[- ]{0,1}(?!00)\d{2}[- ]{0,1}(?!0{4})\d{4}$/,
        'Please add a valid social security number format',
      ],
    },
    dateOfBirth: {
      type: String,
      //required: [true, 'Please add date of birth'],
      maxlength: [20, 'No more than 20 charactors'],
    },
    positionAppliedFor: {
      type: [String],
      required: true,
    },
    dateAvaiableForWork: {
      type: String,
      //maxlength: [20, 'When can you start?'],
    },
    phoneNumber: {
      type: String,
      maxlength: [20, 'Phone number can not be longer than 20 characters'],
    },
    legalRightToWork: {
      type: String,
      //required: true,
    },
    previousResidency: [
      {
        currentAddress: {
          type: String,
          required: true,
        },
        mailingAddress: {
          type: String,
          required: true,
        },
        previous1: {
          type: String,
          required: true,
        },
        previous2: {
          type: String,
          //required: true,
        },
        previous3: {
          type: String,
          //required: true,
        },
      },
    ],
    licenseInformation: [
      {
        state: {
          type: String,
          //required: true,
        },
        licenseNumber: {
          type: String,
          //required: true,
        },
        typeClass: {
          type: String,
          //required: true,
        },
        expireDate: {
          type: String,
          //required: true,
        },
        previouslyHeldLicenses: {
          type: String,
          //required: true,
        },
        endorsments: {
          type: String,
          //required: false,
        },
      },
    ],
    drivingExperience: [
      {
        straightTruck: {
          type: String,
          required: true,
        },
        typeOfEquipment1: {
          type: [String],
        },
        dateFrom1: {
          type: String,
        },
        dateTo1: {
          type: String,
        },
        tractorAndSemiTrailer: {
          type: String,
          //required: true,
        },
        typeOfEquipment2: {
          type: [String],
        },
        dateFrom2: {
          type: String,
        },
        dateTo2: {
          type: String,
        },
        tractorAndTwoTrailers: {
          type: String,
          //required: true,
        },
        typeOfEquipment3: {
          type: [String],
        },
        dateFrom3: {
          type: String,
        },
        dateTo3: {
          type: String,
        },
        tractorAndTanker: {
          type: String,
          //required: true,
        },
        typeOfEquipment4: {
          type: [String],
        },
        dateFrom4: {
          type: String,
        },
        dateTo4: {
          type: String,
        },
      },
    ],
    accidentHistory: [
      {
        natureOfAccident: {
          type: String,
          required: true,
        },
        date: {
          type: String,
        },
        fatalities: {
          type: String,
        },
        injuries: {
          type: String,
        },
        chemicalSpills: {
          type: String,
        },
        natureOfAccident2: {
          type: String,
          //required: true,
        },
        date2: {
          type: String,
        },
        fatalities2: {
          type: String,
        },
        injuries2: {
          type: String,
        },
        chemicalSpills2: {
          type: String,
        },
        natureOfAccident3: {
          type: String,
          //required: true,
        },
        date3: {
          type: String,
        },
        fatalities3: {
          type: String,
        },
        injuries3: {
          type: String,
        },
        chemicalSpills3: {
          type: String,
        },
      },
    ],
    trafficConvictions: [
      {
        violation: {
          type: String,
          required: true,
        },
        dateConvicted: {
          type: String,
        },
        stateOfViolation: {
          type: String,
        },
        penality: {
          type: String,
        },
        violation2: {
          type: String,
        },
        dateConvicted2: {
          type: String,
        },
        stateOfViolation2: {
          type: String,
        },
        penality2: {
          type: String,
        },
        violation3: {
          type: String,
        },
        dateConvicted3: {
          type: String,
        },
        stateOfViolation3: {
          type: String,
        },
        penality3: {
          type: String,
        },
        violation4: {
          type: String,
        },
        dateConvicted4: {
          type: String,
        },
        stateOfViolation4: {
          type: String,
        },
        penality4: {
          type: String,
        },
        deniedPrivilegeToOperateMotorVehicle: {
          type: String,
        },
        hasDrivingPrivilegeEverBeenRevoked: {
          type: String,
        },
      },
    ],
    employmentHistory: [
      {
        priorEmployerName: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
        },
        address: {
          type: String,
        },
        nick: {
          type: String,
        },
        fromDate: {
          type: String,
        },
        toDate: {
          type: String,
        },
        reasonForLeaving: {
          type: String,
        },
        salary: {
          type: String,
        },
        explainGapsInEmploymentReason: {
          type: String,
        },
        wereYouSubjectToFederalMotorCarrierSafteyRegulations: {
          type: String,
        },
        longSentance: {
          type: String,
        },
        priorEmployerName2: {
          type: String,
        },
        phoneNumber2: {
          type: String,
        },
        address2: {
          type: String,
        },
        tom: {
          type: String,
        },
        fromDate2: {
          type: String,
        },
        toDate2: {
          type: String,
        },
        reasonForLeaving2: {
          type: String,
        },
        salary2: {
          type: String,
        },
        explainGapsInEmploymentReason2: {
          type: String,
        },
        wereYouSubjectToFederalMotorCarrierSafteyRegulations2: {
          type: String,
        },
        longSentance2: {
          type: String,
        },
        priorEmployerName3: {
          type: String,
        },
        phoneNumber3: {
          type: String,
        },
        address3: {
          type: String,
        },
        harry: {
          type: String,
        },
        fromDate3: {
          type: String,
        },
        toDate3: {
          type: String,
        },
        reasonForLeaving3: {
          type: String,
        },
        salary3: {
          type: String,
        },
        explainGapsInEmploymentReason3: {
          type: String,
        },
        wereYouSubjectToFederalMotorCarrierSafteyRegulations3: {
          type: String,
        },
        longSentance3: {
          type: String,
        },
      },
    ],
    educationHistory: [
      {
        highSchool: {
          type: String,
          required: true,
        },
        schoolLocation: {
          type: String,
        },
        courseOfStudy: {
          type: String,
        },
        yearsCompleted: {
          type: String,
        },
        graduate: {
          type: String,
        },
        details: {
          type: String,
        },
        college: {
          type: String,
        },
        schoolLocation2: {
          type: String,
        },
        courseOfStudy2: {
          type: String,
        },
        yearsCompleted2: {
          type: String,
        },
        graduate2: {
          type: String,
        },
        details2: {
          type: String,
        },
        other: {
          type: String,
        },
        schoolLocation3: {
          type: String,
        },
        courseOfStudy3: {
          type: String,
        },
        yearsCompleted3: {
          type: String,
        },
        graduate3: {
          type: String,
        },
        details3: {
          type: String,
        },
      },
    ],
    signature: [
      {
        applicantSignature: {
          type: String,
          required: true,
        },
        printedName: {
          type: String,
        },
        date: {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('application', ApplicationSchema);
