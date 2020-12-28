<template>
  <v-app>



      <v-row no-gutters>
        <v-col
          :class="{ 'd-none': $store.state.drawer }"
          cols='3'

        >
          <v-row
            style="background-color:red;height:400px">
            hola
          </v-row>
        </v-col>
        <v-col
        >
          <v-card
            style="border-radius: 0 0 0 0"
          >
            <div>
              <v-img
                class="portada"
                gradient="to top right, rgba(128,208,199,.5), rgba(29,94,132,.6)"

                :class="{ 'esconderportada': !$store.state.showNavbar }"
                src="gol.jpg"
              >
              </v-img>
            </div>
            <play-responsably></play-responsably>
            <div style="height:2000px;background-color:#CFD8DC">

            </div>
          </v-card>
        </v-col>
      </v-row>


  


    <navbar></navbar>



  </v-app>
</template>

<script>






  export default {
    name: 'Home',
    components: {
      'Ligas': require('@/components/MenuTabs/Ligas.vue').default,
      'Campeonatos': require('@/components/MenuTabs/Campeonatos.vue').default,
      'Equipos': require('@/components/MenuTabs/Equipos.vue').default,
      'Paises': require('@/components/MenuTabs/Paises.vue').default,
      'play-responsably': require('@/components/PlayResponsably.vue').default,
      'navbar': require('@/components/NavBar.vue').default
    },
    data: () => ({
    }),
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
     onScroll () {
       this.$store.commit('onScroll')
     }
   }
  }
</script>

<style lang="sass" scope>
  body::-webkit-scrollbar
    display: none


  .portada
    height: 407px
    transition: 0.2s all ease-out
  .esconderportada
    height: 0
  .verde
    background:
      color: green
  .azul
    background:
      color: transparent
  .rojo
    background:
      color: red
  .arriba
    background-image: linear-gradient(90deg, #263238 10%, rgba(29,94,132) 50%)
</style>
