<template>
  <v-row
    class="ma-0 pa-0"
    :class="{ 'mt-8': !$store.state.showNavbar }"
    style="background-image: linear-gradient(45deg, rgba(128,208,199,.95) 0%, rgba(19,84,122,.95));border-radius:5px;transform:scale(.8);transform-origin: left top"
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
        class="pa-0 ma-00"
      >
        <div
          v-for="fixture in $store.state.nowPlaying"
          :key="fixture.fixture_id"
          class="ma-0 pa-0"
        >
          <v-list-item

              class="ma-0 pa-0"
            >


            <v-row
              dense
              align="center"
              class="ma-0 pa-0"



            >
              <v-col
                style="max-width:5%;min-width:5%;background-color:grey"
                class="ma-0 pa-0"
              >
                {{ fixture.league_id }}
              </v-col>
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
              </v-col style="max-width:13%;min-width:13%">
              <v-col>
                time
              </v-col>
            </v-row>

          </v-list-item>
          <v-divider
            class="ma-0 pa-0"
          ></v-divider>
        </div>
        </v-list-item-group>

    </v-list>
  </v-row>
</template>

<script>

</script>

<style lang="sass">

</style>
