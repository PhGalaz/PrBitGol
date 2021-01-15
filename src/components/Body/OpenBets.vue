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
          class="ma-0 mt-2 mx-1 pa-0 overflow-y-auto overflow-x-hidden"
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
              v-for="bet in $store.state.bets"
              :key="bet.bet_id"
            >
              <le
                :bet="bet"
                class="ma-0 mt-2 ml-1 mr-10 pa-0"
              ></le>
            </v-list-item>


































            <v-list-item
              class="ml-8 mt-1 pa-0 rigth"
              style="background:#455A64;border-radius:3px 45px 45px 3px;width:95%"
            >
              <v-spacer></v-spacer>

            </v-list-item>

          </v-list>

        </v-row>
      </v-row>


</template>









<script>

  export default {
    components: {
      'le': require('@/components/OpenBets/le.vue').default
    },
    data: () => ({
      date: null,
    }),
    methods: {
      getDate(timestamp){

        timestamp /= 1000; // from ms to seconds

        function component(x, v) {
            return Math.floor(x / v);
        }

        var $div = $('div');

        setInterval(function() {

            timestamp--;

            var days    = component(timestamp, 24 * 60 * 60),
                hours   = component(timestamp,      60 * 60) % 24,
                minutes = component(timestamp,           60) % 60,
                seconds = component(timestamp,            1) % 60;

            $div.html(days + " days, " + hours + ":" + minutes + ":" + seconds);

        }, 1000);
      },
    }
  }
</script>


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

  .arrow-right
    width: 0
    height: 0
    border-top: 24px solid transparent
    border-bottom: 24px solid transparent

    border-left: 24px solid green




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
      background: linear-gradient(60deg, #37474F, #37474F)
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
