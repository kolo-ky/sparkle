<template lang="pug">
  v-app#inspire(dark='')
    app-header
    v-content
      v-container(fill-height='')
        transition(name="moveInUp" mode="out-in")
          router-view
    app-footer
    snack
</template>

<script>
import AppHeader from '@/views/layouts/pageLayout/components/AppHeader'
import AppFooter from '@/views/layouts/pageLayout/components/AppFooter'
import Snack from '@/components/Snack'

import '@/assets/animations/page.css'

export default {
  name: 'PageLayout',
  components: {
    AppHeader,
    AppFooter,
    Snack
  }
}
</script>
