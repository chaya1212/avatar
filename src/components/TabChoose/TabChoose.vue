<template>
  <div ref="chooseBlock" class="choose_block">
    <ul id="tabBar" ref="tabBar" :class="prevShow === false ? 'withoutPrevBtn' : ''" class="nav nav-tabs scroll_nav"
        role="tablist">

      <li v-for="(tab, key, index) in tabChoose" :key="tab.typeName"
          :class="[nowType === index ? 'is_active' : '',  Avatar.isNewTagTitle(key) ? 'is_new' : ''  ]"
          class="nav_item">

        <button :id="`${tab.typeName}-tab`" :aria-controls="`${tab.typeName}`" :aria-selected="nowType === index"
                :data-bs-target="`#${tab.typeName}`"
                class="nav-link btn_choose"
                data-bs-toggle="tab"
                role="tab" type="button" @click="clickType(index)">
          <img :src="require(`@/assets/images/btn/choose_item/btn_${tab.typeName}.svg`)" class="btn_text">
        </button>
      </li>
    </ul>
    <button v-show="prevShow" class="prev" @click="prev()"></button>
    <button v-show="nextShow" class="next" @click="next()"></button>
    <div  id="tabContent"  class="tabContent tab-content px-3">
      <div v-for="(typeOptions, typeName, index) in tabChoose" :key="typeName"
           @click="cacheNowAvatar"
           :id="`${typeOptions.typeName}`" :aria-labelledby="`${typeOptions.typeName}-tab`"
           :class="nowType === index ? 'show active' : ''"
           class="tab-pane fade"
           role="tabpanel">
          <div class="d-flex wrap_list color_list">
            <label v-for="(value) in typeOptions.color" :key="value" class="choose_item color_item">
              <input
                  v-model="typeColorModel[typeOptions.typeName].value"
                  :name="typeColorModel[typeOptions.typeName].value"
                  :value="value"
                  class="chooseItem_radioBtn"
                  type="radio"
              />
              <div :style="{background: value }" class="color_view">
              </div>
            </label>
            <label v-if="typeOptions.color.length !== 0" class="choose_item color_item">
              <img :src="require(`@/assets/images/btn/btn_picker.png`)" class="btn_picker">
              <input
                  v-model="typeColorModel[typeOptions.typeName].value"
                  :name="typeColorModel[typeOptions.typeName].value"
                  class="color_picker"
                  type="color"
              />
            </label>
          </div>
          <choose-matrix v-if="typeOptions.matrix" :item="typeOptions.matrix" :typeName="typeName"/>


        <div class="d-flex wrap_list">
          <label v-for="(value, key) in typeOptions.data" :key="value" class="choose_item pt-2 pb-4"  :class="Avatar.isNewTag(typeName, value) ? 'new_chooseItem' : ''">
            <div v-if="Avatar.isNewTag(typeName, value)" class="badge badges_new">
              <div class="text_new">New</div>
            </div>
            <input
                v-model="typeOptions.item"
                :name="typeOptions.type === 'gender' ? key : value"
                :value="value"
                class="chooseItem_radioBtn"
                type="radio"
            />
            <div v-if="typeOptions.type === 'gender'">
              <img :src="require(`@/assets/images/${typeOptions.typeName}/${key}.svg`)" alt="" class="img_item"/>
            </div>
            <div v-else-if="value !== 'none'">
              <img :src="require(`@/assets/images/${typeOptions.typeName}/${value}.svg`)" alt="" class="img_item"/>
            </div>
            <div v-else>
              none
            </div>
          </label>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import ChooseMatrix from './ChooseMatrix'
import Avatar from "@/hook/creatAvatar";

const chooseBlock = ref(null);
const nowType = ref(0);
const tabBar = ref(null);
const {tabChoose} = Avatar;

const prevShow = ref(false)
const nextShow = ref(true)

function prev() {
  tabBar.value.scrollLeft -= 100
}

function next() {
  tabBar.value.scrollLeft += 100
}

function clickType(index) {
  nowType.value = index;
}

onMounted(() => {
  tabBar.value.addEventListener('scroll', () => {
    prevShow.value = tabBar.value.scrollLeft !== 0;
    nextShow.value = !(tabBar.value.scrollLeft >= tabBar.value.scrollWidth - tabBar.value.clientWidth);
  })
})

function cacheNowAvatar() {
  setTimeout(() => Avatar.setFinish(), 500);
}

const typeColorModel = {
  "face": Avatar.faceColor,
  "hair": Avatar.hairColor,
}


</script>
