<template>

      <v-row
        class="ma-0 pa-0 whole gradient-border1"
        dense
        align="center"
      >
        <v-card
          color="transparent"
          class="mb-2 pa-0 font-weight-black"
          style="height: 20px"
          flat
        >
            <div
              class="ma-0 ml-1 mx-5 pa-0"
              style="font-size:22px;color:#ECEFF1;transform:scale(.7);transform-origen:left top"
            >
              LOCKED BETS
              <v-icon
                color="#ECEFF1"
                class="ml-3 mb-1"
              >mdi-lock</v-icon>
            </div>
        </v-card>

        <v-row
          class="ma-0 mt-1 pa-0 overflow-y-auto overflow-x-hidden"
          style="width:100%;height:125px;background-color:#455A64;border-radius:3px"
        >
          <v-list
            v-for="fixture in $store.state.nowPlaying"
            :key="fixture.fixture_id"
            class="ma-1 pa-0"
            color="#37474F"
            style="width:100%;border-radius:0"
            dense
            flat
          >
            <v-list-item-group
              class="ma-0 pa-0"
              dense
            >
              <v-list-item
                class="ma-0 pa-0 fixtureinplay"
                align="center"

                dense
              >
                <v-row
                  class="ma-0 pa-0 fixtureinplay"
                  align="center"
                  dense
                >
                  <v-col
                    style="width:6%;max-width:6%"
                    class="ma-0 pa-0 d-flex justify-center"
                  >
                  <v-img
                    max-height="40"
                    max-width="20"
                    src="https://media.api-sports.io/football/leagues/528.png"
                  ></v-img>
                  </v-col>
                  <v-divider
                    class="ma-0 pa-0"
                    color="#455A64"
                    vertical
                  ></v-divider>
                  <v-col
                    style="width:42%;max-width:42%;color:#B0BEC5"
                    class="ma-0 pa-0 pr-5 text-right font-weigt-medium"
                  >
                    {{ fixture.homeTeam }}
                  </v-col>
                  <v-divider
                    class="ma-0 mr-3 pa-0"
                    color="#455A64"
                    vertical
                  ></v-divider>
                  <v-col
                    style="width:2%;max-width:2%; font-size:20px;color:#CFD8DC"
                    class="ma-0 pa-0 text-center font-weight-black"
                  >
                    {{ fixture.goalsHomeTeam }}
                  </v-col>
                  <v-col
                    style="width:2%;max-width:2%"
                    class="ma-1 pa-0 text-center font-weight-black text-white"
                  >
                    -
                  </v-col>
                  <v-col
                    style="width:2%;max-width:2%; font-size:20px;color:#CFD8DC"
                    class="ma-0 pa-0 text-center font-weight-black"
                  >
                    {{ fixture.goalsAwayTeam }}
                  </v-col>
                  <v-divider
                    class="ma-0 ml-3 pa-0"
                    color="#455A64"
                    vertical
                  ></v-divider>
                  <v-col
                    style="width:42%;max-width:42%;color:#B0BEC5"
                    class="ma-0 ml-5 pa-0 text-left font-weigt-medium"
                  >
                    {{ fixture.awayTeam }}
                  </v-col>
                  <v-col
                    style="width:9%;max-width:9%;color:#CFD8DC"

                  >
                    {{ fixture.elapsed }}'
                  </v-col>
                </v-row>

              </v-list-item>
              <v-divider
                class="ma-0 pa-0"
                color="#546E7A"
              ></v-divider>
            </v-list-item-group>

          </v-list>
        </v-row>
      </v-row>


</template>









<script>

</script>









<style lang="sass" scoped>
  ::-webkit-scrollbar
    border-radius: 0 3px 3px 0
    background: #37474F
    width: 8px
  ::-webkit-scrollbar-thumb
    background-color: #CFD8DC
    border-radius: 3px

  .whole
    background-color: #455A64
    transform: scale(1)
    transform-origin: left top

  .v-list--dense
    :hover
      background: #455A64



  .gradient-border1
    --borderWidth:2px
    background: #455A64
    position: relative
    border-radius: 2px

    &:after
      content: ''
      position: absolute
      top: calc(-1 * var(--borderWidth))
      left: calc(-1 * var(--borderWidth))
      height: calc(100% + var(--borderWidth) * 2)
      width: calc(100% + var(--borderWidth) * 2)
      background: linear-gradient(60deg, rgb(39,205,122), rgb(39,205,122))
      border-radius: 2px
      z-index: -1
      animation: animatedgradient 4s ease  infinite
      background-size: 1000% 1000%

  @keyframes animatedgradient
    0%
      background-position: 5% 50%
    100%
      background-position: 95% 50%
</style>
