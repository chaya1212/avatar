<template>
  <div id="create_badge" aria-hidden="true" aria-labelledby="modal_create_badge" class="modal modal_card modal_wrap modal_createBadge"
       tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header  py-2">
          <img class="header_pigment" src="@/assets/images/home/img_pigment1.svg">
          <h5 class="modal-title ">製作立牌</h5>
        </div>
        <div class="modal-body mx-5 text-start">
          <div>
            <label for="memberName">輸入你的名稱</label>
            <input type="email"
                   class="form-control"
                   id="memberName"
                   aria-describedby="memberName"
                   placeholder="EX:CHAYA"
                   @input="event => input.name = event.target.value.toUpperCase()"
                   v-model="input.name">
          </div>
          <div class="mt-3">
            <label>性別</label>
            <div class="d-flex ">
              <label v-for="(gender, value) in genderStyle" :key="value" class="choose_item">
                <input
                    :value="value"
                    v-model="input.gender"
                    class="chooseItem_radioBtn"
                    type="radio"
                />
                <div>
                <img class="icon_lg" :src="gender.radio" :alt="value">
                </div>
              </label>

<!--              <div v-for="(gender, value) in genderStyle" :key="value" class="d-flex align-items-center pe-3">-->
<!--                <input type="radio" class="chooseItem_radioBtn" :value="value" v-model="input.gender">-->
<!--                <img class="icon_lg" :src="gender.radio" :alt="value">-->
<!--              </div>-->
            </div>
          </div>
        </div>
        <p class="modal_tips">*轉交給UI協助印刷</p>
        <div class="modal-footer mb-3 justify-content-center">
          <router-link :to="{name: 'AvatarView'}" class="">
            <img class="btn" data-bs-dismiss="modal" src="@/assets/images/btn/btn_back.svg"></router-link>

          <div>
          <div @click="AvatarToPng(createBadge)" class="btn_primary btn mx-0">
            <img class="" src="@/assets/images/btn/btn_remit.svg">
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="badge_view" >
    <badge-view ref="createBadge" :input="input"  :tableCard="tableCard" class="badge_item"></badge-view>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {toPng} from 'html-to-image';
import BadgeView from "@/components/AvatarView/BadgeView";
import {jsPDF} from 'jspdf';

const input = ref({
  name: null,
  gender: "genderBoy",
});
const genderStyle = {
  "genderBoy": {
    "radio": require("@/assets/images/btn/icon_genderBoy.svg"),
    "tableCard": {
      backgroundImage: "linear-gradient(138deg, #00a0dd, #66d7d0 105%)"
    }
  },
  "genderGirl": {
    "radio": require("@/assets/images/btn/icon_genderGirl.svg"),
    "tableCard": {
      backgroundImage: "linear-gradient(138deg, #E94437, #F29740 105%)"
    }
  }
}
const tableCard = computed(() => genderStyle[input.value.gender].tableCard)
const AvatarToPng = (dom) => {
  if (!input.value.name) {
    alert('請輸入名稱');
    return;
  }
  const pdf = new jsPDF('landscape', 'mm', 'a4');
  pdf.internal.scaleFactor = 2;
  toPng(dom.$el, {pixelRatio: 5})
      .then(function (dataUrl) {
        pdf.addImage(dataUrl, 'PNG', 0, -10, 297, 210);
        pdf.save(`${input.value.name}.pdf`);
      })
}
const createBadge = ref();
</script>
