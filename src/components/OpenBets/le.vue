<template>
  <v-list-item
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="border:3px solid rgb(39,205,122);background-color:#455A64;max-width:297px;min-width:297px;border-radius:45px"
    >
    <v-avatar
      class="ma-0 pa-0"
      size="50"
      style="border:0px solid #CFD8DC"
    >
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>


      <v-row
        class="ma-0 pa-0"
        style="border:0px solid #78909C;background-color:#455A64;border-radius:45px;max-width:230px;min-width:230px"
      >
        <v-row
          class="ma-0 pa-0"
          style="background-color:#455A64;border-radius:45px;max-width:230px;min-width:230px"
          align="center"
        >
          <v-spacer></v-spacer>

          <v-row
            class="ma-0 pr-1 pa-0 font-weight-bold text-right"
            style="color:#CFD8DC;font-size:14px;max-width:120px;min-width:120px"
            align="center"
          >
            {{ bet.fixture[0].homeTeam[0].team_name}}
          </v-row>
          <v-spacer></v-spacer>



            <v-img
              class="ma-0 pa-0"
              max-height="35"
              max-width="35"
              :src="bet.fixture[0].homeTeam[0].logo"
            ></v-img>

          <v-icon
            class="ml-2"
            color= "#CFD8DC"
          >
            mdi-alpha-t-circle
          </v-icon>
        </v-row>


      </v-row>


    </v-row>

<v-row
  class="ma-0 pa-0"
>
  <v-row
    class="ma-0 pa-0 font-weight-bold"
    style="width:100%"
    align="center"
  >
    <v-row
      class="ma-0 pa-0"
      width="20px"
      justify="center"
    >
      <v-img
        max-height="15"
        max-width="15"
        src="bch_b_small.png"
        class="ma-0 mt-1 pa-0"
      ></v-img>
      <p
        style="color:#CFD8DC;font-size:13px;font-family:Orbitron;letter-spacing:1px"
        class="ma-0 pa-0 ml-1"
      >{{ ava_amount }}</p>

      <p
        style="color:#78909C;font-size:13px;font-family:Orbitron;letter-spacing:1px"
        class="ma-0 ml-2 pa-0 font-weight-medium"
      >${{ ava_usd_amount }}</p>
    </v-row>
  </v-row>

    <v-progress-linear
      background-color="#CFD8DC"
      color="rgb(39,205,122)"
      :value="this.percent"
    ></v-progress-linear>

    <v-row
      class="ma-0 pa-0 font-weight-bold"
      style="width:100%"
      align="center"

    >
      <v-row
        class="ma-0 pa-0"
        align="center"
      >
        <p
          style="color:#CFD8DC;font-size:8px;font-family:Orbitron;letter-spacing:1px"
          class="ma-0 mt-1 ml-8 pa-0 font-weight-bold"
        >KICK OFF IN 1 day 13 hours 20 min</p>
      </v-row>
    </v-row>
</v-row>




              <v-row
                class="ma-0 pa-0"
                style="border:1px solid #CFD8DC;background-color:#CFD8DC;border-radius:45px;max-width:329px;min-width:329px"
              >
                <v-row
                  class="ma-0 pa-0"
                  style="border-radius:45px"
                >
                  <v-row
                    class="ma-0 pa-0"
                    style="background-color:#CFD8DC;border-radius:45px"
                  >
                    <v-spacer></v-spacer>


                    <v-row
                      class="ma-0 pa-0"
                      style="border:3px solid #455A64;background-color:#455A64;border-radius:45px;max-width:270px;min-width:270px"
                      align="center"
                    >

                        <v-img
                          class="ma-0 ml-3 pa-0"
                          max-height="35"
                          max-width="30"
                          :src="bet.fixture[0].awayTeam[0].logo"
                        ></v-img>

                      <v-row
                        class="ma-0 pl-6 pa-0 font-weight-bold text-left"
                        style="color:#CFD8DC;font-size:17px;max-width:140px;min-width:140px"
                        align="center"
                      >
                        {{ bet.fixture[0].awayTeam[0].team_name}}
                      </v-row>
                    </v-row>

                  </v-row>


                </v-row>







                  <v-row
                    class="ma-1 pa-0"
                    style="background-color:#455A64;border-radius:45px;max-width:48px;min-width:48px"
                    justify="center"
                  >
                    <v-avatar
                      class="ma-0 pa-0"
                      size="48"
                      style="transform:scale(.85);transform-origin:center"
                    >

                        <v-icon
                          color="#CFD8DC"
                          class="ma-0 pa-0"
                          medium
                        >mdi-lock-open-variant</v-icon>

                    </v-avatar>


                  </v-row>

              </v-row>
          </v-list-item>


</template>

<script>
export default {
  props:["bet"],
  data:{

  },
  computed: {
      // a computed getter
      ava_amount: function () {
        var amount = this.bet.init_amount - this.bet.taken_amount;
        return amount / 100000000
      },
      ava_usd_amount: function () {
        var amount = this.ava_amount * 529;
        return amount.toFixed(2);
      },
      percent: function () {
        var amount = this.bet.taken_amount * 100 / this.bet.init_amount;
        return 100 - amount.toFixed(0);
      },
      inv_percent: function () {
        var amount = this.bet.taken_amount * 100 / this.bet.init_amount;
        return amount.toFixed(0);
      },
      countdown: function () {
        var amount = this.ava_amount * 529;
        return amount.toFixed(2);
      }
    },
    mounted () {

    },
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap')

</style>
