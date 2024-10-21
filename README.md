**\[UDD\] Desarrollo Web Fullstack C13**

# Proyecto 07: Aplicación Fullstack de Comercio Electrónico

## Introducción
El objetivo de este proyecto es desarrollar una aplicación Fullstack de comercio electrónico que incluya todos los elementos esenciales para gestionar un negocio en línea.

## Desarrollo

El proyecto consiste en una página e-commerce donde se venden 4 categorías de productos:

1. Notebook
2. Smartphone
3. Tablet
4. Smartwatch

### Frontend
Se encarga de la selección de productos, cantidad a pagar y login de usuario.

Consiste en un conjunto de componentes, páginas, contextos:

**Componentes**

- `Breadcrums.jsx`:
- `CartItems.jsx`:
- `Hero.jsx`:
- `Item.jsx`:
- `Navbar.jsx`:
- `ProductDisplay`:

**Context**

- `ShopContext.jsx`:

**Pages**

- `Cart.jsx`
- `LoginSignup.jsx`
- `Product.jsx`
- `Shop.jsx`
- `ShopCategory`

### Backend

- POST: `/upload`
- POST: `/addproduct`
- POST: `/removeproduct`
- GET: `/allproducts`
- POST: `/signup`
- POST: `/login`


**Product Schema**

```jsx
const Product = mongoose.model("Product",{
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})
```

**Users Schema**

```jsx
const Users = mongoose.model('Users',{
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
    },
    cartData:{
        type: Object,
    },
    date:{
        type: Date,
        default: Date.now,
    }
})
```

## Referencias

- UDD BootCamp Web FullStack, Clases 25 a 28, Profesor [Matías Molina Aguilar](https://cl.linkedin.com/in/matiasmolinaaguilar)
