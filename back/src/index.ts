import server from './server'
import {PORT} from './config/envs';
import {AppDataSource} from './config/AppDataSource'
import "reflect-metadata"

AppDataSource.initialize()
  .then(res => {
    console.log("Conexión a la base de datos exitosa");
    server.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error al inicializar la base de datos:", err);
  });