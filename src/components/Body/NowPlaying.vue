<template>
  <v-row
    class="ma-0 pa-0 whole gradient-border"
    :class="{ 'mt-8': !$store.state.showNavbar }"
    dense
  >
    <v-card
      color="transparent"
      style="border:2px solid transparent;width:100%"
      class="mt-1 pa-0 font-weight-black"
      flat
    >
      <v-row
        class="ma-0 mr-0 pa-0"

      >

        <p
          class="ma-0 ml-5 mx-5 pa-0"
          style="font-size:20px;color:white"
        >IN PLAY NOW</p>
        <v-icon
          color="rgb(39,205,122)"
        >mdi-wifi</v-icon>
      </v-row>

    </v-card>
    <v-row
      class="ma-0 pa-0"
      style="width:100%"
    >
      <v-list
        dense
        color="#37474F"
        style="width:100%;max-height:170px;border-radius:3px"
        class="overflow-y-auto overflow-x-hidden ma-1 pa-0"
        flat
      >

        <v-list-item-group
          active-class='white--text'

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
              style="max-width:5%;min-width:5%;border-radius:3px"
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
                    style="max-width:5%;min-width:5%;font-size:20px"
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
                    style="max-width:5%;min-width:5%;font-size:20px"
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
    background-color: rgba(255,255,255,.4)
    border-radius: 20px

  .whole
    background-color: #455A64
    transform: scale(.7)
    transform-origin: left top
  #fixtureinplay
    background: #37474F
  #fixtureinplay:hover
    background: #455A64

  .gradient-border
    --borderWidth:2px
    background: #455A64
    position: relative
    border-radius: 4px

    &:after
      content: ''
      position: absolute
      top: calc(-1 * var(--borderWidth))
      left: calc(-1 * var(--borderWidth))
      height: calc(100% + var(--borderWidth) * 2)
      width: calc(100% + var(--borderWidth) * 2)
      background: linear-gradient(60deg, transparent, transparent, rgba(29,94,132), transparent, rgba(39,205,122,.7), transparent, rgba(29,94,132), transparent)
      border-radius: 4px
      z-index: -1
      animation: animatedgradient 10s ease alternate infinite
      background-size: 300% 300%

  @keyframes animatedgradient
    0%
      background-position: 0% 50%

    50%
      background-position: 100% 50%

    100%
      background-position: 0% 50%


</style>
