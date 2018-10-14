<template lang="pug">
  v-app#app(dark='')
    app-header
      v-content
        v-container(fill-height='')
    app-footer
</template>

<script>
import AppHeader from '@/views/layouts/components/AppHeader'
import AppFooter from '@/views/layouts/components/AppFooter'

export default {
  name: 'PageLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
