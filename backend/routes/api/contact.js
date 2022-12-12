const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Contact = require('../../models/Contact');
const User = require('../../models/User');

// @route  GET api/contact/me
// @desc  Test route
//@access  Private
router.get('/me', auth, async (req, res) => {
  res.cookie('sky', 'blue', { httpOnly: true, maxAge: 1200 });
  try {
    const contact = await Contact.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!contact) {
      return res
        .status(400)
        .json({ msg: 'There is no Contact info for this user' });
    }

    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/profile
// @desc   Create or update user profile
//@access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Email is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, description } = req.body;

    // Build profile object
    const contactFields = {};
    contactFields.user = req.user.id;
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (description) contactFields.description = description;

    try {
      let contact = await Contact.findOne({ user: req.user.id });

      if (contact) {
        //Update
        contact = await Contact.findOneAndUpdate(
          { user: req.user.id },
          { $set: contactFields },
          { new: true }
        );

        return res.json(contact);
      }

      // Create
      contact = new Contact(contactFields);

      await contact.save();
      res.json(contact);
    } catch (error) {
      console.error(errorMessage);
      res.status(500).send('Server Error');
    }
  }
);

// @route  GET api/contact
// @desc   Get all contacts
//@access  public
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().populate('user', ['name', 'avatar']);

    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/contact/user/:user_id
// @desc   Get contact by user id
//@access  public
router.get('/user/:user_id', async (req, res) => {
  try {
    const contacts = await Contact.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);
    if (!contacts) return res.status(400).json({ msg: 'Contact not found' });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Contact not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @ desc   Delete contact by id
// @ route  DELETE /api/contact/:contact_id
// @ access   Private/Admin
router.delete('/:contact_id', auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contact_id);

    if (contact) {
      await contact.remove();
    }

    res.json({ success: true, msg: 'Contact details removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.status(200);
});

module.exports = router;
