<template lang="pug">
  v-toolbar(color='red', dense='', fixed='', clipped-left='', app='')
    v-toolbar-side-icon
    v-toolbar-title Sparkle
    v-spacer
    v-toolbar-items.hidden-sm-and-down
        v-btn(flat='') Link One
        v-btn(flat='') Link Two
        v-btn(flat='') Link Three
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
