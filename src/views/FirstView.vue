<script>
import item from "@/components/Item.vue";
import { navigate } from "../mixins/navigate"
export default {
  components: {
    item
  },
  computed: {
    itemStore() {
      return this.$store.getters["getItemById"]
    },
  },
  data() {
    return {
      name: 'tour',
    };
  },
  mixins: [navigate],
};
</script>


<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <router-link to="/">home</router-link>
        <item v-for="card in itemStore.cards" :key="card.id" :card="card" @onNavigate="navigate" />
      </div>
    </div>
  </div>
</template>