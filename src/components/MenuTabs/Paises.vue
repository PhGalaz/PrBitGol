<template>
  <v-row
    class="todo"
    style="height=0px"
    :class="{ 'Ligas': showpaises }"
    no-gutters
  >

    <v-row
      no-gutters
      :class="{ 'd-none': !showpaises }"
      style="width:100vw"
    >
      <v-col
        v-for="continente in $store.state.continentes"  :key="continente.continente_id"
        cols="3"
      >
          <v-row
            class="justify-center mt-1 font-weight-black"
            align="center"
            style="font-size:12px;color:rgb(255,255,255,0.6);height:0px"
            no-gutters
          >
            {{ continente.name }}
          </v-row>

        </v-col>
    </v-row>

    <v-row
      :class="{ 'd-none': !showpaises }"
    >
      <v-col
        v-for="continente in $store.state.continentes"  :key="continente.continente_id"
        cols="3"
        class="ma-0"
      >
          <v-list
            dense
            dark
            style="background-color:rgb(255,255,255,0.05);max-height:300px;border-radius:2px"
            class="overflow-y-auto overflow-x-hidden mt-3 pt-0 pb-0"
          >

            <v-list-item-group
              active-class='white--text'
              color="primary"
              style="min-width:200px"
            >
              <v-list-item
                  v-for="liga in continente.ligas"
                  :key="liga.league_id"

                >
                  <v-list-item-content>
                    <v-row
                      no-gutters
                      align="center"
                    >
                      <v-col
                        cols='2'
                        class=""
                      >
                        <v-img
                          max-height="40"
                          max-width="20"
                          :src="liga.logo"
                          class="ml-2"
                        ></v-img>
                      </v-col>
                      <v-col
                        justify="center"
                        style="font-size:14px"
                        class="ml-4"
                      >
                        {{ liga.name }}
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>

            </v-list>
          </v-col>
    </v-row>

  </v-row>
</template>

<script>
  export default {
    props: ['showpaises'],
    data: () => ({
      selectedItem: null,

      }),
      watch: {
        showpaises: function(newVal, oldVal) {

        }
      },
      methods: {
        nullSelected: function(){
          this.selectedItem=this.selectedItem;
          console.log(this.selectedItem)
        }
      }
    }
</script>

<style lang="sass" scoped>
  ::-webkit-scrollbar
    background: transparent
    border-radius: 7px
    width: 8px
  ::-webkit-scrollbar-thumb
    background-color: rgb(255,255,255,.225)
    border-radius: 20px



  .todo
    background-image: linear-gradient(45deg, rgba(128,208,199) 0%, rgba(19,84,122,.9))
    height: 0px
  .Ligas
    background-image: linear-gradient(45deg, rgba(128,208,199) 0%, rgba(19,84,122,.9))
    height: 330px


</style>
