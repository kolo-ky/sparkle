<template lang="pug">
  v-app#inspire(dark='')
    app-header
    v-content
      v-container(fill-height='')
        router-view
    app-footer
    snack
</template>

<script>
import AppHeader from '@/views/layouts/pageLayout/components/AppHeader'
import AppFooter from '@/views/layouts/pageLayout/components/AppFooter'
import Snack from '@/components/Snack'

export default {
  name: 'PageLayout',
  components: {
    AppHeader,
    AppFooter,
    Snack
  }
}
</script>
