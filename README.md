# Primera parte

- Maquetar un formulario lo más idéntico posible al que se adjunta en este correo teniendo en
cuenta los detalles del mismo.
# Segunda parte

- Realizar un pequeño proyecto en Angular / React que contenga el formulario de la primera parte y
lleve a cabo las siguientes acciones :


**Crear usuario** : En un caso de que el formulario no contenga datos, al hacer click en "Modificar tus
datos" realizar una petición POST al servidor donde la respuesta sea una respuesta correcta con
los datos que se han introducido en el formulario.

**Obtener usuario** : Realizar una petición GET al servidor pasando un id (Por ahora solo existe el id
1) y mostrar los datos en el formulario como corresponden.

**Editar usuario** : Modificar los datos que se obtienen del servidor y al hacer click en "Modificar tus
datos", realizar una petición PUT con los datos y el servidor devuelva una respuesta correcta con
los datos modificados.

**Servidor** : https://my-json-server.typicode.com/volkz/technical-form/users

**Endpoints** :
- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id

# Iniciar Proyecto

- Instalar dependencias

```
npm install

```

- Compilar app
```
ng serve
```

- Abrir el navegador
```
http://localhost:4200/
```


[APP en vivo](https://share.getcloudapp.com/7Kuy4AXn)