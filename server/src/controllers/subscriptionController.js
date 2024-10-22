const Subscription = require('../models/Subscription');
const User = require('../models/User');

exports.createSubscription = async (req, res) => {
  try {
    const subscription = new Subscription({
      ...req.body,
      user: req.user._id
    });
    await subscription.save();

    // Update user's subscription type
    await User.findByIdAndUpdate(req.user._id, { subscriptionType: req.body.type });

    res.status(201).send(subscription);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({ user: req.user._id, active: true });
    if (!subscription) {
      return res.status(404).send();
    }
    res.send(subscription);
  } catch (error) {
    res.status(500).send();
  }
};

exports.updateSubscription = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['type', 'endDate', 'active'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const subscription = await Subscription.findOne({ user: req.user._id, active: true });

    if (!subscription) {
      return res.status(404).send();
    }

    updates.forEach(update => subscription[update] = req.body[update]);
    await subscription.save();

    // Update user's subscription type if it has changed
    if (req.body.type) {
      await User.findByIdAndUpdate(req.user._id, { subscriptionType: req.body.type });
    }

    res.send(subscription);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.cancelSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({ user: req.user._id, active: true });

    if (!subscription) {
      return res.status(404).send();
    }

    subscription.active = false;
    subscription.endDate = new Date();
    await subscription.save();

    // Update user's subscription type to free
    await User.findByIdAndUpdate(req.user._id, { subscriptionType: 'free' });

    res.send(subscription);
  } catch (error) {
    res.status(500).send();
  }
};