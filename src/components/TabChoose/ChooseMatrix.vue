<template>
  <div class="matrix_wrap">
    <div class="vertical_item">
  <template v-if="item.ty !== null">

    <button @click="Avatar.setMatrixY(typeName, true)" class="btn_matrix" :class="{matrix_disabled: item.ty === -item.limit}">
<!--      <span class="text-matrix">上</span>-->
      <img class="img_matrix" :src="require(`@/assets/images/btn/matrix_icon/caret-up-fill.svg`)">
    </button>
    <button @click="Avatar.setMatrixY(typeName)" class="btn_matrix" :class="{matrix_disabled: item.ty === item.limit}">
<!--      <span class="text-matrix">下</span>-->
      <img class="img_matrix" :src="require(`@/assets/images/btn/matrix_icon/caret-down-fill.svg`)">
    </button>
  </template>
    </div>
    <div class="horizontal_item">
  <template v-if="item.tx !== null">
    <button @click="Avatar.setMatrixX(typeName, true)" class="btn_matrix" :class="{matrix_disabled: item.tx === -item.limit}">
<!--      <span class="text-matrix">左</span>-->
      <img class="img_matrix" :src="require(`@/assets/images/btn/matrix_icon/caret-left-fill.svg`)">
    </button>
    <button @click="Avatar.setMatrixX(typeName)" class="btn_matrix" :class="{matrix_disabled: item.tx === item.limit}">
<!--      <span class="text-matrix">右</span>-->
      <img class="img_matrix" :src="require(`@/assets/images/btn/matrix_icon/caret-right-fill.svg`)">
    </button>
  </template>
    </div>
    <div class="line">
      <img :src="require(`@/assets/images/btn/matrix_icon/Iine.png`)">
    </div>
  </div>

</template>

<script setup>
import { defineProps } from "vue";
import Avatar from "@/hook/creatAvatar";

defineProps({
  item: {
    type: Object
  },
  typeName: {
    type: String
  }
})
</script>
