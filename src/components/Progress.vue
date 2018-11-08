<template lang="pug">
    v-container
      v-layout(align-center='', justify-center='')
        v-progress-circular(:size='50', color='primary', indeterminate='' v-show='loading')
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Progress',
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>
