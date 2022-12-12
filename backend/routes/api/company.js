const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Profiles = require('../../models/Profiles');
const Posts = require('../../models/Posts');
const Company = require('../../models/Company');

//router.get('/', (req, res) => res.send('hello'));

// @route  GET api/company/me
// @desc  Test route
//@access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const company = await Company.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!company) {
      return res
        .status(400)
        .json({ msg: 'There is no company created for this user' });
    }

    res.json(company);
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
      check('companyName', 'Company name is required').not().isEmpty(),
      check('companyServices', 'Company services are required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      companyName,
      dispatchPhoneNumber,
      companyContact,
      companyServices,
      status,
      email,
      address,
      city,
      stateProv,
      postalCode,
      phoneNumber1,
      ext,
      cellular,
      faxNumber,
      website,
      mcNumber,
      dotNumber,
      howDidYouHearAboutUs,
      wouldYouLikeContacted,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram,
    } = req.body;

    // Build application object
    const companyFields = {};
    companyFields.user = req.user.id;
    if (companyName) companyFields.companyName = companyName;
    if (dispatchPhoneNumber)
      companyFields.dispatchPhoneNumber = dispatchPhoneNumber;
    if (companyContact) companyFields.companyContact = companyContact;
    if (status) companyFields.status = status;
    if (email) companyFields.email = email;
    if (companyServices) {
      companyFields.companyServices = companyServices
        .split(',')
        .map((companyServices) => companyServices.trim());
    }
    if (address) companyFields.address = address;
    if (city) companyFields.city = city;
    if (stateProv) companyFields.stateProv = stateProv;
    if (postalCode) companyFields.postalCode = postalCode;
    if (phoneNumber1) companyFields.phoneNumber1 = phoneNumber1;
    if (ext) companyFields.ext = ext;
    if (cellular) companyFields.cellular = cellular;
    if (faxNumber) companyFields.faxNumber = faxNumber;
    if (website) companyFields.website = website;
    if (mcNumber) companyFields.mcNumber = mcNumber;
    if (dotNumber) companyFields.dotNumber = dotNumber;
    if (howDidYouHearAboutUs)
      companyFields.howDidYouHearAboutUs = howDidYouHearAboutUs;
    if (wouldYouLikeContacted)
      companyFields.wouldYouLikeContacted = wouldYouLikeContacted;

    // Build social object
    companyFields.social = {};
    if (youtube) companyFields.social.youtube = youtube;
    if (twitter) companyFields.social.twitter = twitter;
    if (facebook) companyFields.social.facebook = facebook;
    if (instagram) companyFields.social.instagram = instagram;
    if (linkedin) companyFields.social.linkedin = linkedin;

    try {
      let company = await Company.findOne({ user: req.user.id });

      if (company) {
        // update test
        company = await Company.findOneAndUpdate(
          { user: req.user.id },
          { $set: companyFields },
          { new: true }
        );
        return res.json(company);
      }

      // Create
      company = new Company(companyFields);

      await company.save();
      res.json(company);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  GET api/company
// @desc   Get all companies
//@access  public
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find().populate('user', ['name', 'avatar']);
    res.json(companies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/company/user/:user_id
// @desc   Get company by user id
//@access  public
router.get('/user/:user_id', async (req, res) => {
  try {
    const company = await Company.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);
    if (!company) return res.status(400).json({ msg: 'Company not found' });
    res.json(company);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Company not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route  GET api/company/:company_id
// @desc   Get company by company id
//@access  public
router.get('/:company_id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.company_id).populate(
      'user',
      'name'
    );
    if (!company) return res.status(400).json({ msg: 'Company not found' });
    res.json(company);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Company not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/company
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    //await Posts.deleteMany({ user: req.user });
    // Remove profile
    // Remove user
    await Promise.all([
      Posts.deleteMany({ user: req.user.id }),
      Profiles.deleteMany({ user: req.user.id }),
      User.findOneAndRemove({ _id: req.user.id }),
      //Company.deleteMany({ _id: req.user.id }),
    ]);

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ desc   Delete company by id
// @ route  DELETE /api/company/:company_id
// @ access   Private/Admin
router.delete('/:company_id', auth, async (req, res) => {
  try {
    const company = await Company.findById(req.params.company_id);

    if (company) {
      await company.remove();
    }

    res.json({ success: true, msg: 'Company details removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.status(200);
});

// @route    PUT api/company/aboutthecompany
// @desc     Add company aboutTheCompany
// @access   Private
router.put(
  '/aboutthecompany',
  auth,
  check('whatWeDo', 'What the company does is required').notEmpty(),
  check('companyAchievements', 'Company achievements is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const company = await Company.findOne({ user: req.user.id });

      company.aboutTheCompany.unshift(req.body);

      await company.save();

      res.json(company);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/company/aboutthecompany/:atc_id
// @desc     Delete profile experience
// @access   Private
router.delete('/aboutthecompany/:atc_id', auth, async (req, res) => {
  try {
    const company = await Company.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = company.aboutTheCompany
      .map((item) => item.id)
      .indexOf(req.params.exp_id);

    company.aboutTheCompany.splice(removeIndex, 1);

    await company.save();

    res.json(company);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/company/aboutourservices
// @desc     Add company aboutOurServices
// @access   Private
router.put(
  '/aboutourservices',
  auth,
  check('service1', 'Main service is required').notEmpty(),
  check('description', 'Service description is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const company = await Company.findOne({ user: req.user.id });

      company.aboutOurServices.unshift(req.body);

      await company.save();

      res.json(company);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/company/aboutourservices/:atc_id
// @desc     Delete aboutOurServices
// @access   Private
router.delete('/aboutourservices/:aos_id', auth, async (req, res) => {
  try {
    const company = await Company.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = company.aboutOurServices
      .map((item) => item.id)
      .indexOf(req.params.exp_id);

    company.aboutOurServices.splice(removeIndex, 1);

    await company.save();

    res.json(company);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
