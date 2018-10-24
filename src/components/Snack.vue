<template lang="pug">
  v-snackbar(:value="true", :multi-line="true", :timeout='5000', @input="closeSnack", :top="true", v-if="error")
    | {{ error }}
</template>

<script>
import {CLEAR_ERROR} from '@/store/actions/common'
import {mapGetters} from 'vuex'

export default {
  name: 'Snack',
  computed: {
    ...mapGetters(['error'])
  },
  methods: {
    closeSnack () {
      this.$store.dispatch(CLEAR_ERROR)
    }
  }
}
</script>
