<template lang="pug">
  v-layout
    v-flex(xs12='' sm12='' md12='' lg10='')
      span(class='headline') Упс! Здесь пусто!
      v-btn(outline='' color='primary' @click="switchToCreate") Заполнить профиль
</template>

<script>

export default {
  name: 'EmptyProfile',
  methods: {
    switchToCreate () {
      this.$emit('handleSwitch')
    }
  }
}
</script>
