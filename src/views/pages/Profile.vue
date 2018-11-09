<template lang="pug">
  v-layout
    v-flex(v-if='!loading')
      v-container
        v-layout
          h1 Профиль
      v-container
        v-layout(row='' wrap='')
          v-flex(xs12='' sm12='' md12='' lg2='' text-xs-center='' text-sm-center='')
            v-avatar(size='150px')
              img(src='https://avatars0.githubusercontent.com/u/9064066?v=4&s=460')
          v-flex(xs12='' sm12='' md12='' lg10='' pt-4='')
            profile-list(v-if="!edit" :items='profileList' @handleSwitch='switchView')
            profile-form(v-else :items='profileList' @handleSwitch='switchView')
    app-progress(v-else)
</template>

<script>
import AppProgress from '@/components/Progress'
import {mapGetters} from 'vuex'
import ProfileList from '@/components/profile/ProfileList'
import ProfileForm from '@/components/profile/ProfileForm'

export default {
  name: 'Profile',
  data () {
    return {
      edit: false
    }
  },
  computed: {
    ...mapGetters(['profileList', 'loading'])
  },
  methods: {
    switchView () {
      this.edit = !this.edit
    }
  },
  components: {
    AppProgress,
    ProfileList,
    ProfileForm
  }
}
</script>
