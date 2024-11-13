// Importa la conexión a la base de datos desde db.js
import  {connectionDB, connection}  from '../config/db.js'; // Usa la ruta correcta a tu archivo de conexión

export const getAllUsers = (callback) => {
  const query = 'SELECT * FROM usuarios';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error en la consulta:', error);
      callback(error, null); // Llama al callback con el error
      return;
    }
    console.log('Resultados:', results);
    callback(null, results); // Llama al callback con los resultados
  });
};

