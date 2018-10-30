<template lang="pug">
  v-btn(flat='', :to='menuItem.path', router="" v-if="!menuItem.children")
          v-icon(left="") {{menuItem.meta.icon}}
          | {{menuItem.meta.title}}
</template>

<script>
export default {
  name: 'ToolbarButton',
  props: {
    menuItem: {
      type: Object,
      required: true
    }
  }
}
</script>
