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
                v-text-field(v-model.trim='search' color='white' @input='onSearch')
              v-list(subheader='' v-if="users.length")
                v-subheader Найденные люди
                v-list-tile(v-for='item in users' :key='item.userId' avatar='' @click='')
                  v-list-tile-avatar
                    img(src='ihttps://avatars0.githubusercontent.com/u/9064066?v=4&s=460')
                  v-list-tile-content
                    v-list-tile-title {{item.name}} {{item.surname}}
                  v-list-tile-action
                    v-icon add
              v-list(subheader='' v-else)
                v-subheader {{subheaderTitle}}
    app-progress(v-else)
</template>

<script>
import {mapGetters} from 'vuex'
import {SET_LOADING} from '@/store/actions/common'
import {findPeople} from '@/db/firebase/people'
import _ from 'lodash'
import AppProgress from '@/components/Progress'

export default {
  name: 'FindFriends',
  data () {
    return {
      users: [],
      search: '',
      emptyResponse: false,
      searchCount: 3
    }
  },
  computed: {
    ...mapGetters(['loading']),
    subheaderTitle () {
      return this.emptyResponse ? 'Ничего не найдено' : 'Для поиска друзей введите имя в строку поиска'
    }
  },
  methods: {
    onSearch: _.debounce(function () {
      if (this.search.length >= this.searchCount) {
        this.clearUsers()
        this.emptyResponse = false
        this.$store.dispatch(SET_LOADING, true)
        findPeople(this.search)
          .then(querySnapshot => {
            this.$store.dispatch(SET_LOADING, false)
            if (querySnapshot.docs.length) {
              querySnapshot.forEach(doc => {
                this.users.push(doc.data())
              })
            } else {
              this.emptyResponse = true
            }
          })
          .catch(error => console.log(error))
      }
    }, 1000),
    clearUsers () {
      this.users = []
    }
  },
  components: {
    AppProgress
  }
}
</script>
