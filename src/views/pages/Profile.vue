<template lang="pug">
  v-layout(wrap="" row="")
    v-flex(md-12='')
      v-container
        v-layout
          h1 Профиль
      v-container
        v-layout
          v-flex(md2='' lg2='')
            v-avatar(size='150px')
              img(src='https://avatars0.githubusercontent.com/u/9064066?v=4&s=460', alt='Avatar')
          v-flex(md10='' align-content-left='' pt-4='')
            v-list(two-line='', subheader='')
              v-list-tile(v-for='item in profileList', :key='item.title')
                v-list-tile-content
                  v-list-tile-title {{ item.key }}
                  v-list-tile-sub-title {{ item.value }}
                v-list-tile-action
                  v-btn(icon='', ripple='')
                    v-icon(color='grey lighten-1') edit
</template>

<script>
import AppProgress from '@/components/Progress'
import {mapGetters} from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['profile']),
    profileList () {
      return Object.keys(this.profile).map(key => {
        return {
          key,
          value: this.profile[key]
        }
      })
    }
  },
  components: {
    AppProgress
  }
}
</script>
