import  connectionDB  from './config/db.js'; // Importa la función para conectar a la base de datos
import { getAllUsers } from './controller/userController.js'; // Importa la función desde el controlador

// Conectar a la base de datos
connectionDB();

// Realizar la consulta usando el controlador
getAllUsers((error, results) => {
  if (error) {
    console.error('Error al obtener usuarios:', error);
    return;
  }
  
  // Mostrar los resultados de la consulta
  console.log('Usuarios obtenidos:', results);
});
