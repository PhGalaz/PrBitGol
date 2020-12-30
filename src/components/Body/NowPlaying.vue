<template>
  <v-row
    class="ma-0 pa-0 whole"
    :class="{ 'mt-8': !$store.state.showNavbar }"
    dense
  >
    <v-list
      dense
      dark
      style="background-color:rgb(0,0,0,0.3);border-radius:5px;width:100vw"
      class="overflow-y-auto overflow-x-hidden ma-0 pa-0"
    >

      <v-list-item-group
        active-class='white--text'
        class="pa-0 ma-0"
      >
        <v-row
          v-for="fixture in $store.state.nowPlaying"
          :key="fixture.fixture_id"
          class="ma-0 pa-0"
          style="background-color:#263238"
        >

          <v-col
            style="max-width:5%;min-width:5%"
            class="ma-0 pa-0"
          >
            <v-img
              max-height="40"
              max-width="20"
              align="center"
              src="https://media.api-sports.io/football/leagues/528.png"
            ></v-img>
          </v-col>

          <v-col
            style="max-width:95%;min-width:95%"
            class="ma-0 pa-0"
          >
            <v-list-item
                style="background-image: linear-gradient(45deg, #546E7A 0%, #455A64)"
                class="ma-0 pa-0"
              >


              <v-row
                dense
                align="center"
                class="ma-0 pa-0 font-weight-medium"

              >

                <v-col
                  style="max-width:35%;min-width:35%"
                  class="text-right"
                >
                  {{ fixture.homeTeam }}
                </v-col>
                <v-col
                  style="max-width:5%;min-width:5%"
                  class="text-center"
                >
                  {{ fixture.goalsHomeTeam }}
                </v-col>
                <v-col
                  style="max-width:2%;min-width:2%"
                  class="text-center"
                >
                  -
                </v-col>
                <v-col
                  style="max-width:5%;min-width:5%"
                  class="text-center"
                >
                  {{ fixture.goalsAwayTeam }}
                </v-col>
                <v-col style="max-width:35%;min-width:35%">
                  {{ fixture.awayTeam }}
                </v-col>
              </v-row>
              <v-col
                style="max-width:13%;min-width:13%;background-color:red;height:100%"
                class="text-right ma-0 pa-0"
              >
                time
              </v-col>
            </v-list-item>
            <v-divider
              class="ma-0 pa-0"
              color="#263238"
            ></v-divider>
          </v-col>
        </v-row>
        </v-list-item-group>

    </v-list>

  </v-row>
</template>

<script>

</script>

<style lang="sass">
  .whole
    background-image: linear-gradient(45deg, rgba(128,208,199,.95) 0%, rgba(19,84,122,.95))
    border-radius: 5px
    transform: scale(.8)
    transform-origin: left top
    border: 2px solid #263238
  .v-divider
    border: 2px solid
</style>
