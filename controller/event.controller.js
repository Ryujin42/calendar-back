const Event = require("./../model/event.model.js");

exports.create = async (req, res, next) => {
  let event = await Event.create(req.body.Event);
  res.status(201).json(event);
};

exports.getById = async (req, res, next) => {
  let id = req.params.id;
  let event = await Event.findByPk(id);
  res.status(201).json(event);
};
