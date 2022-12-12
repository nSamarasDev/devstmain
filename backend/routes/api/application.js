const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Application = require('../../models/Application');
const User = require('../../models/User');
const Profile = require('../../models/Profiles');

// @route  GET api/application/me
// @desc  Test route
//@access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const application = await Application.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!application) {
      return res
        .status(400)
        .json({ msg: 'There is no application for this user' });
    }

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/application
// @desc   Create or update user application
//@access  Private
router.post(
  '/',
  [
    auth,
    [
      check('firstName', 'First name is required').not().isEmpty(),
      check('positionAppliedFor', 'Position applied for is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      middleName,
      lastName,
      status,
      email,
      socialSecurityNumber,
      dateOfBirth,
      dateAvaiableForWork,
      phoneNumber,
      legalRightToWork,
      positionAppliedFor,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin,
    } = req.body;

    // Build application object
    const applicationFields = {};
    applicationFields.user = req.user.id;
    if (firstName) applicationFields.firstName = firstName;
    if (middleName) applicationFields.middleName = middleName;
    if (lastName) applicationFields.lastName = lastName;
    if (status) applicationFields.status = status;
    if (email) applicationFields.email = email;
    if (socialSecurityNumber)
      applicationFields.socialSecurityNumber = socialSecurityNumber;
    if (dateOfBirth) applicationFields.dateOfBirth = dateOfBirth;
    if (dateAvaiableForWork)
      applicationFields.dateAvaiableForWork = dateAvaiableForWork;
    if (phoneNumber) applicationFields.phoneNumber = phoneNumber;
    if (legalRightToWork) applicationFields.legalRightToWork = legalRightToWork;
    if (positionAppliedFor) {
      applicationFields.positionAppliedFor = positionAppliedFor
        .split(',')
        .map((positionAppliedFor) => positionAppliedFor.trim());
    }

    // Build social object
    applicationFields.social = {};
    if (youtube) applicationFields.social.youtube = youtube;
    if (twitter) applicationFields.social.twitter = twitter;
    if (facebook) applicationFields.social.facebook = facebook;
    if (instagram) applicationFields.social.instagram = instagram;
    if (linkedin) applicationFields.social.linkedin = linkedin;

    try {
      let application = await Application.findOne({ user: req.user.id });

      if (application) {
        // update test
        application = await Application.findOneAndUpdate(
          { user: req.user.id },
          { $set: applicationFields },
          { new: true }
        );

        return res.json(application);
      }

      // Create
      application = new Application(applicationFields);

      await application.save();
      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  GET api/application
// @desc   Get all applications
//@access  private
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().populate('user', [
      'name',
      'avatar',
    ]);
    res.json(applications);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/application/user/:user_id
// @desc   Get application by user id
//@access  private
router.get('/user/:user_id', async (req, res) => {
  try {
    const applications = await Application.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);
    if (!applications)
      return res.status(400).json({ msg: 'Application not found' });
    res.json(applications);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Application not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route  GET api/application/:app_id
// @desc   Get application by app_id
//@access  Private
router.get('/:app_id', auth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.app_id).populate(
      'user',
      'name'
    );

    if (!application)
      return res.status(400).json({ msg: 'No application found' });
    res.json(application);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'No application found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/application
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    //await Profile.deleteMany({ user: req.user });

    // Remove profile
    // Remove user
    await Promise.all([
      Profile.deleteMany({ user: req.user.id }),
      Application.findOneAndRemove({ user: req.user.id }),
      User.findOneAndRemove({ _id: req.user.id }),
    ]);

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/application
// @desc     Delete application by id
// @access   Private
router.delete('/:application_id', auth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.application_id);

    if (application) {
      await application.remove();
    }

    res.json({ success: true, msg: 'Application details removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.status(200);
});

// @route    PUT api/application/previousResidency
// @desc     Add application resources
// @access   Private
router.put(
  '/previousResidency',
  [
    auth,
    [
      check('currentAddress', 'Current address is required').not().isEmpty(),
      check('mailingAddress', 'Mailing adderss is required').not().isEmpty(),
      check('previous1', 'Previous 1st` adderss is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { currentAddress, mailingAddress, previous1, previous2, previous3 } =
      req.body;

    const newAddress = {
      currentAddress,
      mailingAddress,
      previous1,
      previous2,
      previous3,
    };

    try {
      const application = await Application.findOne({ user: req.user.id });

      application.previousResidency.unshift(newAddress);

      await application.save();

      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/application/previousResidency/:pvR_id
// @desc     Delete application previous residency
// @access   Private
router.delete('/previousResidency/:pvr_id', auth, async (req, res) => {
  try {
    const application = await Application.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = application.previousResidency
      .map((item) => item.id)
      .indexOf(req.params.pvr_id);

    application.previousResidency.splice(removeIndex, 1);

    await application.save();

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/application/licenseInformation
// @desc     Add application resources
// @access   Private
router.put(
  '/licenseInformation',
  [
    auth,
    [
      check('state', 'State is required').not().isEmpty(),
      //check('licenseNumber', 'License number is required').not().isEmpty(),
      check('typeClass', 'Type class is required').not().isEmpty(),
      check('expireDate', 'License expire date is required').not().isEmpty(),
      check(
        'previouslyHeldLicenses',
        'Please list any previously held licenses is required'
      )
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      state,
      licenseNumber,
      typeClass,
      expireDate,
      previouslyHeldLicenses,
      endorsments,
    } = req.body;

    const newLicenseInformation = {
      state,
      licenseNumber,
      typeClass,
      expireDate,
      previouslyHeldLicenses,
      endorsments,
    };

    try {
      const application = await Application.findOne({ user: req.user.id });

      application.licenseInformation.unshift(newLicenseInformation);

      await application.save();

      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/application/licenseInformation/:li_id
// @desc     Delete application previous residency
// @access   Private
router.delete('/licenseInformation/:li_id', auth, async (req, res) => {
  try {
    const application = await Application.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = application.licenseInformation
      .map((item) => item.id)
      .indexOf(req.params.li_id);

    application.licenseInformation.splice(removeIndex, 1);

    await application.save();

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/application/drivingExperience
// @desc     Add application resources
// @access   Private
router.put(
  '/drivingExperience',
  [
    auth,
    [
      check('straightTruck', 'Straight truck experience is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      straightTruck,
      typeOfEquipment1,
      dateFrom1,
      dateTo1,
      tractorAndSemiTrailer,
      typeOfEquipment2,
      dateFrom2,
      dateTo2,
      tractorAndTwoTrailers,
      typeOfEquipment3,
      dateFrom3,
      dateTo3,
      tractorAndTanker,
      typeOfEquipment4,
      dateFrom4,
      dateTo4,
    } = req.body;

    const newDrivingExperience = {
      straightTruck,
      typeOfEquipment1,
      dateFrom1,
      dateTo1,
      tractorAndSemiTrailer,
      typeOfEquipment2,
      dateFrom2,
      dateTo2,
      tractorAndTwoTrailers,
      typeOfEquipment3,
      dateFrom3,
      dateTo3,
      tractorAndTanker,
      typeOfEquipment4,
      dateFrom4,
      dateTo4,
    };

    try {
      const application = await Application.findOne({ user: req.user.id });

      application.drivingExperience.unshift(newDrivingExperience);

      await application.save();

      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/application/drivingExperience/:de_id
// @desc     Delete application previous residency
// @access   Private
router.delete('/drivingExperience/:de_id', auth, async (req, res) => {
  try {
    const application = await Application.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = application.drivingExperience
      .map((item) => item.id)
      .indexOf(req.params.li_id);

    application.drivingExperience.splice(removeIndex, 1);

    await application.save();

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/application/accidentHistory
// @desc     Add application resources
// @access   Private
router.put(
  '/accidentHistory',
  [
    auth,
    [
      check('natureOfAccident', 'Nature of accident is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      natureOfAccident,
      date,
      fatalities,
      injuries,
      chemicalSpills,
      natureOfAccident2,
      date2,
      fatalities2,
      injuries2,
      chemicalSpills2,
      natureOfAccident3,
      date3,
      fatalities3,
      injuries3,
      chemicalSpills3,
    } = req.body;

    const newAccidentHistory = {
      natureOfAccident,
      date,
      fatalities,
      injuries,
      chemicalSpills,
      natureOfAccident2,
      date2,
      fatalities2,
      injuries2,
      chemicalSpills2,
      natureOfAccident3,
      date3,
      fatalities3,
      injuries3,
      chemicalSpills3,
    };

    try {
      const application = await Application.findOne({ user: req.user.id });

      application.accidentHistory.unshift(newAccidentHistory);

      await application.save();

      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/application/accidentHistory/:ah_id
// @desc     Delete application previous residency
// @access   Private
router.delete('/accidentHistory/:ah_id', auth, async (req, res) => {
  try {
    const application = await Application.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = application.accidentHistory
      .map((item) => item.id)
      .indexOf(req.params.li_id);

    application.accidentHistory.splice(removeIndex, 1);

    await application.save();

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/application/trafficConvictions
// @desc     Add application resources
// @access   Private
router.put(
  '/trafficConvictions',
  [auth, [check('violation', 'Violation record required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      violation,
      dateConvicted,
      stateOfViolation,
      penality,
      violation2,
      dateConvicted2,
      stateOfViolation2,
      penality2,
      violation3,
      dateConvicted3,
      stateOfViolation3,
      penality3,
      violation4,
      dateConvicted4,
      stateOfViolation4,
      penality4,
      deniedPrivilegeToOperateMotorVehicle,
      hasDrivingPrivilegeEverBeenRevoked,
    } = req.body;

    const newTrafficConvictions = {
      violation,
      dateConvicted,
      stateOfViolation,
      penality,
      violation2,
      dateConvicted2,
      stateOfViolation2,
      penality2,
      violation3,
      dateConvicted3,
      stateOfViolation3,
      penality3,
      violation4,
      dateConvicted4,
      stateOfViolation4,
      penality4,
      deniedPrivilegeToOperateMotorVehicle,
      hasDrivingPrivilegeEverBeenRevoked,
    };

    try {
      const application = await Application.findOne({ user: req.user.id });

      application.trafficConvictions.unshift(newTrafficConvictions);

      await application.save();

      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/application/trafficConvictions/:eh_id
// @desc     Delete application previous residency
// @access   Private
router.delete('/trafficConvictions/:tc_id', auth, async (req, res) => {
  try {
    const application = await Application.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = application.trafficConvictions
      .map((item) => item.id)
      .indexOf(req.params.tc_id);

    application.trafficConvictions.splice(removeIndex, 1);

    await application.save();

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.put(
  '/employmentHistory',
  [
    auth,
    [
      check('priorEmployerName', 'Prior employer name required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      priorEmployerName,
      phoneNumber,
      address,
      nick,
      fromDate,
      toDate,
      reasonForLeaving,
      salary,
      explainGapsInEmploymentReason,
      wereYouSubjectToFederalMotorCarrierSafteyRegulations,
      longSentance,
      priorEmployerName2,
      phoneNumber2,
      address2,
      tom,
      fromDate2,
      toDate2,
      reasonForLeaving2,
      salary2,
      explainGapsInEmploymentReason2,
      wereYouSubjectToFederalMotorCarrierSafteyRegulations2,
      longSentance2,
      priorEmployerName3,
      phoneNumber3,
      address3,
      harry,
      fromDate3,
      toDate3,
      reasonForLeaving3,
      salary3,
      explainGapsInEmploymentReason3,
      wereYouSubjectToFederalMotorCarrierSafteyRegulations3,
      longSentance3,
    } = req.body;

    const newEmploymentHistory = {
      priorEmployerName,
      phoneNumber,
      address,
      nick,
      fromDate,
      toDate,
      reasonForLeaving,
      salary,
      explainGapsInEmploymentReason,
      wereYouSubjectToFederalMotorCarrierSafteyRegulations,
      longSentance,
      priorEmployerName2,
      phoneNumber2,
      address2,
      tom,
      fromDate2,
      toDate2,
      reasonForLeaving2,
      salary2,
      explainGapsInEmploymentReason2,
      wereYouSubjectToFederalMotorCarrierSafteyRegulations2,
      longSentance2,
      priorEmployerName3,
      phoneNumber3,
      address3,
      harry,
      fromDate3,
      toDate3,
      reasonForLeaving3,
      salary3,
      explainGapsInEmploymentReason3,
      wereYouSubjectToFederalMotorCarrierSafteyRegulations3,
      longSentance3,
    };

    try {
      const application = await Application.findOne({ user: req.user.id });

      application.employmentHistory.unshift(newEmploymentHistory);

      await application.save();

      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/application/employmentHistory/:eh_id
// @desc     Delete application previous residency
// @access   Private
router.delete('/employmentHistory/:eh_id', auth, async (req, res) => {
  try {
    const application = await Application.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = application.employmentHistory
      .map((item) => item.eh)
      .indexOf(req.params.eh_id);

    application.employmentHistory.splice(removeIndex, 1);

    await application.save();

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/application/educationHistory
// @desc     Add application resources
// @access   Private
router.put(
  '/educationHistory',
  [
    auth,
    [check('highSchool', 'High school records are required').not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      highSchool,
      schoolLocation,
      courseOfStudy,
      yearsCompleted,
      graduate,
      details,
      college,
      schoolLocation2,
      courseOfStudy2,
      yearsCompleted2,
      graduate2,
      details2,
      other,
      schoolLocation3,
      courseOfStudy3,
      yearsCompleted3,
      graduate3,
      details3,
    } = req.body;

    const newEducationHistory = {
      highSchool,
      schoolLocation,
      courseOfStudy,
      yearsCompleted,
      graduate,
      details,
      college,
      schoolLocation2,
      courseOfStudy2,
      yearsCompleted2,
      graduate2,
      details2,
      other,
      schoolLocation3,
      courseOfStudy3,
      yearsCompleted3,
      graduate3,
      details3,
    };

    try {
      const application = await Application.findOne({ user: req.user.id });

      application.educationHistory.unshift(newEducationHistory);

      await application.save();

      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/application/educationHistory/:eduh_id
// @desc     Delete Education history
// @access   Private
router.delete('/educationHistory/:eduh_id', auth, async (req, res) => {
  try {
    const application = await Application.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = application.educationHistory
      .map((item) => item.id)
      .indexOf(req.params.eduh_id);

    application.educationHistory.splice(removeIndex, 1);

    await application.save();

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/application/signature
// @desc     Add application resources
// @access   Private
router.put(
  '/signature',
  [auth, [check('applicantSignature', 'Signature required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { applicantSignature, printedName, date } = req.body;

    const newSignature = {
      applicantSignature,
      printedName,
      date,
    };

    try {
      const application = await Application.findOne({ user: req.user.id });

      application.signature.unshift(newSignature);

      await application.save();

      res.json(application);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/application/signature/:sn_id
// @desc     Delete application previous residency
// @access   Private
router.delete('/signature/:sn_id', auth, async (req, res) => {
  try {
    const application = await Application.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = application.signature
      .map((item) => item.id)
      .indexOf(req.params.sn_id);

    application.signature.splice(removeIndex, 1);

    await application.save();

    res.json(application);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
