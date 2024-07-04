<template>
  <g class="svg_genderBgColor">
    <template v-if="item === GENDER_BGCOLORS.btn_genderBoy">
      <rect fill="#F48150" height="300" width="300"/>
    </template>

    <template v-if="item === GENDER_BGCOLORS.btn_genderGirl">
      <rect fill="#6BD9E9" height="300" width="300"/>
    </template>

    <template v-if="item === GENDER_BGCOLORS.btn_genderThird">
      <defs>
        <linearGradient id="red-blue" y2="1">
          <stop offset="0" stop-color="#C3CFFF" stop-opacity="0.9"/>
          <stop offset="1" stop-color="#F5CEFF" stop-opacity="0.9"/>
        </linearGradient>

        <linearGradient id="yellow-violet" y1="1" y2="0">
          <stop offset="0.2"
                stop-color="#D0FFD4" stop-opacity="0.6"/>
          <stop offset="0.6"
                stop-color="#C9FDFF" stop-opacity="0"/>
          <stop offset="0.9"
                stop-color="#C9FDFF" stop-opacity="0.5"/>
        </linearGradient>

        <radialGradient id="flare" fx="0.2" fy="0.2"
                        stop-color="white">
          <stop offset="0.75"
                stop-color="inherit" stop-opacity="0"/>
          <stop offset="0.85"
                stop-color="inherit" stop-opacity="0.05"/>
          <stop offset="1"
                stop-color="inherit" stop-opacity="0.2"/>
        </radialGradient>

        <pattern id="gradient-pattern" height="1" patternContentUnits="objectBoundingBox"
                 width="1">
          <rect fill="url(#red-blue)" height="1" width="1"/>
          <rect fill="url(#yellow-violet)" height="1" width="1"/>
          <rect fill="url(#flare)" height="1" width="1"/>
        </pattern>

      </defs>

      <g fill="url(#gradient-pattern)">
        <rect height="300" width="300"/>
      </g>


    </template>


  </g>

</template>

<script>
import {GENDER_BGCOLORS} from "./types";

export default {
  name: "GenderBgColor",
  props: {
    item: {
      type: String
    },
  },
  data() {
    return {
      GENDER_BGCOLORS,
    };
  },
};
</script>
