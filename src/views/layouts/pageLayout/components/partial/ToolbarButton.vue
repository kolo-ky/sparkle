<template lang="pug">
  v-btn(flat='', :to='menuItem.path', v-if="!menuItem.children")
    v-icon(left="") {{menuItem.meta.icon}}
    | {{menuItem.meta.title}}
  v-menu(v-else)
    v-btn(slot='activator', color="transparent", depressed="")
      v-icon(left="") {{menuItem.meta.icon}}
      | {{menuItem.meta.title}}
    v-list
      v-list-tile(v-for='child in menuItem.children', :key='child.path' :to="`${menuItem.path}/${child.path}`")
        v-list-tile-title {{ child.meta.title }}
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
