<template>
    <div class="header">
        <navbar-vanilla />
        <carrinho v-if="carrinhoVisivel" />
    </div>
</template>

<script>
import Carrinho from '@/carrinho/views/carrinho.vue'
export default {
    components: { Carrinho },
    computed: {
        categorias() {
            return this.$store.getters.categorias
        },
        login() {
            return this.$store.getters.login
        },
        carrinhoVisivel() {
            return this.$store.getters.carrinhoVisivel
        },
    },
    watch:{
        $route: {
            handler: function(value){
                if(value.hash === '#logout') {
                    this.$store.dispatch('fazerLogout')
                    history.pushState("", document.title, window.location.pathname + window.location.search);
                }
            },
            deep: true
        },
        login: function () {
            this.construirNavbar();
        }
    },
    async mounted() {
        await this.$store.dispatch("initLogin");
        await this.$store.dispatch("initCategorias");
        this.$store.dispatch("initCarrinho");
        this.construirNavbar();
        document.querySelector('[href="#carrinho"]').addEventListener('click', this.setCarrinhoVisivel)
    },
    methods: {
        setCarrinhoVisivel(e) {
            e.preventDefault()
            this.$store.dispatch('setVisibilidadeCarrinho')
        },
        setRotas() {
            // páginas apenas do vueJs
            var paginasVue = {
                itens: [{
                    subitens: [
                        {
                            evento: "evento-click-home",
                            rota: "/"
                        }
                    ]
                }]
            };

            paginasVue.itens.forEach(item => {
                document.addEventListener(item.evento, () => {
                    if(item.rota.match(/http/)) {
                        window.location = item.rota
                    } else {
                        this.$router.push(item.rota, () => {});
                    }
                });

                if (item.subitens) {
                    item.subitens.forEach(subitem => {
                        document.addEventListener(subitem.evento, () => {
                            if(subitem.rota.match(/http/)) {
                                window.location = subitem.rota
                            } else {
                                this.$router.push(subitem.rota, () => {});
                            }
                        });
                    });
                }
            });        
        },

        construirNavbar() {
            document.querySelector("navbar-vanilla").innerHTML = ''
            this.navbar = new Navbar(this.getParametrosNavbar());
        },

        getParametrosNavbar() {
            const navbarParameters = {
                backgroundColor: '#464646',
                hoverColor: '#7F7E7E',
                color: '#FFFFFF',
                logos: [
                    {
                        src: '/images/logo_alterdata_light.png',
                        href: '/',
                    }
                ],
                items: [
                    {
                        text: 'Home',
                        clickEvent: '',
                        customClass: 'cor-branca-ancora',
                        href: '/',
                        position: 'center',
                    },
                    {
                        text: 'Carrinho',
                        clickEvent: '',
                        customClass: 'cor-branca-ancora',
                        href: '#carrinho',
                        position: 'right',
                    }
                ],
                dropDowns: [
                    {
                        position: 'center',
                        text: 'Produtos',
                        clickEvent: '',
                        customClass: 'cor-branca-ancora',
                        columns: [
                            {
                                contentBoxes: [
                                    {
                                        text: 'Categorias',
                                        items: this.categorias
                                    },
                                ]
                            },
                        ]
                    },
                ],
            };

             if(this.login) {
                navbarParameters.dropDowns.push({
                    position: 'right',
                    text: 'Área do Usuário',
                    clickEvent: '',
                    customClass: 'cor-branca-ancora',
                    columns: [
                        {
                            contentBoxes: [
                                {
                                    text: 'Área do Usuário',
                                    items: [
                                        {
                                            text: "Sair",
                                            href: '#logout',
                                        }
                                    ]
                                },
                            ]
                        },
                    ]
                })
            } else {
               navbarParameters.items.push({
                    text: 'Fazer Login',
                    clickEvent: '',
                    customClass: 'cor-branca-ancora',
                    href: '/login',
                    position: 'right',
                })
            }
            return navbarParameters;
        }

    }
}
</script>

<style>

</style>