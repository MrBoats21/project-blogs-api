const { 
  serviceCreateUser, 
  serviceGetUsers, 
  serviceGetUserById, 
} = require('../service/user.service');

const controllerCreateUser = async (req, res) => {
  const data = req.body;

  const { type, message } = await serviceCreateUser(data);

  if (type) {
    return res.status(409).json({ message });
  }

  return res.status(201).json({ token: message });
};

const controllerGetUsers = async (_req, res) => {
  const result = await serviceGetUsers();

  return res.status(200).json(result);
};
  
const controllerGetUserById = async (req, res) => {
  const { id } = req.params;
  
  const user = await serviceGetUserById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
};
  
module.exports = { 
  controllerCreateUser, 
  controllerGetUsers, 
  controllerGetUserById, 
};