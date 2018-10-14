<template lang="pug">
  v-toolbar(color='red', dense='', fixed='', clipped-left='', app='')
    v-toolbar-side-icon
    v-toolbar-title Sparkle
    v-spacer
    v-toolbar-items.hidden-sm-and-down(
      v-for="item in menu"
      :key="item.url"
    )
        v-btn(flat='' :to='item.url') {{item.title}}
</template>

<script>

export default {
  name: 'AppHeader',
  data () {
    return {
      menu: [
        {
          title: 'События',
          url: '/'
        },
        {
          title: 'Создать событие',
          url: '/create-event'
        },
        {
          title: 'Профиль',
          url: '/profile'
        }
      ]
    }
  }
}
</script>
