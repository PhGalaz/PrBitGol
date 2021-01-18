<template>

      <v-row
        class="ma-0 pa-0 whole gradient-border1"
        dense
        align="center"
      >
        <v-card
          color="transparent"
          class="mt-6 pa-0 font-weight-black"
          style="height: 20px"
          flat
        >
            <div
              class="ma-0 ml-1 mx-5 pa-0"
              style="font-size:22px;color:rgb(39,205,122);transform:scale(.7);transform-origen:left top"
            >
              OPEN BETS
              <v-icon
                color="rgb(39,205,122)"
                class="ml-3 mb-1"
              >mdi-lock-open-variant</v-icon>
            </div>
        </v-card>

        <v-row
          class="ma-0 mt-4 pa-0 overflow-y-auto overflow-x-hidden"
          style="width:100%;max-height:385px;background-color:transparent;border-radius:3px"
        >

          <v-list
            class="ma-0 mt-2 mb-6 pa-0"
            width="100%"
            color="transparent"
            align="center"
            two-lines
            dense
          >

              <v-list-item
                id="item"
                class="ma-0 pa-0"
                v-for="bet in $store.state.bets"
                :key="bet.bet_id"
                style="border-radius:45px;width:95%"
              >

                <v-row
                  v-if="bet.status == 'open' && (bet.type.charAt(0)=='l')"
                  id="capa1"
                  class="ma-0 mt-1 mr-5 mb-1 pa-0 gradient-border0"
                  style="border-radius:45px"
                >
                  <levsv
                    v-if="bet.type == 'levsv'"
                    id="capa2"
                    :bet="bet"
                    class="ma-0 pa-0"
                    style="border-radius:45px;border:0px solid #455A64"
                  ></levsv>
                  <lvsev
                    v-if="bet.type == 'lvsev'"
                    id="capa2"
                    :bet="bet"
                    class="ma-0 pa-0"
                    style="border-radius:45px;border:0px solid #455A64"
                  ></lvsev>
                </v-row>
                <v-row
                  v-else-if="bet.status == 'open' && (bet.type.charAt(0)=='v')"
                  id="capa1"
                  class="ma-0 mt-1 ml-5 mb-1 pa-0 gradient-border0"
                  style="border-radius:45px"
                >
                  <vevsl
                    v-if="bet.type == 'vevsl'"
                    id="capa2"
                    :bet="bet"
                    class="ma-0 pa-0"
                    style="border-radius:45px;border:0px solid #455A64"
                  ></vevsl>
                  <vvsel
                    v-if="bet.type == 'vvsel'"
                    id="capa2"
                    :bet="bet"
                    class="ma-0 pa-0"
                    style="border-radius:45px;border:0px solid #455A64"
                  ></vvsel>
                </v-row>

              </v-list-item>



          </v-list>

        </v-row>
      </v-row>


</template>









<script>

  export default {
    components: {
      'levsv': require('@/components/OpenBets/levsv.vue').default,
      'lvsev': require('@/components/OpenBets/lvsev.vue').default,
      'vevsl': require('@/components/OpenBets/vevsl.vue').default,
      'vvsel': require('@/components/OpenBets/vvsel.vue').default
    }
  }
</script>









<style lang="sass">
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

  .arrow-right
    width: 0
    height: 0
    border-top: 24px solid transparent
    border-bottom: 24px solid transparent

    border-left: 24px solid green



  #item #capa2
    background: linear-gradient(transparent 5%, rgba(69, 90, 100,1) 5%, rgba(69, 90, 100,1) 95%, transparent 95%)


  #item:hover #capa1

    --borderWidth:1px
    background: rgba(39,205,122,.4)
    position: relative
    border-radius: 45px

    &:after
      content: ''
      position: absolute
      top: calc(-1 * var(--borderWidth))
      left: calc(-1 * var(--borderWidth))
      height: calc(100% + var(--borderWidth) * 2)
      width: calc(100% + var(--borderWidth) * 2)
      background: linear-gradient(60deg, transparent 20%, rgba(39,205,122,.4), transparent 80%)
      border-radius: 45px
      z-index: -1
      animation: animatedgradient0 1s ease  infinite
      background-size: 1000% 1000%


  #item:hover #capa2
    background: linear-gradient(transparent 5%, rgba(69, 90, 100,0.4) 5%, rgba(69, 90, 100,0.4) 95%, transparent 95%)

  #item #capa3
    background-color: #455A64
  #item:hover #capa3
    background-color: rgba(39,205,122,.4)



  #item #capa4
    background-color: #455A64
  #item:hover #capa4
    background-color: transparent

  #item #capa5
    background-color: #455A64
    border: 0px solid #455A64
  #item:hover #capa5
    background-color: rgb(52,125,96)
    border: 0px solid rgb(52,125,96)


  #item #capa6
    background-color: #CFD8DC
    border: 1px solid #CFD8DC



  .gradient-border1
    --borderWidth:2px
    background: rgba(39,205,122,.4)
    position: relative
    border-radius: 2px

    &:after
      content: ''
      position: absolute
      top: calc(-1 * var(--borderWidth))
      left: calc(-1 * var(--borderWidth))
      height: calc(100% + var(--borderWidth) * 2)
      width: calc(100% + var(--borderWidth) * 2)
      background: linear-gradient(60deg, #37474F, #37474F)
      border-radius: 2px
      z-index: -2
      animation: animatedgradient 4s ease  infinite
      background-size: 1000% 1000%

  @keyframes animatedgradient
    0%
      background-position: 5% 50%
    100%
      background-position: 95% 50%


  @keyframes animatedgradient0
    0%
      background-position: 95% 50%
    100%
      background-position: 5% 50%

</style>
