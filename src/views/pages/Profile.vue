<template lang="pug">
  v-layout
    h1 Profile
    app-progress
</template>

<script>
import AppProgress from '@/components/Progress'
import UserModel from '@/models/user'

export default {
  name: 'Profile',
  beforeRouteEnter (to, from, next) {
    let userModel = new UserModel()
    userModel.loadUserData()
    next()
  },
  components: {
    AppProgress
  }
}
</script>
