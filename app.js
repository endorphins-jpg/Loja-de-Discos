const app = {
    data(){
        return{
            albums_hr: [
                {
                    title: 'Dynasty',
                    artist: 'Kiss',
                    cover: './assets/images/dynasty.jpg',
                    quantity: 0,
                    price: 65.00,
                    total: 65.00
                }, {
                    title: 'Appetite For Destruction',
                    artist: "Guns 'n Roses",
                    cover: './assets/images/appetite for destruction.jpeg',
                    quantity: 0,
                    price: 60.00,
                    total: 60.00
                },{
                    title: 'Toxicity',
                    artist: 'System Of a Down',
                    cover: './assets/images/toxicity.jpg',
                    quantity: 0,
                    price: 35.00,
                    total: 35.00
                },
            ],
            albums_bm: [
                {
                    title: 'Deathcrush',
                    artist: 'Mayhem',
                    cover: './assets/images/deathcrush.jpeg',
                    quantity: 0,
                    price: 45.00,
                    total: 45.00
                }, {
                    title: 'Black Metal',
                    artist: 'Venom',
                    cover: './assets/images/black metal.jpeg',
                    quantity: 0,
                    price: 35.00,
                    total: 35.00
                },{
                    title: 'I.N.R.I.',
                    artist: 'Sarcófago',
                    cover: './assets/images/INRI.jpeg',
                    quantity: 0,
                    price: 30.00,
                    total: 30.00
                },
            ],
            logo: './assets/images/logo.png',
            cart: [
            ],
        }
    },
    methods: {
        add_cart(album){
            this.cart.push(album)
            album.quantity ++
        },
        verify_cart(album){
            return this.cart.indexOf(album) != -1
        },
        plus_cart(album){
            album.quantity ++
            album.total = album.price * album.quantity
        },
        sub_cart(album){
            album.quantity --
            album.total = album.total - album.price
        },
        remove_cart(album){
            this.cart = this.cart.filter((product, index) =>{
                album.quantity = 0
                album.total = album.price
                return album != product
            })
        },
    },
    computed: {
        total_cart(){
            const total = this.cart.reduce((a, b) => a + b.total, 0)
            return total
        }
    }
}

Vue.createApp(app).mount('#app')

