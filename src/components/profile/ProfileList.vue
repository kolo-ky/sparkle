<template lang="pug">
v-layout(row='' wrap='')
  v-flex(xs12='' sm12='' md12='' lg2='' text-xs-center='' text-sm-center='')
    v-avatar(size='150px')
      img(src='https://avatars0.githubusercontent.com/u/9064066?v=4&s=460')
  v-flex(xs12='' sm12='' md12='' lg10='' pt-4='')
    v-card
      v-card-text
        v-list(two-line='' subheader='')
          v-list-tile(v-for='item in items' :key='item.key')
            v-list-tile-content
              v-list-tile-title {{ item.title }}
              v-list-tile-sub-title {{ item.value }}
      v-card-actions(m-4='')
        v-btn(flat='' @click="switchToEdit") Изменить
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
