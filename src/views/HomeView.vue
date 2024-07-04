<template>
  <div class="wrapper h-100 w-100">
      <div class="home_container ">
        <div class="top_avatar">
          <img class="avatar_img avatar_LT banner_avatar" src="../assets/images/home/avatar_chaya.png">
          <img class="avatar_img avatar_RT banner_avatar" src="../assets/images/home/avatar_molly.png">
        </div>
        <div class="inner_item d-flex flex-column align-items-center">
          <img class="site_title" src="../assets/images/home/avatar_logo.svg">
          <router-link :to="{name: 'CreatAvatar'}" @click="Avatar.setAvatar()" class="">
            <div class="d-flex btn_primary btn">
              <img class="icon_pen" src="../assets/images/home/icon_pen.svg">
              <img class="text" src="../assets/images/home/btn_start.svg">
            </div>
          </router-link>
        </div>
        <div class="bottom_avatar">
          <img class="avatar_img avatar_LB banner_avatar" src="../assets/images/home/avatar_rober.png">
          <img class="avatar_img avatar_RB banner_avatar" src="../assets/images/home/avatar_tia.png">
        </div>
      </div>
    </div>
</template>

<script setup>
import Avatar from "@/hook/creatAvatar";
</script>
