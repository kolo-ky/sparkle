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
            profile-list(v-if="!editView" :items='profileList' @handleSwitch='switchView')
            profile-form(v-else :items='profileList' @handleSwitch='switchView' @handleSave='onSave')
    app-progress(v-else)
</template>

<script>
import {mapGetters} from 'vuex'
import { UPDATE_PROFILE } from '@/store/actions/user'
import AppProgress from '@/components/Progress'
import ProfileList from '@/components/profile/ProfileList'
import ProfileForm from '@/components/profile/ProfileForm'

export default {
  name: 'Profile',
  data () {
    return {
      editView: false
    }
  },
  computed: {
    ...mapGetters(['profileList', 'loading'])
  },
  methods: {
    switchView () {
      this.editView = !this.editView
    },
    onSave (user) {
      this.$store.dispatch(UPDATE_PROFILE, user).then(() => {
        this.switchView()
      })
    }
  },
  components: {
    AppProgress,
    ProfileList,
    ProfileForm
  }
}
</script>
