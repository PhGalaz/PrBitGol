<template>
  <v-row
    class="ma-0 pa-0 whole"
    :class="{ 'mt-8': !$store.state.showNavbar }"
    dense
  >
    <v-list
      dense
      color="#37474F"
      style="width:100vw;max-height:170px;border:2px solid white;border-radius: 5px"
      class="overflow-y-auto overflow-x-hidden ma-0 pa-0"
      flat
    >

      <v-list-item-group
        active-class='white--text'
        class="pa-0 ma-0"
        style="font-size:16px;color:white"
      >
        <v-row
          id="fixtureinplay"
          v-for="fixture in $store.state.nowPlaying"
          :key="fixture.fixture_id"
          class="ma-0 pa-0"
          align="center"
        >

          <v-col
            style="max-width:5%;min-width:5%"
            class="ma-0 pa-0 d-flex justify-center"
          >
            <v-img
              max-height="40"
              max-width="20"
              src="https://media.api-sports.io/football/leagues/528.png"
            ></v-img>
          </v-col>

          <v-col
            style="max-width:80%;min-width:80%"
            class="ma-0 pa-0"
          >
            <v-list-item
                class="ma-0 pa-0"
              >


              <v-row
                dense
                align="center"
                class="ma-0 pa-0 font-weight-medium"
                style="color:white"
              >

                <v-col
                  style="max-width:44%;min-width:44%"
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
                <v-col style="max-width:44%;min-width:44%">
                  {{ fixture.awayTeam }}
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider
              class="ma-0 pa-0"
              dark
            ></v-divider>
          </v-col>
          <v-col
            style="max-width:15%;min-width:15%"
            class="text-center ma-0 pa-0"
          >
            time
          </v-col>
        </v-row>
        </v-list-item-group>

    </v-list>

  </v-row>
</template>

<script>

</script>

<style lang="sass">
  ::-webkit-scrollbar
    background: transparent
    border-radius: 12px
    width: 13px
  ::-webkit-scrollbar-thumb
    background-color: rgb(255,255,255,.2)
    border-radius: 20px

  .whole
    background-color: transparent
    transform: scale(.7)
    transform-origin: left top
  #fixtureinplay:hover
    background-color: rgba(255,255,255,0.1)

</style>
