<template lang="pug">
  v-layout
    v-flex(v-if='!loading')
      v-container
        v-layout
          h1 Профиль
      v-container(v-if="refId")
        profile-list(v-if="!editView" :items='profileList' @handleSwitch='switchView')
        profile-form(v-else :items='profileList' @handleSwitch='switchView' @handleSave='onSave')
      v-container(v-else fill-height='')
        empty-profile(v-if="!editView" @handleSwitch='switchView')
        profile-form(v-else :items='profileList' @handleSwitch='switchView' @handleSave='onSave')
    app-progress(v-else)
</template>

<script>
import {mapGetters} from 'vuex'
import { UPDATE_PROFILE, CREATE_PROFILE } from '@/store/actions/user'
import AppProgress from '@/components/Progress'
import ProfileList from '@/components/profile/ProfileList'
import ProfileForm from '@/components/profile/ProfileForm'
import EmptyProfile from '@/components/profile/EmptyProfile'

export default {
  name: 'Profile',
  data () {
    return {
      editView: false
    }
  },
  computed: {
    ...mapGetters(['profileList', 'loading', 'refId'])
  },
  methods: {
    switchView () {
      console.log(1)
      this.editView = !this.editView
    },
    onSave (user) {
      if (this.refId) {
        this.$store.dispatch(UPDATE_PROFILE, user).then(() => {
          this.switchView()
        })
      } else {
        this.$store.dispatch(CREATE_PROFILE, user).then(() => {
          this.switchView()
        })
      }
    }
  },
  components: {
    AppProgress,
    ProfileList,
    ProfileForm,
    EmptyProfile
  }
}
</script>
