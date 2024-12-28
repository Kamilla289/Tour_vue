<script>
import FirstView from "@/views/FirstView.vue";

export default {
  components: {
    FirstView
  },
};
</script>

<template>
  <div class="wrapper">
    <router-link to="/">home</router-link>
    <router-view></router-view>
  </div>

</template>
