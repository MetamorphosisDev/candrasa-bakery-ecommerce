export const Ratinglist: string[] = [' ', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★']

export type PexelsImage = {
    id: number;
    alt: string;
    nama: string;
    img: string;
    harga: string;
    deskripsi: string;
    stok: string;
    populer: string;
    rating: string
};

export const pexelsImageList: PexelsImage[] = [
    {
        id: 0,
        alt: 'fotoproduct',
        nama: 'Cheese Bread',
        img: "https://images.pexels.com/photos/4197905/pexels-photo-4197905.jpeg",
        harga: 'Rp 45.000',
        deskripsi: 'Keju dan Cream berkualitas',
        stok: 'Ready',
        populer: '/Icon/firepopuler.png',
        rating: Ratinglist[4]
    },
    {
        id: 1,
        alt: 'fotoproduct',
        nama: 'BIGMO',
        img: "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg",
        harga: 'Rp 55.000',
        deskripsi: 'Meses dan Paduan Coklat',
        stok: 'Ready',
        populer: '/Icon/firepopuler.png',
        rating: Ratinglist[5]
    },
    {
        id: 2,
        alt: 'fotoproduct',
        nama: 'MBG Bread',
        img: "https://img-global.cpcdn.com/recipes/c7aa1fe143f4ca84/680x781cq80/roti-tawar-manis-wijen-foto-resep-utama.jpg",
        harga: 'Rp 100.000',
        deskripsi: 'Bergizi dan Lezat',
        stok: 'Ready',
        populer: '',
        rating: Ratinglist[5]
    },
    {
        id: 3,
        alt: 'fotoproduct',
        nama: 'MBG Bread',
        img: "https://img-global.cpcdn.com/recipes/c7aa1fe143f4ca84/680x781cq80/roti-tawar-manis-wijen-foto-resep-utama.jpg",
        harga: 'Rp 100.000',
        deskripsi: 'Bergizi dan Lezat',
        stok: 'Ready',
        populer: '',
        rating: Ratinglist[5]
    },
    {
        id: 4,
        alt: 'fotoproduct',
        nama: 'MBG Bread',
        img: "https://img-global.cpcdn.com/recipes/c7aa1fe143f4ca84/680x781cq80/roti-tawar-manis-wijen-foto-resep-utama.jpg",
        harga: 'Rp 100.000',
        deskripsi: 'Bergizi dan Lezat',
        stok: 'Ready',
        populer: '',
        rating: Ratinglist[4]
    },
    {
        id: 5,
        alt: 'fotoproduct',
        nama: 'MBG Bread',
        img: "https://img-global.cpcdn.com/recipes/c7aa1fe143f4ca84/680x781cq80/roti-tawar-manis-wijen-foto-resep-utama.jpg",
        harga: 'Rp 100.000',
        deskripsi: 'Bergizi dan Lezat',
        stok: 'Ready',
        populer: '',
        rating: Ratinglist[3]
    },
    {
        id: 6,
        alt: 'fotoproduct',
        nama: 'Cheese Bread',
        img: "https://images.pexels.com/photos/4197905/pexels-photo-4197905.jpeg",
        harga: 'Rp 45.000',
        deskripsi: 'Keju dan Cream berkualitas',
        stok: 'Ready',
        populer: '',
        rating: Ratinglist[4]
    },
    {
        id: 7,
        alt: 'fotoproduct',
        nama: 'BIGMO',
        img: "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg",
        harga: 'Rp 55.000',
        deskripsi: 'Meses dan Paduan Coklat',
        stok: 'Ready',
        populer: '',
        rating: Ratinglist[5]
    },
    // {
    //     id: 8,
    //     alt: 'fotoproduct',
    //     nama: 'Cheese Bread',
    //     img: "https://images.pexels.com/photos/4197905/pexels-photo-4197905.jpeg",
    //     harga: 'Rp 45.000',
    //     deskripsi: 'Keju dan Cream berkualitas',
    //     stok: 'Ready',
    //     populer: '',
    //     rating: ''
    // },
    // {
    //     id: 9,
    //     alt: 'fotoproduct',
    //     nama: 'BIGMO',
    //     img: "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg",
    //     harga: 'Rp 55.000',
    //     deskripsi: 'Meses dan Paduan Coklat',
    //     stok: 'Ready',
    //     populer: '',
    //     rating: ''
    // },
    // {
    //     id: 10,
    //     alt: 'fotoproduct',
    //     nama: 'MBG Bread',
    //     img: "https://img-global.cpcdn.com/recipes/c7aa1fe143f4ca84/680x781cq80/roti-tawar-manis-wijen-foto-resep-utama.jpg",
    //     harga: 'Rp 100.000',
    //     deskripsi: 'Bergizi dan Lezat',
    //     stok: 'Habis',
    //     populer: '',
    //     rating: ''
    // },
    // {
    //     id: 11,
    //     alt: 'fotoproduct',
    //     nama: 'MBG Bread',
    //     img: "https://img-global.cpcdn.com/recipes/c7aa1fe143f4ca84/680x781cq80/roti-tawar-manis-wijen-foto-resep-utama.jpg",
    //     harga: 'Rp 100.000',
    //     deskripsi: 'Bergizi dan Lezat',
    //     stok: 'Habis',
    //     populer: '',
    //     rating: ''
    // },
]