const app = Vue.createApp({
    data() {
        return {
            filtroActivo: '',
            filterText: ''
        }
    },
    methods: {
        aplicarFiltro(tipoDulce) {
            this.filtroActivo = tipoDulce
        },
        showItem(tipoDulce) {
            if (this.filterText) {
                tipoDulce.toLowerCase().includes(this.filterText.toLowerCase())
            }
            return !this.filtroActivo || tipoDulce == this.filtroActivo
                       
        }
    },

})

app.mount('#store')