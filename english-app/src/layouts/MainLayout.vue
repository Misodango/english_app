<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '@/views/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
.content-wrapper {
  position: relative;
  margin-top: -900px; /* ヘッダーの高さ分を上にずらす */
}
</style>
