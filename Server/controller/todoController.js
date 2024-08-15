const db = require("../db/db");

module.exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await db.todo.create({
    data: {
      title,
      description,
      user: {
        connect: {
          id: req.user.id,
        },
      },
    },
  });

  res.status(201).json({ task: task });
};

module.exports.getAllTask = async (req, res) => {
  const task = await db.todo.findMany({
    where: {
      userId: req.user.id,
    },
  });
  res.status(200).json({ task: task });
};

module.exports.getTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await db.todo.findFirst({
    where: {
      AND: [{ id: +taskId , userId: req.user.id }],
    },
  });
  res.status(200).json({ task: task });
};

module.exports.getUpdate = async (req, res) => {
  const {  taskId } = req.params;
  const task = await db.todo.updateMany({
    where: { AND: [{ id: + taskId , userId: req.user.id }] },
    data: {
      ...req.body,
      isComplete: true,
    },
  });
  res.status(200).json({ task: task });
};

module.exports.getDelete = async (req, res) => {
  const {  taskId  } = req.params;
  const task = await db.todo.deleteMany({
    where: {
      AND: [
        {
          id: + taskId ,
          userId: req.user.id,
        },
      ],
    },
  });
  res.status(200).json("task has been deleted successfully");
};
