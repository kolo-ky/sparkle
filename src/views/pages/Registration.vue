<template lang="pug">
v-layout(align-center='', justify-center='')
  v-flex(xs12='', sm8='', md4='')
    v-card.elevation-12
      v-toolbar(dark='', color='red')
        v-toolbar-title Регистрация
        v-spacer
      v-card-text
        v-form
          v-text-field(prepend-icon='person', name='login', label='Логин', type='text' v-model="username")
          v-text-field#password(prepend-icon='lock', name='password', label='Пароль', type='password' v-model="password")
          v-text-field#confirmPassword(prepend-icon='lock', name='confirmPassword', label='Подтверждение пароля', type='password' v-model="confirmPassword")
      v-card-actions
        v-spacer
        v-btn(color='red' @click="onSignUp") Зарегестрироваться
</template>

<script>
import {signUp} from '@/db/firebase/auth'

export default {
  name: 'Registration',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSignUp () {
      const {username, password} = this
      signUp(username, password).then(() => {
        this.$router.push('/sign-in')
      }).catch(error => console.log(error))
    }
  }
}
</script>
