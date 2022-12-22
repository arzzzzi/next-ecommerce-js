import bcrypt from 'bcryptjs'

export const data = {
    users: [{
            name: 'Maga',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'Vasya',
            email: 'vasya@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }
    ],
    products: [{
            name: 'Free shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Fit shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 3.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Slim shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 90,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 3,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Sweatpants',
            slug: 'sweatpants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'New Balance',
            rating: 2.9,
            numReviews: 13,
            countInStock: 20,
            description: 'Comforable sweatpants'
        },
        {
            name: 'Oversize shirt',
            slug: 'oversize-shirt',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 95,
            brand: 'Zara',
            rating: 3.5,
            numReviews: 7,
            countInStock: 20,
            description: 'A popular pants'
        }
    ]
}