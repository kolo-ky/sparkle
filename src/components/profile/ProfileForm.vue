<template lang="pug">
  v-card
    v-card-text(v-for='item in items' :key='item.key')
      v-text-field(:label='item.key')
    v-card-actions(m-4='')
      v-btn(flat='' @click='switchToBack') Назад
      v-spacer
      v-btn(flat='') Сохранить
</template>

<script>

export default {
  name: 'ProfileForm',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    switchToBack () {
      this.$emit('handleSwitch')
    }
  }
}
</script>
