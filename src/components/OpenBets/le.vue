<template>
  <v-list-item
    class="ma-0 pa-0"
  >
    <v-row
      class="ma-0 pa-0"
      style="border:3px solid #78909C;background-color:#455A64;max-width:297px;min-width:297px;border-radius:45px"
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
                class="ma-0 mt-0 pa-0"
                style="width:100%;height:45px"
                align="center"

              >
                <v-row
                  class="ma-0 pa-0 font-weight-bold"

                  align="center"
                >


                    <v-img
                      max-height="15"
                      max-width="15"
                      src="bch_b_small.png"
                      class="ml-8 mr-1"
                    ></v-img>
                    <p
                      style="color:#CFD8DC"
                      class="ma-0 pa-0"
                    >{{ ava_amount }}</p>

                    <p
                      style="color:#455A64"
                      class="ma-0 pa-0"
                    >/USD ${{ ava_usd_amount }}</p>

                  <v-row
                    class="ma-0 mb-0 mr-8 pa-0 font-weight-medium"
                    style="height:20px;color:#CFD8DC;font-size:10px"
                    justify="center"
                
                  >
                    <v-spacer></v-spacer>

                    <p
                      style="color:#CFD8DC"
                    >0.0032 TAKEN</p>

                  </v-row>
                </v-row>




                <v-row
                  class="ma-0 mb-1 pa-0"
                  style="max-height:15px"
                >
                  <v-row
                    class="ma-0 mt-0 pa-0 mx-8"
                    style="border-radius:45px;background-color:rgb(39,205,122);max-height:4px;font-size:10px;color:transparent"
                  >
                    WORLD'S FIRST SOCCER BET MARKET
                  </v-row>
                  <v-row
                    class="ma-0 pa-0 mx-8 font-weight-medium"
                    style="background-color:transparent;width:100%;font-size:10px"
                    justify="center"
                  >

                    <p
                      style="color:#CFD8DC"
                    >0.0032 TAKEN</p>
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
        // `this` points to the vm instance
        return this.bet.init_amount / 100000000
      },
      ava_usd_amount: function () {
        var amount = this.ava_amount * 529;
        return amount.toFixed(2);
      },
    },
  }
</script>

<style lang="sass">

</style>
