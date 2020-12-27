<template>
  <v-row
    class="todo"
    style="height=0px"
    :class="{ 'Ligas': showligas }"
    no-gutters
  >

    <v-row
      no-gutters
      :class="{ 'd-none': !showligas }"
    >
      <v-col
        v-for="continente in continentes"  :key="continente.continente_id"
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
      :class="{ 'd-none': !showligas }"
    >
      <v-col
        v-for="continente in continentes"  :key="continente.continente_id"
        cols="3"
        class="ma-0"
      >
          <v-list
            dense
            dark
            style="background-color:rgb(255,255,255,0.05);max-height:300px;border-radius:2px"
            class="overflow-y-auto mt-3 xxx"
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
    props: ['showligas'],
    data: () => ({
      selectedItem: null,
      continentes: [
        {
          continente_id: 0,
          name: 'América',
          ligas: [
            {
                league_id: 2719,
                name: '1. Liga Classic - Group 3',
                type: 'Cup',
                country: 'Switzerland',
                country_code: 'CH',
                season: 2020,
                season_start: '2020-08-15',
                season_end: '2021-05-29',
                logo: 'https://media.api-sports.io/football/leagues/601.png',
                flag: 'https://media.api-sports.io/flags/ch.svg',
                standings: 1,
                is_current: 1,
                coverage: {
                  standings: true,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2725,
                name: 'Community Shield',
                type: 'Cup',
                country: 'England',
                country_code: 'GB',
                season: 2020,
                season_start: '2020-08-29',
                season_end: '2020-08-29',
                logo: 'https://media.api-sports.io/football/leagues/528.png',
                flag: 'https://media.api-sports.io/flags/gb.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2731,
                name: 'League Cup',
                type: 'Cup',
                country: 'United-Arab-Emirates',
                country_code: 'AE',
                season: 2020,
                season_start: '2020-10-08',
                season_end: '2021-01-26',
                logo: 'https://media.api-sports.io/football/leagues/302.png',
                flag: 'https://media.api-sports.io/flags/ae.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2739,
                name: 'Cup',
                type: 'Cup',
                country: 'Belgium',
                country_code: 'BE',
                season: 2020,
                season_start: '2020-08-23',
                season_end: '2021-01-10',
                logo: 'https://media.api-sports.io/football/leagues/147.png',
                flag: 'https://media.api-sports.io/flags/be.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2749,
                name: 'KNVB Beker',
                type: 'Cup',
                country: 'Netherlands',
                country_code: 'NL',
                season: 2020,
                season_start: '2020-08-29',
                season_end: '2021-01-19',
                logo: 'https://media.api-sports.io/football/leagues/90.png',
                flag: 'https://media.api-sports.io/flags/nl.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: true
                }
              },
              {
                league_id: 2750,
                name: 'Super Cup',
                type: 'Cup',
                country: 'Portugal',
                country_code: 'PT',
                season: 2020,
                season_start: '2020-12-23',
                season_end: '2020-12-23',
                logo: 'https://media.api-sports.io/football/leagues/550.png',
                flag: 'https://media.api-sports.io/flags/pt.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: true
                }
              },
              {
                league_id: 2751,
                name: 'Super Cup',
                type: 'Cup',
                country: 'Germany',
                country_code: 'DE',
                season: 2020,
                season_start: '2020-09-30',
                season_end: '2020-09-30',
                logo: 'https://media.api-sports.io/football/leagues/529.png',
                flag: 'https://media.api-sports.io/flags/de.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2771,
                name: 'UEFA Champions League',
                type: 'Cup',
                country: 'World',
                country_code: null,
                season: 2020,
                season_start: '2020-08-08',
                season_end: '2021-03-17',
                logo: 'https://media.api-sports.io/football/leagues/2.png',
                flag: null,
                standings: 1,
                is_current: 1,
                coverage: {
                  standings: true,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: true
                }
              },
              {
                league_id: 2772,
                name: 'League Cup',
                type: 'Cup',
                country: 'Scotland',
                country_code: 'GB',
                season: 2020,
                season_start: '2020-10-06',
                season_end: '2021-01-23',
                logo: 'https://media.api-sports.io/football/leagues/185.png',
                flag: 'https://media.api-sports.io/flags/gb.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: true
                }
              },
              {
                league_id: 2773,
                name: 'Super Cup',
                type: 'Cup',
                country: 'Armenia',
                country_code: 'AM',
                season: 2020,
                season_start: '2020-08-09',
                season_end: '2020-08-09',
                logo: 'https://media.api-sports.io/football/leagues/654.png',
                flag: 'https://media.api-sports.io/flags/am.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2775,
                name: 'Super Cup',
                type: 'Cup',
                country: 'Bulgaria',
                country_code: 'BG',
                season: 2020,
                season_start: '2020-08-02',
                season_end: '2020-08-02',
                logo: 'https://media.api-sports.io/football/leagues/656.png',
                flag: 'https://media.api-sports.io/flags/bg.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2777,
                name: 'UEFA Europa League',
                type: 'Cup',
                country: 'World',
                country_code: null,
                season: 2020,
                season_start: '2020-08-18',
                season_end: '2021-02-25',
                logo: 'https://media.api-sports.io/football/leagues/3.png',
                flag: null,
                standings: 1,
                is_current: 1,
                coverage: {
                  standings: true,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: true
                }
              },
              {
                league_id: 2781,
                name: 'League Cup',
                type: 'Cup',
                country: 'England',
                country_code: 'GB',
                season: 2020,
                season_start: '2020-08-29',
                season_end: '2020-12-22',
                logo: 'https://media.api-sports.io/football/leagues/48.png',
                flag: 'https://media.api-sports.io/flags/gb.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: true
                }
              },
              {
                league_id: 2782,
                name: 'Cup',
                type: 'Cup',
                country: 'Latvia',
                country_code: 'LV',
                season: 2020,
                season_start: '2020-07-23',
                season_end: '2020-11-08',
                logo: 'https://media.api-sports.io/football/leagues/658.png',
                flag: 'https://media.api-sports.io/flags/lv.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2783,
                name: 'Super Cup',
                type: 'Cup',
                country: 'Israel',
                country_code: 'IL',
                season: 2020,
                season_start: '2020-08-08',
                season_end: '2020-08-13',
                logo: 'https://media.api-sports.io/football/leagues/659.png',
                flag: 'https://media.api-sports.io/flags/il.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2785,
                name: 'Cup',
                type: 'Cup',
                country: 'Lithuania',
                country_code: 'LT',
                season: 2020,
                season_start: '2020-06-16',
                season_end: '2020-10-24',
                logo: 'https://media.api-sports.io/football/leagues/661.png',
                flag: 'https://media.api-sports.io/flags/lt.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2786,
                name: 'Copa por México',
                type: 'Cup',
                country: 'Mexico',
                country_code: 'MX',
                season: 2020,
                season_start: '2020-07-04',
                season_end: '2020-07-20',
                logo: 'https://media.api-sports.io/football/leagues/662.png',
                flag: 'https://media.api-sports.io/flags/mx.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2787,
                name: 'Super Cup',
                type: 'Cup',
                country: 'Russia',
                country_code: 'RU',
                season: 2020,
                season_start: '2020-08-07',
                season_end: '2020-08-07',
                logo: 'https://media.api-sports.io/football/leagues/663.png',
                flag: 'https://media.api-sports.io/flags/ru.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2791,
                name: 'FA Cup',
                type: 'Cup',
                country: 'England',
                country_code: 'GB',
                season: 2020,
                season_start: '2020-08-31',
                season_end: '2021-01-09',
                logo: 'https://media.api-sports.io/football/leagues/45.png',
                flag: 'https://media.api-sports.io/flags/gb.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: false
                }
              }
          ]
        },
        {
          continente_id: 1,
          name: 'Europa',
          ligas: [
            {
                league_id: 403,
                name: 'Euro Championship',
                type: 'Cup',
                country: 'World',
                country_code: null,
                season: 2020,
                season_start: '2019-03-21',
                season_end: '2020-11-12',
                logo: 'https://media.api-sports.io/football/leagues/4.png',
                flag: null,
                standings: 1,
                is_current: 1,
                coverage: {
                  standings: true,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 1030,
                name: 'African Nations Championship',
                type: 'Cup',
                country: 'World',
                country_code: null,
                season: 2020,
                season_start: '2019-04-20',
                season_end: '2020-04-15',
                logo: 'https://media.api-sports.io/football/leagues/19.png',
                flag: null,
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2840,
                name: 'Cupa',
                type: 'Cup',
                country: 'Moldova',
                country_code: 'MD',
                season: 2020,
                season_start: '2020-08-08',
                season_end: '2020-10-28',
                logo: 'https://media.api-sports.io/football/leagues/674.png',
                flag: 'https://media.api-sports.io/flags/md.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2844,
                name: 'Super Cup',
                type: 'Cup',
                country: 'Ukraine',
                country_code: 'UA',
                season: 2020,
                season_start: '2020-08-25',
                season_end: '2020-08-25',
                logo: 'https://media.api-sports.io/football/leagues/678.png',
                flag: 'https://media.api-sports.io/flags/ua.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2846,
                name: 'Cup',
                type: 'Cup',
                country: 'Slovakia',
                country_code: 'SK',
                season: 2020,
                season_start: '2020-07-25',
                season_end: '2020-10-28',
                logo: 'https://media.api-sports.io/football/leagues/680.png',
                flag: 'https://media.api-sports.io/flags/sk.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2873,
                name: 'FA Cup',
                type: 'Cup',
                country: 'China',
                country_code: 'CN',
                season: 2020,
                season_start: '2020-09-18',
                season_end: '2020-12-19',
                logo: 'https://media.api-sports.io/football/leagues/171.png',
                flag: 'https://media.api-sports.io/flags/cn.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: false,
                  topScorers: false,
                  predictions: true,
                  odds: true
                }
              },
              {
                league_id: 2941,
                name: 'Coppa Italia',
                type: 'Cup',
                country: 'Italy',
                country_code: 'IT',
                season: 2020,
                season_start: '2020-09-22',
                season_end: '2021-01-13',
                logo: 'https://media.api-sports.io/football/leagues/137.png',
                flag: 'https://media.api-sports.io/flags/it.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: false
                }
              },
              {
                league_id: 2947,
                name: 'Magyar Kupa',
                type: 'Cup',
                country: 'Hungary',
                country_code: 'HU',
                season: 2020,
                season_start: '2020-09-18',
                season_end: '2021-02-10',
                logo: 'https://media.api-sports.io/football/leagues/273.png',
                flag: 'https://media.api-sports.io/flags/hu.svg',
                standings: 0,
                is_current: 1,
                coverage: {
                  standings: false,
                  fixtures: [Object],
                  players: true,
                  topScorers: true,
                  predictions: true,
                  odds: false
                }
              }
            ]
        },
        {
          continente_id: 2,
          name: 'África',
          ligas: [
            {
              league_id: 2806,
              name: 'Cup',
              type: 'Cup',
              country: 'Slovenia',
              country_code: 'SI',
              season: 2020,
              season_start: '2020-09-02',
              season_end: '2020-10-22',
              logo: 'https://media.api-sports.io/football/leagues/375.png',
              flag: 'https://media.api-sports.io/flags/si.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2807,
              name: 'Friendlies Women',
              type: 'Cup',
              country: 'World',
              country_code: null,
              season: 2020,
              season_start: '2020-01-14',
              season_end: '2020-12-02',
              logo: 'https://media.api-sports.io/football/leagues/666.png',
              flag: null,
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2808,
              name: 'Friendlies Clubs',
              type: 'Cup',
              country: 'World',
              country_code: null,
              season: 2020,
              season_start: '2020-01-07',
              season_end: '2020-09-26',
              logo: 'https://media.api-sports.io/football/leagues/667.png',
              flag: null,
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2809,
              name: 'UEFA Super Cup',
              type: 'Cup',
              country: 'World',
              country_code: null,
              season: 2020,
              season_start: '2020-09-24',
              season_end: '2020-09-24',
              logo: 'https://media.api-sports.io/football/leagues/531.png',
              flag: null,
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2811,
              name: 'Cup',
              type: 'Cup',
              country: 'Croatia',
              country_code: 'HR',
              season: 2020,
              season_start: '2020-09-08',
              season_end: '2021-03-03',
              logo: 'https://media.api-sports.io/football/leagues/212.png',
              flag: 'https://media.api-sports.io/flags/hr.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2838,
              name: 'David Kipiani Cup',
              type: 'Cup',
              country: 'Georgia',
              country_code: 'GE',
              season: 2020,
              season_start: '2020-08-20',
              season_end: '2020-11-25',
              logo: 'https://media.api-sports.io/football/leagues/672.png',
              flag: 'https://media.api-sports.io/flags/ge.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            }
          ]
        },
        {
          continente_id: 3,
          name: 'Asia',
          ligas: [
            {
              league_id: 2792,
              name: 'EFL Trophy',
              type: 'Cup',
              country: 'England',
              country_code: 'GB',
              season: 2020,
              season_start: '2020-09-01',
              season_end: '2021-01-13',
              logo: 'https://media.api-sports.io/football/leagues/46.png',
              flag: 'https://media.api-sports.io/flags/gb.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2813,
              name: 'Cup',
              type: 'Cup',
              country: 'Bulgaria',
              country_code: 'BG',
              season: 2020,
              season_start: '2020-08-02',
              season_end: '2021-03-02',
              logo: 'https://media.api-sports.io/football/leagues/174.png',
              flag: 'https://media.api-sports.io/flags/bg.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2819,
              name: 'Cupa României',
              type: 'Cup',
              country: 'Romania',
              country_code: 'RO',
              season: 2020,
              season_start: '2020-09-09',
              season_end: '2020-11-28',
              logo: 'https://media.api-sports.io/football/leagues/285.png',
              flag: 'https://media.api-sports.io/flags/ro.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2824,
              name: 'Schweizer Pokal',
              type: 'Cup',
              country: 'Switzerland',
              country_code: 'CH',
              season: 2020,
              season_start: '2020-08-29',
              season_end: '2021-02-10',
              logo: 'https://media.api-sports.io/football/leagues/209.png',
              flag: 'https://media.api-sports.io/flags/ch.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2836,
              name: 'Community Shield Women',
              type: 'Cup',
              country: 'England',
              country_code: 'GB',
              season: 2020,
              season_start: '2020-08-29',
              season_end: '2020-08-29',
              logo: 'https://media.api-sports.io/football/leagues/670.png',
              flag: 'https://media.api-sports.io/flags/gb.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2800,
              name: 'FA Trophy',
              type: 'Cup',
              country: 'England',
              country_code: 'GB',
              season: 2020,
              season_start: '2020-09-26',
              season_end: '2020-12-26',
              logo: 'https://media.api-sports.io/football/leagues/47.png',
              flag: 'https://media.api-sports.io/flags/gb.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2802,
              name: 'Cup',
              type: 'Cup',
              country: 'Ukraine',
              country_code: 'UA',
              season: 2020,
              season_start: '2020-08-26',
              season_end: '2021-03-03',
              logo: 'https://media.api-sports.io/football/leagues/335.png',
              flag: 'https://media.api-sports.io/flags/ua.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2805,
              name: 'DBU Pokalen',
              type: 'Cup',
              country: 'Denmark',
              country_code: 'DK',
              season: 2020,
              season_start: '2020-09-01',
              season_end: '2021-03-10',
              logo: 'https://media.api-sports.io/football/leagues/121.png',
              flag: 'https://media.api-sports.io/flags/dk.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: true
              }
            }
          ]
        }
      ],
      }),
      watch: {
        showligas: function(newVal, oldVal) {

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
    background-color: rgb(255,255,255,.25)
    border-radius: 20px



  .todo
    background-image: linear-gradient(45deg, rgba(19,84,122,.9) 0%, rgba(128,208,199))
    height: 0px
  .Ligas
    background-image: linear-gradient(45deg, rgba(19,84,122,.9) 0%, rgba(128,208,199))
    height: 330px


</style>
