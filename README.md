# Citricco Store



## Components

## Layout
1. Navbar (Logo a "/", Pendientes, contacto, profile, card)
2.Footer


## Pages
1.Home
2. Listado de productos
3. Card product
4. Profile
5. login/logout/signup forms
6. create/edit/delete forms (admin)
7.card



## Shared







# Endpoints table

| Id        | Method        | Path                               | Description                |
| :---      |     :---      |    :---                            |  :---                      |
| 1         |   Get       |      /            |Home                      
| 2         |   Get      |       /products/all   | Listado de productos
|3          |     Get / post  |  /products/details/:id      | Detalles de cada producto
|4|Get / Post| /products/newProduct| Crear producto
|5| Get / post | /collections/price=&color=	| Filtrado para  búsqueda (hay que ver qué filtros poner)
| 6        | Get       |  /pages/about       |  Sobre la tienda, productos y  sus creadoras |
| 7         |  Get     |    /pages/contact   | Contacto
| 8         |  Get / post |   /account/login ? | Cuenta de usuario y comprobación de login
|9 | Get/post | /account/register | Signup
|10| Post | /account/logout | Logout
| 11        |     no lo sé   |       /cart   |  Carrito de compra             |

(podríamos añadir en alguna vista una barra simple de búsqueda con ajax)

# Models

## Earring

    const ProductSchema = ... ({
    		name: {
    			type: String, 
    			required: true,
    			default: 'unknown'
    			},
    		price: {
    			type: Number,
    			required: true
    		},
    		quantity: {
	    		type: Number,
	    		default: 0 
	    	},
    		image: {
    			type: String,
    			default: 'algunaFotoRandom'
    		},
    		category: {
    			type: [String],
    			enum: ['no', 'se', 'bla', 'bla']
    		},
    		createdAt: {
	    		type: Date, 
	    		default: Date.now
    		}
    			

## User

    const userSchema = new Schema({
    	username: {
    		type: String
    	},
    	password: {
    		type: String
    	},
    	role: {
    		type: String,
    		enum: ['Customer', 'Admin'],
	    }
    },{
	    timestamps: true
    })


## Cart

    const CartSchema = new Schema({
    	owner: {
    		type: Schema.Types.ObjectId,
    		ref: 'User'
    	},
    	total: {
    		type: Number,
    		default: 0
    	},
    	items: [{
		    item: {
			    type: Schema.Types.ObjectId,
			    ref: 'Product'
		    },
		 
		    quantity: {
			    type: Number,
			    default: 0
		    },
		    
		    price: {
			type: Number,
		    default: 0
	    }
	    }]
    },{
	    timestamps: true
    })
    
