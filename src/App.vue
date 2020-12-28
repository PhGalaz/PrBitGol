<template>
  <v-app>



    <v-navigation-drawer
      style="background-color:#E1F5FE"
      v-model="drawer"
      app
      disable-resize-watcher
    >
      <!--  -->
    </v-navigation-drawer>





    <v-card
      style="border-radius: 0 0 0 0"
    >
      <v-img
        class="portada"
        gradient="to top right, rgba(128,208,199,.5), rgba(29,94,132,.6)"

        :class="{ 'esconderportada': !showNavbar }"
        src="gol.jpg"
      >
      </v-img>


    </v-card>
    <v-card id="apbar"
      color="transparent"
      style="border-radius:0 0 0 0"
      flat
    >

      <v-row no-gutters>
        <v-col
          style="background-color:#263238"
          cols="2"
        >
          <v-img
            max-height="70"
            max-width="70"
            src="bch_logo_light_small.png"
            class="logobchchico"
          ></v-img>
        </v-col>
        <v-col cols="10">
          <v-row
            id="botones"
            :class="{ 'd-none': !showNavbar }"
            class="arriba ma-0"
            rounded-bl-xl
          >
          <v-spacer></v-spacer>

            <v-img
              max-height="19"
              max-width="19"
              src="bch_b_small.png"
              class="mt-1"
            ></v-img>

            <p
              class="ma-1"
              style="color:white;font-size:13px"
            >
              BCH
            </p>
            <p
              class="font-weight-black ma-1 mt-1"
              style="color:white;font-size:13px"
            >
              $370.00
            </p>
            <v-spacer></v-spacer>
            <v-btn
              style="text-transform: none;font-size:12px"
              text
              x-small
              dark
              class="mx-1 my-1"
            >
              ayuda
            </v-btn>
            <v-btn
              style="text-transform: none;font-size:12px"
              text
              x-small
              dark
              class="mx-1 my-1"
            >
              cancelar apuesta
            </v-btn>
            <v-btn
              style="text-transform: none;font-size:12px"
              text
              x-small
              dark
              class="mx-1 my-1 mr-5"
            >
              iniciar sesión
            </v-btn>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="background-color:#263238; height:44px"
            no-gutters
          >
            <v-spacer></v-spacer>
            <v-col class="ma-0">
              <v-tabs
                inactive
                background-color="transparent"
                centered
                optional
                height="40px"
                class="mt-1"
                hide-slider
              >

              <v-tab
                id="tab1"
                style="color:white"
                @mouseover="mouseOver(1)"
                @mouseleave="leaveOver(1)"
              >Ligas</v-tab>

              <v-tab
                id="tab2"
                style="color:white"
                @mouseover="mouseOver(2)"
                @mouseleave="leaveOver(2)"
              >Campeonatos</v-tab>

              <v-tab
                id="tab3"
                style="color:white"
                @mouseover="mouseOver(3)"
                @mouseleave="leaveOver(3)"
              >Equipos</v-tab>

              <v-tab
                id="tab4"
                style="color:white"
                @mouseover="mouseOver(4)"
                @mouseleave="leaveOver(4)"
              >Países</v-tab>


              </v-tabs>
            </v-col>
            <v-spacer></v-spacer>
            <v-text-field
              class="ma-0 mr-1 mt-2"
              solo
              dense
              append-icon="mdi-magnify"
              style="width:100px;transform:scale(0.75);transform-origin: left top"
              flat
              clearable
            ></v-text-field>
            <v-app-bar-nav-icon
              class="mt-1 mr-5"
              dark
              @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </v-row>
        </v-col>
      </v-row>

      <Ligas
        v-bind:showligas="showligas"
        @mouseover.native="mouseOver(1)"
        @mouseleave.native="leaveOver(1)"
      ></Ligas>
      <Campeonatos
        v-bind:showcampeonatos="showcampeonatos"
        @mouseover.native="mouseOver(2)"
        @mouseleave.native="leaveOver(2)"
      ></Campeonatos>
      <Equipos
        v-bind:showequipos="showequipos"
        @mouseover.native="mouseOver(3)"
        @mouseleave.native="leaveOver(3)"
      ></Equipos>
      <Paises
        v-bind:showpaises="showpaises"
        @mouseover.native="mouseOver(4)"
        @mouseleave.native="leaveOver(4)"
      ></Paises>

      <play-responsably></play-responsably>

    </v-card>


    <div style="height:2000px;background-color:#CFD8DC">

    </div>
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
      'play-responsably': require('@/components/PlayResponsably.vue').default
    },
    data: () => ({
      drawer: false,
      showNavbar: true,
      showligas: false,
      showcampeonatos: false,
      showequipos: false,
      showpaises: false,
      lastScrollPosition: 0,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
    }),
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
     mouseOver(x){
         if(x == 1){
           if (this.showligas == true){
             document.getElementById("tab1").style.background = "rgba(98,178,169)"
           } else {
             this.showligas = !this.showligas;
           }
         }
         else if (x == 2) {
           if (this.showcampeonatos == true){
             document.getElementById("tab2").style.background = "rgba(98,178,169)"
           } else {
             this.showcampeonatos = !this.showcampeonatos;
           }
         }
         else if (x == 3) {
           if (this.showequipos == true){
             document.getElementById("tab3").style.background = "rgba(98,178,169)"
           } else {
             this.showequipos = !this.showequipos;
           }
         }
         else if (x == 4) {
           if (this.showpaises == true){
             document.getElementById("tab4").style.background = "rgba(98,178,169)"
           } else {
             this.showpaises = !this.showpaises;
           }
         }
       },
     leaveOver(x){
         if(x == 1){
           if (this.showligas == true){
             this.showligas = false;
             document.getElementById("tab1").style.background = ""
           }
         }
         else if (x == 2) {
           if (this.showcampeonatos == true){
             this.showcampeonatos = false;
             document.getElementById("tab2").style.background = ""
           }
         }
         else if (x == 3) {
           if (this.showequipos == true){
             this.showequipos = false;
             document.getElementById("tab3").style.background = ""
           }
         }
         else if (x == 4) {
           if (this.showpaises == true){
             this.showpaises = false;
             document.getElementById("tab4").style.background = ""
           }
         }
       },
     onScroll () {
       const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
       if (currentScrollPosition < 1) {
           this.showNavbar = true
         }
       if (this.lastScrollPosition < currentScrollPosition){
         if (currentScrollPosition > 1 && (this.showligas == false && this.showcampeonatos == false && this.showequipos == false && this.showpaises == false)) {
             this.showNavbar = false
           }
         if (currentScrollPosition > 0 && (this.showligas == true || this.showcampeonatos == true || this.showequipos == true || this.showpaises == true)) {
             document.documentElement.scrollTop = this.lastScrollPosition
             return
           }
       }
       this.lastScrollPosition = currentScrollPosition
     }
   }
  }
</script>

<style lang="sass" scope>
  body::-webkit-scrollbar
    display: none

  .v-btn:before
    opacity: 0 !important


  .v-ripple__container
    opacity: 0 !important

  #apbar
    width: 100vw
    position: fixed
    transition: 0.2s all ease-out
  #botones
    transition: 0.2s all ease-out
  .v-tab
    transition: 0.2s all ease-out
  #tab1:hover
    background-color: rgba(98,178,169)
  #tab2:hover
    background-color: rgba(98,178,169)
  #tab3:hover
    background-color: rgba(98,178,169)
  #tab4:hover
    background-color: rgba(98,178,169)
  .logobchchico
    position: absolute
    left: 50%
    top: 50%
  .ligas
    width: 100vw
    position: fixed
    height: 300px
    transition: 0.2s all ease-out
  .v-text-field
    width: 10px
    height: 300px
  .search
    transform: scale(0.8)
    transform-origin: left
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
