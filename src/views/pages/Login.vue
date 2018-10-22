<template lang="pug">
v-layout(align-center='', justify-center='')
  v-flex(xs12='', sm8='', md4='')
    v-card.elevation-12
      v-toolbar(dark='', color='red')
        v-toolbar-title Вход
        v-spacer
      v-card-text
        v-form(@submit.prevent="onSignIn")
          v-text-field(prepend-icon='person', name='login', label='Логин', type='text' v-model="username")
          v-text-field#password(prepend-icon='lock', name='password', label='Пароль', type='password' v-model="password")
          v-card-actions
            v-spacer
            v-btn(color='red', type="submit") Войти
      v-divider(light="")
      v-card-actions.pa-3
        v-spacer
        v-btn(small="", color="#cccccc", to="/sign-up", round="", outline="") Нужен аккаунт? Зарегистрируйтесь
        v-spacer
</template>

<script>
import {AUTH_REQUEST} from '@/store/actions/auth'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSignIn () {
      const {username, password} = this
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push('/')
      }).catch(error => console.log(error))
    }
  }
}
</script>
