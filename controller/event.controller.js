const Event = require("./../model/event.model.js");

exports.create = async (req, res, next) => {
  let Event = await Event.create(req.body.Event);
  res.status(201).json(Event);
};

exports.getById = async (req, res, next) => {
  let id = req.params.id;
  let Event = await Event.findByPk(id);
  res.status(201).json(Event);
};
