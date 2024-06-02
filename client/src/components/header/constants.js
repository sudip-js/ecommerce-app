export const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: 'womens-dresses',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: 'tops',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Jewellery', href: 'womens-jewellery' },
                        { name: 'Fragrances', href: 'fragrances' },
                        { name: 'Bags', href: 'womens-bags' },
                        { name: 'Sunglasses', href: 'sunglasses' },
                        { name: 'Shoes', href: 'womens-shoes' },
                        { name: 'Skincare', href: 'skincare' },
                        { name: 'Watches', href: 'womens-watches' },
                    ],
                },
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: 'tops' },
                        { name: 'Frock', href: 'womens-dresses' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: 'mens-shirts',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: 'mens-shirts',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Fragrances', href: 'fragrances' },
                        { name: 'Sunglasses', href: 'sunglasses' },
                        { name: 'Shoes', href: 'mens-shoes' },
                        { name: 'Watches', href: 'mens-watches' },
                    ],
                },
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Shirts', href: 'mens-shirts' },
                    ],
                },
            ],
        },
    ],
}