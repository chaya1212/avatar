<template>
  <header class="wrap_header">
    <img class="header_logo" src="../assets/images/home/avatar_logo.svg">
  </header>
  <div class="wrapper h-75 w-100 wrap_view">
    <section class="avatar_value ">
      <div class="value_item">
        <NiceAvatar ref="avatarDom"/>
      </div>
      <img class="view_border" src="../assets/images/home/view_border.png">
    </section>

    <div class="wrap_btn d-flex flex-column justify-content-between align-items-center pb-5 pt-3">
      <div class="d-flex ">
        <button class="btn" type="button" @click="Avatar.getPng(avatarDom)">
          <img class="icon_download" src="../assets/images/btn/img_download.png">
        </button>
        <button class="btn" type="button" data-bs-target="#create_badge" data-bs-toggle="modal">
          <img class="icon_download" src="../assets/images/btn/tableCard_download.png">
        </button>
      </div>

      <router-link :to="{name: 'CreatAvatar'}" data-bs-target="#modal_reset" data-bs-toggle="modal" class="mt-5">
        <img class="btn btn_reset my-3" src="../assets/images/btn/btn_reset.svg">
      </router-link>
    </div>
    <div id="modal_reset" aria-hidden="true" aria-labelledby="modal_resetLabel" class="modal modal_wrap" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <img class="header_pigment" src="../assets/images/home/img_pigment1.svg">
            <h5 class="modal-title ">通知</h5>
          </div>
          <div class="modal-body mx-5">
            <p class="fs-5">重新製作，目前製作結果將會消失。
              請確定是否重新製作？</p>
          </div>
          <div class="modal-footer mb-3">
            <router-link :to="{name: 'AvatarView'}" class="">
              <img class="btn" data-bs-dismiss="modal" src="../assets/images/btn/btn_back.svg"></router-link>
            <router-link :to="{name: 'CreatAvatar'}">
              <div data-bs-dismiss="modal">
                <img class="btn" src="../assets/images/btn/btn_reset_light.svg">
              </div>
            </router-link>
            <img class="header_pigment" src="../assets/images/home/img_pigment2.svg">
          </div>
        </div>
      </div>
    </div>
    <create-badge-modal />
  </div>
</template>

<script setup>
import NiceAvatar from "../components/NiceAvatar/NiceAvatar";
import CreateBadgeModal from "../components/AvatarView/CreateBadgeModal.vue";
import Avatar from "@/hook/creatAvatar";
import {onMounted, ref} from "vue";

onMounted(() => Avatar.getFinish())
const avatarDom = ref(null);
</script>
