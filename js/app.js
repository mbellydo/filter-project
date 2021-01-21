const app = Vue.createApp({
    data() {
      return {
        filtroActivo: ''
      }
    },
    methods: {
        aplicarFiltro(tipoDulce) {
            this.filtroActivo = tipoDulce
        },
        showItem(tipoDulce) {
            return !this.filtroActivo || tipoDulce == this.filtroActivo
        }
    },

})

app.mount('#store')