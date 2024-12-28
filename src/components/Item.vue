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
    toggleTextVisibility() {
      this.isTextVisible = !this.isTextVisible;
    },
    onEmmit(id) {
      this.$emit('onNavigate', id);
    }
  },
  data() {
    return {
      isTextVisible: false
    };
  },
}
</script>

<template>
  <div @click="onEmmit(card.id)">
    <div :class="card.classItem">
      <img :src="`/${card.image}`" :alt="card.image">
      <h3 class="">{{ card.title }}</h3>
      <div class="description">{{ isTextVisible ? card.text : card.text.slice(0, 400) }}
        <br>
        <span>
          Читать далее ...
        </span>
      </div>
    </div>
  </div>
</template>
