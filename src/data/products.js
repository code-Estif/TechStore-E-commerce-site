// Product data with 50+ unique tech items - Updated for February 2026 market prices
const products = [
    // Apple
    { id: 1, name: 'iPhone 16 Pro Max', brand: 'Apple', category: 'Phones', price: 1099, ram: '12 GB', storage: '256 GB', image: '/src/assets/iPhone 16 Pro Max.jpg', onSale: true, originalPrice: 1199, inStock: true, rating: 4.9 },
    { id: 2, name: 'iPhone 17 Pro Max', brand: 'Apple', category: 'Phones', price: 1199, ram: '16 GB', storage: '512 GB', image: '/src/assets/iPhone 17 Pro Max.jpg', onSale: false, originalPrice: null, inStock: true, rating: 4.8 },
    { id: 3, name: 'iPhone 17', brand: 'Apple', category: 'Phones', price: 799, ram: '8 GB', storage: '128 GB', image: '/src/assets/iPhone 17.jpg', onSale: false, originalPrice: null, inStock: false, rating: 4.5 },
    { id: 4, name: 'iPhone 15 Pro Max', brand: 'Apple', category: 'Phones', price: 949, ram: '8 GB', storage: '256 GB', image: '/src/assets/iPhone 15 Pro Max.jpg', onSale: true, originalPrice: 1099, inStock: true, rating: 4.7 },
    { id: 5, name: 'iPhone 15', brand: 'Apple', category: 'Phones', price: 699, ram: '6 GB', storage: '128 GB', image: '/src/assets/iPhone 15.jpg', onSale: true, originalPrice: 799, inStock: true, rating: 4.4 },
    { id: 6, name: 'iPhone 14', brand: 'Apple', category: 'Phones', price: 549, ram: '6 GB', storage: '128 GB', image: '/src/assets/iPhone 14.jpg', onSale: true, originalPrice: 649, inStock: true, rating: 4.3 },
    { id: 7, name: 'iPhone SE (2022)', brand: 'Apple', category: 'Phones', price: 349, ram: '4 GB', storage: '64 GB', image: '/src/assets/iPhone SE (2022).jpg', onSale: true, originalPrice: 429, inStock: true, rating: 4.1 },
    { id: 50, name: 'iPhone 16 Plus', brand: 'Apple', category: 'Phones', price: 749, ram: '8 GB', storage: '128 GB', image: '/src/assets/iPhone 16 Plu.jpg', onSale: true, originalPrice: 899, inStock: true, rating: 4.6 },

    // Samsung
    { id: 8, name: 'Galaxy S25 Ultra', brand: 'Samsung', category: 'Phones', price: 1049, ram: '16 GB', storage: '512 GB', image: '/src/assets/Galaxy S25 Ultra.jpg', onSale: true, originalPrice: 1299, inStock: true, rating: 4.9 },
    { id: 9, name: 'Galaxy Z Fold 7', brand: 'Samsung', category: 'Phones', price: 1799, ram: '16 GB', storage: '1 TB', image: '/src/assets/Galaxy Z Fold 7.jpg', onSale: true, originalPrice: 1899, inStock: true, rating: 4.7 },
    { id: 10, name: 'Galaxy A56', brand: 'Samsung', category: 'Phones', price: 479, ram: '8 GB', storage: '128 GB', image: '/src/assets/Galaxy A56.jpg', onSale: false, originalPrice: null, inStock: true, rating: 4.2 },
    { id: 11, name: 'Galaxy S24 Ultra', brand: 'Samsung', category: 'Phones', price: 899, ram: '12 GB', storage: '256 GB', image: '/src/assets/Galaxy S24 Ultra.jpg', onSale: true, originalPrice: 1199, inStock: true, rating: 4.8 },
    { id: 12, name: 'Galaxy A54', brand: 'Samsung', category: 'Phones', price: 299, ram: '8 GB', storage: '128 GB', image: '/src/assets/Galaxy A54.jpg', onSale: true, originalPrice: 449, inStock: true, rating: 4.3 },
    { id: 13, name: 'Galaxy A14', brand: 'Samsung', category: 'Phones', price: 149, ram: '4 GB', storage: '64 GB', image: '/src/assets/Galaxy A14.jpg', onSale: true, originalPrice: 199, inStock: false, rating: 3.9 },
    { id: 14, name: 'Galaxy Z Flip 5', brand: 'Samsung', category: 'Phones', price: 699, ram: '8 GB', storage: '256 GB', image: '/src/assets/Galaxy Z Flip 5.jpg', onSale: true, originalPrice: 999, inStock: true, rating: 4.5 },
    { id: 15, name: 'Galaxy Tab S9', brand: 'Samsung', category: 'Laptops', price: 649, ram: '12 GB', storage: '256 GB', image: '/src/assets/Galaxy Tab S9.jpg', onSale: true, originalPrice: 799, inStock: true, rating: 4.6 },

    // Xiaomi
    { id: 16, name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', category: 'Phones', price: 1199, ram: '16 GB', storage: '512 GB', image: '/src/assets/Xiaomi 15 Ultra.jpg', onSale: false, originalPrice: null, inStock: true, rating: 4.8 },
    { id: 17, name: 'Xiaomi 14 Ultra', brand: 'Xiaomi', category: 'Phones', price: 699, ram: '16 GB', storage: '512 GB', image: '/src/assets/Xiaomi 14 Ultra.jpg', onSale: true, originalPrice: 899, inStock: true, rating: 4.7 },
    { id: 18, name: 'Xiaomi 15 Pro', brand: 'Xiaomi', category: 'Phones', price: 949, ram: '12 GB', storage: '256 GB', image: '/src/assets/Xiaomi 15 Pro.jpg', onSale: false, originalPrice: null, inStock: true, rating: 4.6 },
    { id: 19, name: 'Xiaomi 13T Pro', brand: 'Xiaomi', category: 'Phones', price: 499, ram: '12 GB', storage: '256 GB', image: "/src/assets/Xiaomi 13T Pro.jpg", onSale: true, originalPrice: 649, inStock: true, rating: 4.4 },
    { id: 20, name: 'Redmi Note 13', brand: 'Xiaomi', category: 'Phones', price: 199, ram: '6 GB', storage: '128 GB', image: '/src/assets/Redmi Note 13.jpg', onSale: true, originalPrice: 249, inStock: true, rating: 4.2 },
    { id: 21, name: 'Xiaomi Mix Fold 3', brand: 'Xiaomi', category: 'Phones', price: 1099, ram: '16 GB', storage: '1 TB', image: '/src/assets/Xiaomi Mix Fold 3.jpg', onSale: true, originalPrice: 1299, inStock: false, rating: 4.5 },

    // Google
    { id: 22, name: 'Pixel 10 Pro XL', brand: 'Google', category: 'Phones', price: 1199, ram: '16 GB', storage: '256 GB', image: '/src/assets/Pixel 10 Pro XL.jpg', onSale: false, originalPrice: null, inStock: true, rating: 4.9 },
    { id: 23, name: 'Pixel 9 Pro', brand: 'Google', category: 'Phones', price: 899, ram: '12 GB', storage: '128 GB', image: '/src/assets/Pixel 9 Pro.jpg', onSale: true, originalPrice: 999, inStock: true, rating: 4.7 },
    { id: 24, name: 'Pixel 9a', brand: 'Google', category: 'Phones', price: 449, ram: '8 GB', storage: '128 GB', image: '/src/assets/Pixel 9a.jpg', onSale: true, originalPrice: 499, inStock: true, rating: 4.4 },
    { id: 25, name: 'Pixel 8 Pro', brand: 'Google', category: 'Phones', price: 699, ram: '12 GB', storage: '128 GB', image: '/src/assets/Pixel 8 Pro.jpg', onSale: true, originalPrice: 899, inStock: true, rating: 4.6 },
    { id: 26, name: 'Pixel 7a', brand: 'Google', category: 'Phones', price: 349, ram: '8 GB', storage: '128 GB', image: '/src/assets/Pixel 7a.jpg', onSale: true, originalPrice: 449, inStock: true, rating: 4.3 },
    { id: 27, name: 'Pixel Fold', brand: 'Google', category: 'Phones', price: 1299, ram: '12 GB', storage: '512 GB', image: '/src/assets/Pixel Fold.jpg', onSale: true, originalPrice: 1799, inStock: true, rating: 4.5 },

    // OnePlus
    { id: 28, name: 'OnePlus 15', brand: 'OnePlus', category: 'Phones', price: 849, ram: '16 GB', storage: '256 GB', image: '/src/assets/OnePlus 15.jpg', onSale: false, originalPrice: null, inStock: true, rating: 4.8 },
    { id: 29, name: 'OnePlus 13', brand: 'OnePlus', category: 'Phones', price: 649, ram: '12 GB', storage: '256 GB', image: '/src/assets/OnePlus 13.jpg', onSale: true, originalPrice: 799, inStock: true, rating: 4.6 },
    { id: 30, name: 'OnePlus Open', brand: 'OnePlus', category: 'Phones', price: 1399, ram: '16 GB', storage: '512 GB', image: '/src/assets/OnePlus Open.jpg', onSale: true, originalPrice: 1599, inStock: true, rating: 4.7 },
    { id: 31, name: 'OnePlus 12', brand: 'OnePlus', category: 'Phones', price: 549, ram: '16 GB', storage: '256 GB', image: '/src/assets/OnePlus 12.jpg', onSale: true, originalPrice: 699, inStock: true, rating: 4.5 },
    { id: 32, name: 'OnePlus Nord 3', brand: 'OnePlus', category: 'Phones', price: 249, ram: '8 GB', storage: '256 GB', image: '/src/assets/OnePlus Nord 3.jpg', onSale: true, originalPrice: 299, inStock: true, rating: 4.1 },

    // Vivo
    { id: 33, name: 'X100 Pro', brand: 'Vivo', category: 'Phones', price: 749, ram: '16 GB', storage: '512 GB', image: '/src/assets/X100 Pro.jpg', onSale: true, originalPrice: 899, inStock: true, rating: 4.7 },
    { id: 34, name: 'X200 Pro', brand: 'Vivo', category: 'Phones', price: 949, ram: '16 GB', storage: '512 GB', image: '/src/assets/X200 Pro.jpg', onSale: false, originalPrice: null, inStock: true, rating: 4.8 },
    { id: 35, name: 'Vivo V40', brand: 'Vivo', category: 'Phones', price: 399, ram: '12 GB', storage: '256 GB', image: '/src/assets/Vivo V40.jpg', onSale: true, originalPrice: 499, inStock: true, rating: 4.4 },

    // Oppo
    { id: 36, name: 'Find X9 Pro', brand: 'Oppo', category: 'Phones', price: 999, ram: '16 GB', storage: '512 GB', image: '/src/assets/Find X9 Pro.jpg', onSale: false, originalPrice: null, inStock: true, rating: 4.7 },
    { id: 37, name: 'Oppo Reno 13', brand: 'Oppo', category: 'Phones', price: 499, ram: '12 GB', storage: '256 GB', image: '/src/assets/Oppo Reno 13.jpg', onSale: true, originalPrice: 599, inStock: true, rating: 4.3 },
    { id: 38, name: 'Oppo Find N4', brand: 'Oppo', category: 'Phones', price: 1349, ram: '16 GB', storage: '512 GB', image: '/src/assets/Oppo Find N4.jpg', onSale: true, originalPrice: 1499, inStock: false, rating: 4.6 },

    // Honor
    { id: 39, name: 'Magic 7 Pro', brand: 'Honor', category: 'Phones', price: 949, ram: '12 GB', storage: '512 GB', image: '/src/assets/Magic 7 Pro.jpg', onSale: true, originalPrice: 1099, inStock: true, rating: 4.7 },
    { id: 40, name: 'Honor 200 Pro', brand: 'Honor', category: 'Phones', price: 549, ram: '12 GB', storage: '256 GB', image: '/src/assets/Honor 200 Pro.jpg', onSale: true, originalPrice: 699, inStock: true, rating: 4.5 },
    { id: 41, name: 'Magic V3', brand: 'Honor', category: 'Phones', price: 1299, ram: '16 GB', storage: '512 GB', image: '/src/assets/Magic V3.jpg', onSale: true, originalPrice: 1399, inStock: true, rating: 4.8 },

    // Motorola
    { id: 42, name: 'Razr 50 Ultra', brand: 'Motorola', category: 'Phones', price: 849, ram: '12 GB', storage: '256 GB', image: '/src/assets/Razr 50 Ultra.jpg', onSale: true, originalPrice: 999, inStock: true, rating: 4.6 },
    { id: 43, name: 'Edge 50 Ultra', brand: 'Motorola', category: 'Phones', price: 699, ram: '16 GB', storage: '512 GB', image: '/src/assets/Edge 50 Ultra.jpg', onSale: true, originalPrice: 799, inStock: true, rating: 4.5 },
    { id: 44, name: 'Moto G85', brand: 'Motorola', category: 'Phones', price: 219, ram: '8 GB', storage: '128 GB', image: '/src/assets/Moto G85.jpg', onSale: true, originalPrice: 299, inStock: true, rating: 4.2 },

    // Huawei
    { id: 45, name: 'Mate 70 Pro', brand: 'Huawei', category: 'Phones', price: 1099, ram: '12 GB', storage: '512 GB', image: '/src/assets/Mate 70 Pro.jpg', onSale: true, originalPrice: 1199, inStock: true, rating: 4.8 },
    { id: 46, name: 'Pura 70 Ultra', brand: 'Huawei', category: 'Phones', price: 1149, ram: '16 GB', storage: '512 GB', image: '/src/assets/Pura 70 Ultra.jpg', onSale: true, originalPrice: 1299, inStock: true, rating: 4.7 },
    { id: 47, name: 'Mate X5', brand: 'Huawei', category: 'Phones', price: 1499, ram: '16 GB', storage: '512 GB', image: '/src/assets/Mate X5.jpg', onSale: true, originalPrice: 1699, inStock: false, rating: 4.9 },

    // Others
    { id: 48, name: 'Sony Xperia 1 VI', brand: 'Sony', category: 'Phones', price: 999, ram: '12 GB', storage: '256 GB', image: '/src/assets/Sony Xperia 1 VI.jpg', onSale: true, originalPrice: 1199, inStock: true, rating: 4.7 },
    { id: 49, name: 'Asus Zenfone 11 Ultra', brand: 'Asus', category: 'Phones', price: 749, ram: '16 GB', storage: '512 GB', image: '/src/assets/Asus Zenfone 11 Ultra.jpg', onSale: true, originalPrice: 899, inStock: true, rating: 4.6 },

    // New Categories
    { id: 51, name: 'MacBook Pro M3', brand: 'Apple', category: 'Laptops', price: 1399, ram: '16 GB', storage: '512 GB', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&h=400&q=80', onSale: true, originalPrice: 1599, inStock: true, rating: 4.9 },
    { id: 52, name: 'Dell XPS 15', brand: 'Dell', category: 'Laptops', price: 1499, ram: '32 GB', storage: '1 TB', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&h=400&q=80', onSale: true, originalPrice: 1799, inStock: true, rating: 4.8 },
    { id: 53, name: 'AirPods Pro 2', brand: 'Apple', category: 'Accessories', price: 199, ram: 'N/A', storage: 'N/A', image: 'src/assets/AirPods Pro 2.jpg', onSale: true, originalPrice: 249, inStock: true, rating: 4.9 },
    { id: 54, name: 'Logitech MX Master 3S', brand: 'Logitech', category: 'Accessories', price: 99, ram: 'N/A', storage: 'N/A', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&h=400&q=80', onSale: false, originalPrice: null, inStock: true, rating: 4.8 },
];

export const brands = [
    'Apple', 'Samsung', 'Xiaomi', 'Vivo', 'Oppo',
    'Honor', 'Motorola', 'Google', 'OnePlus', 'Huawei',
    'Sony', 'Asus', 'Dell', 'Logitech'
];

export const categories = ['Phones', 'Laptops', 'Accessories'];

export const ramOptions = ['4 GB', '6 GB', '8 GB', '12 GB', '16 GB', '24 GB', '32 GB', 'N/A'];
export const storageOptions = ['64 GB', '128 GB', '256 GB', '512 GB', '1 TB', 'N/A'];

export default products;
