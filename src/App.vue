<template>
  <v-app>
    <v-card
      style="border-radius: 0 0 0 0"
    >
      <v-img
        class="portada"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        style="position:fixed"
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
          style="background-color:rgb(3,155,229)"
          cols="2"
        >
          <v-img
            max-height="70"
            max-width="70"
            src="bch_logo_light_small.png"
            class="ml-15 mt-8"
          ></v-img>
        </v-col>
        <v-col cols="10">
          <v-row
            id="botones"
            :class="{ 'd-none': !showNavbar }"
            class="arriba ma-0"
            style="height:100"
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
              style="text-transform: none"
              text
              x-small
              dark
              class="mx-2 my-1"
            >
              ayuda
            </v-btn>
            <v-btn
              style="text-transform: none"
              text
              x-small
              dark
              class="mx-2 my-1"
            >
              cancelar apuesta
            </v-btn>
            <v-btn
              style="text-transform: none"
              text
              x-small
              dark
              class="mx-2 my-1 mr-5"
            >
              iniciar sesión
            </v-btn>
          </v-row>
          <v-row
            class="ma-0 pa-0"
            style="background-color:rgb(3,155,229); height:44px"
            no-gutters
          >
            <v-spacer></v-spacer>
            <v-col class="ma-0">
              <v-tabs
                background-color="transparent"
                centered
                optional
                height="40px"
                class="mt-1"
                hide-slider
              >

                  <v-tab
                    style="color:white"
                    @mouseover="mouseOver"
                    @mouseleave="leaveOver"
                    @click="clickOver"
                  >Ligas</v-tab>

                  <v-tab
                    style="color:white"
                    @mouseover="mouseOver"
                    @mouseleave="leaveOver"
                    @click="clickOver"
                  >Campeonatos</v-tab>
                  <v-tab
                    style="color:white"
                    @mouseover="mouseOver"
                    @mouseleave="leaveOver"
                    @click="clickOver"
                  >Países</v-tab>
                  <v-tab
                    style="color:white"
                    @mouseover="mouseOver"
                    @mouseleave="leaveOver"
                    @click="clickOver"
                  >Equipos</v-tab>
              </v-tabs>
            </v-col>
            <v-spacer></v-spacer>
            <template>
              <v-text-field
                class="my-1 mr-5"
                solo
                dense
                append-icon="mdi-magnify"
                style="width:100px"
                flat
                height="10"
              ></v-text-field>
            </template>
            <v-app-bar-nav-icon
              class="mt-1 mr-5"
              dark
            ></v-app-bar-nav-icon>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        class="ligas ma-0"
        v-show="active"
        @mouseover="mouseOver"
        @mouseleave="mouseOver"
      >
        
      </v-row>
      <v-row
        class="ma-0"
        v-show="active"
        @mouseover="mouseOver"
        @mouseleave="mouseOver"
      ></v-row>
      <v-row
        class="ma-0"
        v-show="active"
        @mouseover="mouseOver"
        @mouseleave="mouseOver"
      ></v-row>
      <v-row
        class="ma-0"
        v-show="active"
        @mouseover="mouseOver"
        @mouseleave="mouseOver"
      ></v-row>
    </v-card>


    <div style="height: 2000px">

    </div>
  </v-app>
</template>

<script>

  export default {
    name: 'Home',
    components: {
      'Ligas': require('@/components/Ligas.vue').default
    },
    data: () => ({
      drawer: null,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      showNavbar: true,
      active: false,
      lastScrollPosition: 0
    }),
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      mouseOver: function(){
            this.active = !this.active;
        },
      clickOver: function(){
            this.active = !this.active;
        },
      leaveOver: function(){
          if (this.active == true){
            this.active = !this.active;
          }
        },
      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          this.showNavbar = true

        }
        if (currentScrollPosition < 1) {
          this.showNavbar = true
        }
        if (currentScrollPosition > 1) {
          this.showNavbar = false
        }
        this.lastScrollPosition = currentScrollPosition
      }
    }
  }
</script>

<style lang="sass">
  #apbar
    width: 100vw
    position: fixed
    transition: 0.2s all ease-out
  #botones
    transition: 0.2s all ease-out
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
    height: 370px
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
    background-image: linear-gradient(90deg, rgb(3,155,229) 0%, rgb(23,175,249,.7))
</style>
