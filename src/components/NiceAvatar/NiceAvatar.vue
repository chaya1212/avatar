<template>
  <svg
      class="avatar_svg"
      fill="none"
      height="350"
      viewBox="0 0 300 300"
      width="300"
      xmlns="http://www.w3.org/2000/svg"
  >
    <mask
        id="mask0"
        height="300"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        width="300"
        x="0"
        y="0"
    >
      <rect fill="#FFEDEF"
            height="300" width="300"/>
    </mask>
    <g class="avatar_bg" mask="url(#mask0)">
      <GenderBgColor :item="Avatar.tabChoose.GenderBgColor.item"/>
    </g>
    <g mask="url(#mask0)">
      <g class="avatar_content" >
        <template v-for="(avatar, index) in Avatar.components" :key="index">
          <component :is="avatar"
                     :item="Avatar.tabChoose[index].item"
                     :color="Avatar.tabChoose[index].nowColor"
                     :matrix="Avatar.tabChoose[index].matrix"
           />
        </template>
      </g>
    </g>
    <g class="avatar_frame" mask="url(#mask0)">
      <PartsFrame :item="Avatar.tabChoose.PartsFrame.item"/>
    </g>
  </svg>
</template>
<script setup>
import GenderBgColor from "@/components/NiceAvatar/GenderBgColor";
import PartsFrame from "@/components/NiceAvatar/PartsFrame";
import Avatar from "@/hook/creatAvatar";
</script>
