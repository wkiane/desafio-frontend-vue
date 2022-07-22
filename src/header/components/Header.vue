<template>
    <div class="header">
        <navbar-vanilla />
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('initCategorias')
    },
    computed: {
        categorias() {
            return this.$store.getters.categorias
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        this.construirNavbar();
    },
    methods: {
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
                        text: 'home',
                        clickEvent: '',
                        customClass: 'cor-branca-ancora',
                        href: '/',
                        position: 'center',
                    },
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
                    }

                ],
            };
            return navbarParameters;
        }

    }
}
</script>

<style>

</style>