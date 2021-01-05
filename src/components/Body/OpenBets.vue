<template>

      <v-row
        class="ma-1 pa-0 whole gradient-border"
        dense
        align="center"
      >
        <v-card
          color="transparent"
          class="ma-0 mb-2 pa-0 font-weight-black"
          style="height:25px"
          flat
        >
            <div
              class="ma-0 ml-1 mx-5 pa-0"
              style="font-size:22px;color:#ECEFF1;transform:scale(.7);transform-origen:left top"
            >
              OPEN BETS
              <v-icon
                color="#ECEFF1"
                class="ml-3 mb-1"
              >mdi-lock-open-variant</v-icon>
            </div>
        </v-card>


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



  .gradient-border
    --borderWidth:3px
    background: #455A64
    position: relative
    border-radius: var(--borderWidth)

    &:after
      content: ''
      position: absolute
      top: calc(-1 * var(--borderWidth))
      left: calc(-1 * var(--borderWidth))
      height: calc(100% + var(--borderWidth) * 2)
      width: calc(100% + var(--borderWidth) * 2)
      background: linear-gradient(60deg, rgba(39,205,122,.3) 20%, rgba(39,205,122,.7), rgba(39,205,122,.3) 80%)
      border-radius: 4px
      z-index: -1
      animation: animatedgradient 4s ease  infinite
      background-size: 1000% 1000%

  @keyframes animatedgradient
    0%
      background-position: 5% 50%
    100%
      background-position: 95% 50%
</style>
