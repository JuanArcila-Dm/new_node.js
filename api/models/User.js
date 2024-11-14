import { json } from 'express';
import { connection } from '../config/db.js';

const UserModel = {
  // Método para obtener todos los usuarios
  getAllUsers: () => {
    const query = 'SELECT * FROM usuarios'; // Consulta SQL para obtener todos los usuarios
    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
}

 const getUserForId = (id) => {
    const query = `SELECT * FROM usuarios WHERE id_usuarios = ${id}`;
    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          return reject(err); 
        }
        resolve(results);
      });
    });
  }


  const createUser = async (nombre, correo, contraseña, rol) => {
    const query = `INSERT INTO usuarios (id_usuarios, nombre, correo, contraseña, rol) VALUES (NULL, ?, ?, ?, ?)`;
    
    return new Promise((resolve, reject) => {
      connection.query(query, [nombre, correo, contraseña, rol], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
  

 

export { UserModel,getUserForId,createUser }
