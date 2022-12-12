const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Company = require('../../models/Company');
const User = require('../../models/User');
const LoadBoard = require('../../models/LoadBoard');

// @route  GET api/loadboard/me
// @desc  Test route
//@access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const loadBoard = await LoadBoard.findOne({
      user: req.user.id,
    }).populate({
      path: 'user',
      select: ['name', 'avatar'],
    });

    if (!loadBoard) {
      return res
        .status(400)
        .json({ msg: 'There is no Load info for this user' });
    }

    res.json(loadBoard);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/loadboard
// @desc   Create and update a load
//@access  Private
router.post(
  '/',
  [
    auth,
    [
      check('originAddress', 'Origin address is required').not().isEmpty(),
      check('destinationAddress', 'destinationAddress is required')
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
      nameOfPay,
      tripMiles,
      originAddress,
      destinationAddress,
      status,
      trailerType,
      loadSize,
      loadLength,
      weight,
      payRate,
      shipDate,
      shipmentContents,
      description,
    } = req.body;

    // Build profile object
    const loadBoardFields = {};
    loadBoardFields.user = req.user.id;
    if (tripMiles) loadBoardFields.tripMiles = tripMiles;
    if (nameOfPay) loadBoardFields.nameOfPay = nameOfPay;
    if (originAddress) loadBoardFields.originAddress = originAddress;
    if (destinationAddress)
      loadBoardFields.destinationAddress = destinationAddress;
    if (status) loadBoardFields.status = status;
    if (trailerType) loadBoardFields.trailerType = trailerType;
    if (loadSize) loadBoardFields.loadSize = loadSize;
    if (loadLength) loadBoardFields.loadLength = loadLength;
    if (weight) loadBoardFields.weight = weight;
    if (payRate) loadBoardFields.payRate = payRate;
    if (shipDate) loadBoardFields.shipDate = shipDate;
    if (shipmentContents) loadBoardFields.shipmentContents = shipmentContents;
    if (description) loadBoardFields.description = description;

    try {
      let loadBoard = await LoadBoard.findOne({ user: req.user.id });

      if (loadBoard) {
        //Update
        loadBoard = await LoadBoard.findOneAndUpdate(
          { user: req.user.id },
          { $set: loadBoardFields },
          { new: true }
        );

        return res.json(loadBoard);
      }

      // Create
      loadBoard = new LoadBoard(loadBoardFields);

      await loadBoard.save();
      res.json(loadBoard);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

//@description   Create New load
//@route         Post /api/loadboard/newload
//@access        Private

router.post(
  '/newload',
  [
    auth,
    [
      check('originAddress', 'Origin address is required').not().isEmpty(),
      check('destinationAddress', 'destinationAddress is required')
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
      nameOfPay,
      tripMiles,
      originAddress,
      destinationAddress,
      status,
      trailerType,
      loadSize,
      loadLength,
      weight,
      payRate,
      shipDate,
      shipmentContents,
      description,
    } = req.body;

    // Build profile object
    const loadBoardFields = {};
    loadBoardFields.user = req.user.id;
    if (tripMiles) loadBoardFields.tripMiles = tripMiles;
    if (nameOfPay) loadBoardFields.nameOfPay = nameOfPay;
    if (originAddress) loadBoardFields.originAddress = originAddress;
    if (destinationAddress)
      loadBoardFields.destinationAddress = destinationAddress;
    if (status) loadBoardFields.status = status;
    if (trailerType) loadBoardFields.trailerType = trailerType;
    if (loadSize) loadBoardFields.loadSize = loadSize;
    if (loadLength) loadBoardFields.loadLength = loadLength;
    if (weight) loadBoardFields.weight = weight;
    if (payRate) loadBoardFields.payRate = payRate;
    if (shipDate) loadBoardFields.shipDate = shipDate;
    if (shipmentContents) loadBoardFields.shipmentContents = shipmentContents;
    if (description) loadBoardFields.description = description;

    try {
      let loadBoard = await LoadBoard.find({ user: req.user.id });

      //if (loadBoard) {
      //  //Update
      //  loadBoard = await LoadBoard.findOneAndUpdate(
      //    { user: req.user.id },
      //    { $set: loadBoardFields },
      //    { new: true }
      //  );

      //  return res.json(loadBoard);
      //}

      // Create
      loadBoard = new LoadBoard(loadBoardFields);

      await loadBoard.save();
      res.json(loadBoard);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  GET api/loadboard
// @desc   Get all loads
//@access  public
router.get('/', async (req, res) => {
  try {
    const loadBoard = await LoadBoard.find().populate('user', [
      'name',
      'avatar',
    ]);
    res.json(loadBoard);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/loadboard/userloads/:user_id
// @desc   Get loads by user id
//@access  public
router.get('/userloads/:user_id', async (req, res) => {
  try {
    const loadBoard = await LoadBoard.find({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!loadBoard)
      return res.status(400).json({ msg: 'Load information not found' });
    res.json(loadBoard);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Load information not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route  GET api/loadboard/load/:load_id
// @desc   Get published load by load_id
//@access  Private
router.get('/load/:id', auth, async (req, res) => {
  try {
    const loadBoard = await LoadBoard.findById(req.params.id).populate('user', [
      'name',
      'avatar',
    ]);

    if (!loadBoard)
      return res.status(400).json({ msg: 'Load information not found' });
    res.json(loadBoard);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Load information not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @ desc   Update a load
// @ route  PUT /api/loadboard/load/:_id
// @ access Private/Admin
router.put(
  '/load/:load_id',
  [
    auth,
    [
      check('originAddress', 'Origin address is required').not().isEmpty(),
      check('destinationAddress', 'destinationAddress is required')
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
      nameOfPay,
      tripMiles,
      originAddress,
      destinationAddress,
      status,
      trailerType,
      loadSize,
      loadLength,
      weight,
      payRate,
      shipDate,
      shipmentContents,
      description,
    } = req.body;

    // Build profile object
    const loadBoardFields = {};
    loadBoardFields.user = req.user.id;
    if (tripMiles) loadBoardFields.tripMiles = tripMiles;
    if (nameOfPay) loadBoardFields.nameOfPay = nameOfPay;
    if (originAddress) loadBoardFields.originAddress = originAddress;
    if (destinationAddress)
      loadBoardFields.destinationAddress = destinationAddress;
    if (status) loadBoardFields.status = status;
    if (trailerType) loadBoardFields.trailerType = trailerType;
    if (loadSize) loadBoardFields.loadSize = loadSize;
    if (loadLength) loadBoardFields.loadLength = loadLength;
    if (weight) loadBoardFields.weight = weight;
    if (payRate) loadBoardFields.payRate = payRate;
    if (shipDate) loadBoardFields.shipDate = shipDate;
    if (shipmentContents) loadBoardFields.shipmentContents = shipmentContents;
    if (description) loadBoardFields.description = description;

    try {
      let loadBoard = await LoadBoard.findById(req.params.load_id);

      // Create
      loadBoard = new LoadBoard(loadBoardFields);

      await loadBoard.save();
      res.json(loadBoard);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/loadboard
// @desc     Delete load,
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove profile
    // Remove user
    await Promise.all([
      LoadBoard.findOneAndRemove({ user: req.user.id }),
      User.findOneAndRemove({ _id: req.user.id }),
    ]);

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ desc   Delete load by id
// @ route  DELETE /api/loadboard/load/:id
// @ access   Private/Admin
router.delete('/load/:load_id', auth, async (req, res) => {
  try {
    const load = await LoadBoard.findById(req.params.load_id);

    if (load) {
      await load.remove();
    }

    res.json({ success: true, msg: 'Load details removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.status(200);
});

module.exports = router;
