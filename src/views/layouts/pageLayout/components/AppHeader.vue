<template lang="pug">
  v-toolbar(color='red', dense='', fixed='', clipped-left='', app='')
    v-toolbar-side-icon
    v-toolbar-title Sparkle
    v-spacer
    v-toolbar-items.hidden-sm-and-down(
      v-for="item in menu"
      :key="item.path"
    )
        v-btn(flat='' :to='item.path' router="") {{item.meta.title}}
</template>

<script>
import {routes} from '@/router/'

export default {
  name: 'AppHeader',
  data () {
    return {
      menu: routes
    }
  }
}
</script>
