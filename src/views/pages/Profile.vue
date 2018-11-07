<template lang="pug">
  v-layout
    h1 Profile
    app-progress
</template>

<script>
import AppProgress from '@/components/Progress'

export default {
  name: 'Profile',
  components: {
    AppProgress
  }
}
</script>
