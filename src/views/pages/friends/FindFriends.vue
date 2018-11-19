<template lang="pug">
  v-layout
    v-flex(v-if='!loading')
      v-container
        v-layout
          h1 Поиск друзей
        v-layout(row='' mt-4='')
          v-flex(xs12='' sm10='' md10='' lg10='' offset-sm1='')
            v-card
              v-toolbar(dark='' color='red')
                v-text-field(v-model='search' color='white' @input='onSearch')
              v-list(subheader='' v-if="users.length")
                v-subheader Люди
                v-list-tile(v-for='item in users' :key='item.userId' avatar='' @click='')
                  v-list-tile-avatar
                    img(src='ihttps://avatars0.githubusercontent.com/u/9064066?v=4&s=460')
                  v-list-tile-content
                    v-list-tile-title {{item.name}} {{item.surname}}
                  v-list-tile-action
                    v-icon chat_bubble
              v-list(subheader='' v-else)
                v-subheader Для поиска друзей введите имя в строку поиска
    app-progress(v-else)
</template>

<script>
import {mapGetters} from 'vuex'
import _ from 'lodash'
import AppProgress from '@/components/Progress'

export default {
  name: 'FindFriends',
  data () {
    return {
      users: [],
      search: '',
      searchCount: 3
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  methods: {
    onSearch: _.debounce(function () {
      if (this.search.length >= this.searchCount) {
        console.log(this.search)
      }
    }, 1000)
  },
  components: {
    AppProgress
  }
}
</script>
