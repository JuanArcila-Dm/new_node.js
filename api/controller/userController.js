import { UserModel, getUserForId,createUser } from '../models/User.js';

// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => {
  UserModel.getAllUsers() // Asumiendo que getAllUsers está definido en UserModel.js
    .then((results) => {
      res.status(200).json(results); // Enviar los resultados como respuesta JSON
    })
    .catch((error) => {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ message: 'Error al obtener los usuarios', error: error });
    });
};

const getUserId = async (req,res) =>{
  try {
    const result = await getUserForId(req.params.id);
    return res.json(result); // Enviar la respuesta y asegurar el retorno
  } catch (error) {
    return res.status(500).json({ error: error.message }); // Asegura que solo envíe respuesta una vez
  }
};

const newUser = async (req,res) =>{
  try {
    const { nombre, correo, contraseña, rol } = req.body;
    const newUserId = await createUser(nombre, correo, contraseña, rol);
    return res.status(201).json({ message: "Usuario creado exitosamente", newUserId });
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllUsers,
  getUserId,
  newUser,
};
