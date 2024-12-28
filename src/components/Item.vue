<script>
export default {
  props: {
    classItem: {
      type: String,
      required: false
    },
    card: {
      type: Object,
      required: true
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit('onNavigate', id);
    }
  }
}
</script>

<template>
  <div @click="onEmmit(card.id)">
    <div :class="card.classItem">
      <img :src="`/${card.image}`" :alt="card.image">
      <h3 class="">{{ card.title }}</h3>
      <div class="description">{{ card.text }}
        <br>
        <span>Читать далее ...</span>
      </div>
    </div>
  </div>
</template>
