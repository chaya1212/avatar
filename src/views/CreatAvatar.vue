<template>
  <header class="wrap_header">
    <img class="header_logo" src="../assets/images/home/avatar_logo.svg">
  </header>
  <section class="avatar_creat creat_container">
    <div class="wrap_easel">
     <div class="value_item">
       <button class="btn_random btn" ref="random" oncontextmenu="return false">
         <img class="icon_dice" src="../assets/images/btn/icon_dice.svg">
       </button>
      <div class="avatar_round"
           :style="`width:${Avatar.size}px; height:${Avatar.size}px;`"
      >
        <NiceAvatar ref="niceAvatar"/>
      </div>
    </div>
      <div class="bg_easel">
        <img class="bg_img" src="../assets/images/view/easel.svg">
      </div>
    </div>
    <div class="wrap_choose">
      <div class="container choose_container">
        <div class="wrap_btn d-flex justify-content-between align-items-end py-2">
          <router-link :to="{name: 'home'}" class="">
            <img class="btn" src="../assets/images/btn/btn_back.svg"></router-link>

          <router-link :to="{name: 'AvatarView'}" class="" @click="Avatar.setFinish()">
            <img class="btn" src="../assets/images/btn/btn_finish.svg"></router-link>
        </div>
        <TabChoose></TabChoose>
      </div>
    </div>
  </section>
</template>

<script setup>
import NiceAvatar from "../components/NiceAvatar/NiceAvatar";
import Avatar from "@/hook/creatAvatar";
import TabChoose from "@/components/TabChoose/TabChoose";
import {nextTick, onMounted, ref} from "vue";

//到頁面後亂數取值
const random = ref();
onMounted(() => Avatar.getFinish());
nextTick(() => {
  Avatar.setRandomElement(random.value);
})

</script>
