<template>
  <div class="home">
    <img
alt="Vue logo"
src="../assets/logo.png">
    <HelloWorld msg="欢迎使用VUE + JS + TS 混合开发 全尺寸设备适配大数据框架"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
