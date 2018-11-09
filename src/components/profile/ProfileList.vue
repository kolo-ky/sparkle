<template lang="pug">
  v-card
    v-card-text
      v-list(two-line='' subheader='')
        v-list-tile(v-for='item in items' :key='item.key')
          v-list-tile-content
            v-list-tile-title {{ item.key }}
            v-list-tile-sub-title {{ item.value }}
    v-card-actions(m-4='')
      v-btn(flat='' @click="switchToEdit") Редактировать
</template>

<script>

export default {
  name: 'ProfileList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    switchToEdit () {
      this.$emit('handleSwitch')
    }
  }
}
</script>
