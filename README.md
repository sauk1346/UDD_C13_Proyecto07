# [UDD] Desarrollo Web Fullstack C13

# Proyecto 07: Aplicación Fullstack de Comercio Electrónico

## Índice
1. [Introducción](#introducción)
2. [Descripción del Proyecto](#descripción-del-proyecto)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Frontend](#frontend)
   - [Componentes](#componentes)
   - [Context](#context)
   - [Páginas](#páginas)
5. [Backend](#backend)
   - [Endpoints](#endpoints)
   - [Esquemas de Base de Datos](#esquemas-de-base-de-datos)
6. [Despliegue](#despliegue)
7. [Referencias](#referencias)

## Introducción
Este proyecto forma parte del curso **Desarrollo Web Fullstack C13** del programa de la UDD. El objetivo es desarrollar una aplicación de comercio electrónico Fullstack, abarcando tanto el frontend como el backend, permitiendo la gestión completa de productos y usuarios.

## Descripción del Proyecto
La aplicación e-commerce permite a los usuarios navegar, seleccionar y comprar productos en cuatro categorías principales:
- Notebooks
- Smartphones
- Tablets
- Smartwatches

El sistema incluye autenticación de usuarios, un carrito de compras y la posibilidad de gestionar productos desde el backend.

## Tecnologías Utilizadas
- **Frontend**: React, Vite
- **Backend**: Node.js, Express, MongoDB
- **Autenticación**: JWT (JSON Web Token)
- **Despliegue**: Render.com

## Frontend
El frontend permite la navegación de productos, autenticación de usuarios y gestión del carrito de compras. Está construido utilizando componentes de React y organizado en páginas y contextos.

### Componentes
- **Breadcrums.jsx**: Indicador de ruta de navegación.
- **CartItems.jsx**: Muestra los productos agregados al carrito.
- **Hero.jsx**: Componente visual principal de la página.
- **Item.jsx**: Renderiza un producto individual.
- **Navbar.jsx**: Barra de navegación principal.
- **ProductDisplay.jsx**: Componente encargado de mostrar los detalles del producto seleccionado.

### Context
- **ShopContext.jsx**: Maneja el estado global del carrito y productos seleccionados.

### Páginas
- **Cart.jsx**: Muestra el contenido del carrito y permite proceder con el pago.
- **LoginSignup.jsx**: Página de registro y login de usuarios.
- **Product.jsx**: Página individual de detalles de productos.
- **Shop.jsx**: Página principal que muestra todas las categorías de productos.
- **ShopCategory.jsx**: Muestra productos filtrados por categoría.

## Backend
El backend está desarrollado con Node.js y Express, con MongoDB para la base de datos. Maneja la autenticación de usuarios, la gestión de productos y las operaciones relacionadas con el carrito de compras.

### Endpoints
- **POST** `/upload`: Sube un archivo.
- **POST** `/addproduct`: Añade un nuevo producto.
- **POST** `/removeproduct`: Elimina un producto.
- **GET** `/allproducts`: Obtiene todos los productos.
- **POST** `/signup`: Registra un nuevo usuario.
- **POST** `/login`: Autentica un usuario existente.

### Esquemas de Base de Datos
#### Product Schema
```javascript
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});
```

#### Users Schema
```javascript
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});
```

## Despliegue
El proyecto está desplegado en Render:

- **Frontend:** <https://udd-c13-proyecto07-1-frontend.onrender.com/>
- **Backend:** <https://udd-c13-proyecto07.onrender.com/>

## Referencias

UDD Bootcamp Web Fullstack, Clases 25 a 28, Profesor [Matías Molina Aguilar](https://www.linkedin.com/in/matiasmolinaaguilar/?originalSubdomain=cl)