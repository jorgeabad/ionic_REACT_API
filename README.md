# ionic_REACT_API

### Aplicación hecha con ionic y REACT para consumir un API REST JSON

Consume la API de mi blog: https://jorge-abad.es/publicaciones

![studio](https://raw.githubusercontent.com/jorgeabad/ionic_REACT_API/master/img/app.jpg)

#### Generar un proyecto Nativo

```
ionic build
```
Agregar Capacitor a y generar los activos necesarios para construir la aplicación nativa

```
ionic capacitor add android
```
o mediante:
```
npx cap add android
```
Este comando instalará las dependencias requeridas para la plataforma Android. También generará los archivos necesarios para un proyecto nativo de Android y copiará los activos que se crearon al ejecutar `ionic build`.

Suponiendo instalado Android Studio, se puede abrir el proyecto en Android Studio ejecutando:

```
npx cap open android
```
o mediante:

```
ionic capacitor open android
```
Construir el proyecto a través de Android Studio

![studio](https://raw.githubusercontent.com/jorgeabad/ionic_REACT_API/master/img/studio.png)
