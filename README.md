# Angular Intermedio - Servicios y Pipes

## Descripción del proyecto

Este proyecto corresponde a la actividad **Angular Intermedio: Servicios**, Módulo 1 - Unidad 3.

Se desarrolló una aplicación para gestionar una lista de productos utilizando un servicio de Angular. La aplicación permite visualizar productos, agregar nuevos productos simulados y eliminarlos dinámicamente.

Además, se implementaron pipes estándar y un pipe personalizado para transformar la información antes de mostrarla en pantalla.

## Funcionalidades implementadas

### Servicio productos

El servicio contiene los siguientes métodos:

* `getProductos()`: obtiene la lista de productos.
* `addProducto()`: agrega un producto a la lista.
* `deleteProducto()`: elimina un producto de la lista.

### Componente lista-productos

* Inyección del servicio mediante Dependency Injection.
* Uso del ciclo de vida `ngOnInit()`.
* Carga inicial de productos desde el servicio.

### Pipes utilizados

#### Pipes estándar

* `currency`: para mostrar los precios en formato monetario.
* `date`: para mostrar la fecha de alta de cada producto.

#### Pipe personalizado

* `descuento`: calcula el precio final de un producto aplicando un porcentaje de descuento.

## Interacción de la aplicación

La aplicación permite:

* Visualizar la lista de productos.
* Agregar productos simulados.
* Eliminar productos.
* Mostrar un mensaje cuando la lista queda vacía mediante `*ngIf`.

## Instalación y ejecución

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd CLASE3
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
ng serve
```

Abrir en el navegador:

```text
http://localhost:4200
```

## Capturas de pantalla

### Lista de productos cargada

![Lista de productos](src/assets/img/lista-productos.png)

### Agregar producto

![Agregar producto](src/assets/img/agregar-producto.png)

### Eliminar producto

![Eliminar producto](src/assets/img/eliminar-producto.png)

### Lista vacía usando ngIf

![Lista vacía](src/assets/img/lista-vacia.png)

## Bibliografía

* Angular Documentation. https://angular.dev
* Angular Dependency Injection. https://angular.dev/guide/di/dependency-injection
* Freeman, A. (2020). *Pro Angular 9*. Apress.


## Autor

María Cecilia Pezzini

Curso: Angular Intermedio

Módulo 1 - Unidad 3 - Servicios
