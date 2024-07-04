<template>
  <div style="margin:auto;">
    <div class="blue-area blue-area-paste" :style="tableCard">
      黏貼處
    </div>
    <div class="blue-area" :style="tableCard"></div>
    <badge-card :name="input.name" :areaColor="tableCard" style="-webkit-transform: rotate(180deg);"></badge-card>
    <div class="blue-area" :style="tableCard"></div>
    <badge-card :name="input.name" :areaColor="tableCard"></badge-card>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import BadgeCard from "@/components/AvatarView/BadgeCard";

defineProps({
  input: {
    type: Object,
    default: () => ({
      name: "請輸入姓名",
      gender: "1",
    }),
  },
  tableCard:{
    type: Object,
    default:() => ({
    })
  }
});

</script>
<style scoped>
.blue-area {
  width: 18cm; /* 設定寬度為 20 公分 */
  height: 1.2cm; /* 設定高度為 2 公分 */
  margin: 0 auto;
  border-style: dotted;
  border-left-style: hidden;
  border-right-style: hidden;
  border-color: white;
}

.blue-area-paste {
  border-top-left-radius: 7rem; /* 設定邊框圓角 */
  border-top-right-radius: 7rem;
  margin: 0 auto;
  border-style: hidden;
  top: 0;
  left: 0;
  display: flex; /* 設定為彈性盒子 */
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  color: white;
}
</style>
