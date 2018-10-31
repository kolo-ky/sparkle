<template lang="pug">
  v-toolbar(color='red', dense='', fixed='', clipped-left='', app='')
    v-toolbar-side-icon
    v-toolbar-title Sparkle
    v-spacer
    v-toolbar-items.hidden-sm-and-down(
      v-for="item in menuList"
      :key="item.path"
    )
      toolbar-button(:menuItem="item")
</template>

<script>
import {routes} from '@/router/'
import {mapGetters} from 'vuex'
import ToolbarButton from './partial/ToolbarButton'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isAuthenticated']),
    menuList () {
      return routes.filter(item => item.meta && (item.meta.auth === null || item.meta.auth === this.isAuthenticated))
    }
  },
  components: {
    ToolbarButton
  }
}
</script>
