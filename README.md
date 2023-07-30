# Sneakers-store-api
La Sneakers Store API es una API desarrollada con Node.js y Express que proporciona endpoints para gestionar una tienda de zapatillas. 
Permite obtener información sobre los productos disponibles en stock y consultar el precio especial para un cliente y una marca específica.

## Arquitectura

La API ha sido diseñada siguiendo el patrón de arquitectura Clean Architecture, 
que busca separar claramente las distintas capas de la aplicación para lograr un código más organizado, mantenible y escalable.


- **controllers**: Contiene los controladores de la API, que son responsables de manejar las peticiones HTTP y enviar las respuestas adecuadas.
- **models**: Aquí se encuentran los modelos de datos de la aplicación, definidos mediante Mongoose para interactuar con la base de datos MongoDB.
- **services**: Contiene los servicios de negocio de la aplicación, que encapsulan la lógica y operaciones relacionadas con los datos.
- **app.js**: Es el archivo principal de la aplicación, donde se configura Express y se definen las rutas de la API.
- **server.js**: Inicia el servidor Express y lo pone a la escucha en el puerto especificado.

## Instalación

1. Clona el repositorio: `git clone <URL_del_repositorio>`
2. Instala las dependencias: `npm install`

## Configuración

Antes de ejecutar la API, asegúrate de crear un archivo `.env` en la raíz del proyecto y configurar las siguientes variables de entorno:
- **MONGODB_URI=**`<URL_de_conexión_a_MongoDB>`
- **PORT**`=<puerto_de_la_API>`

## Ejecución

Una vez configurado el archivo `.env`, puedes iniciar la API ejecutando el siguiente comando en la raiz del proyecto: `node server.js`
