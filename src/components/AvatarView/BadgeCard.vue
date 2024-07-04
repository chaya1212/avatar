<template>
  <div class="table_card" :style="areaColor">
    <img src="@/assets/images/badges/img_eyes.svg" class="img_eyes">
    <div class="member_name" :style="fontSize">
      {{ name }}
    </div>
    <div class="avatar avatarBox">
      <NiceAvatar class="avatar avatarDom"/>
    </div>
  </div>
</template>

<script setup>
import {computed, defineProps, ref} from "vue";
import NiceAvatar from "@/components/NiceAvatar/NiceAvatar";

const props = defineProps({
  name: String,
  areaColor: Object
});

// eslint-disable-next-line vue/return-in-computed-property
const fontSize = computed(() => {
  const size = ref()

  if (! props.name || props.name.length < 9) {
    size.value = "5.5";
  } else if(props.name.length < 12) {
    size.value = "4.5";
  } else {
    size.value = "4"
  }

  return {
    fontSize: `${size.value}rem`
  }
})
</script>
<style scoped>
.table_card {
  position: relative; /* 新增這行：設定相對定位 */
  width: 23cm; /* 設定寬度為 23 公分 */
  height: 6cm; /* 設定高度為 5 公分 */
  border-radius: 7rem; /* 設定邊框圓角 */
  border-style: hidden; /* 設定邊框樣式為虛線 */
  display: flex;
  overflow: hidden;
}
.avatarBox {
  width: 11rem;
  height: 11rem;
  margin-right: 1.5rem;
}
.avatarDom {
  width: 10.5rem;
  height: 10.5rem;
  margin-right: 4px;
}
.avatar { /* 新增這個區塊 */
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: white;
  background-position: center; /* 新增這行：設定背景圖片位置為中心 */
  display: flex; /* 新增這行：設定為彈性盒子 */
  justify-content: center; /* 新增這行：水平置中 */
  align-items: center; /* 新增這行：垂直置中 */
}

.member_name {
  height: 100%;
  width: 100%;
  font-weight: 900;
  display: flex; /* 新增這行：設定為彈性盒子 */
  justify-content: center; /* 新增這行：水平置中 */
  align-items: center; /* 新增這行：垂直置中 */
  color: white;
  position: relative;
  left: -5%;
}

.img_eyes {
  padding: 27px;
  height: 100px;
  position: absolute;
  width: 100px;
  margin-left: 15px;
}
</style>
