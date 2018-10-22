<template lang="pug">
v-layout(align-center='', justify-center='')
  v-flex(xs12='', sm8='', md4='')
    v-card.elevation-12
      v-toolbar(dark='', color='red')
        v-toolbar-title Регистрация
        v-spacer
      v-alert(:value="error", color="error", icon="warning", outline="")
        | {{error}}
      v-card-text
        v-form(@submit.prevent="onSignUp")
          v-text-field(prepend-icon='person', name='login', label='Логин', type='text' v-model="username")
          v-text-field#password(prepend-icon='lock', name='password', label='Пароль', type='password' v-model="password")
          v-text-field#confirmPassword(prepend-icon='lock', name='confirmPassword', label='Подтверждение пароля', type='password' v-model="confirmPassword")
          v-card-actions
            v-spacer
            v-btn(color='red', type="submit", :disabled="process") Зарегистрироваться
      v-divider(light="")
      v-card-actions.pa-3
        v-spacer
        v-btn(small="", color="#cccccc", to="/sign-in", round="", outline="") Есть аккаунт? Войдите
        v-spacer
</template>

<script>
import {signUp} from '@/db/firebase/auth'
import {errors} from '@/errors/registration/'

export default {
  name: 'Registration',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      process: false,
      error: null
    }
  },
  methods: {
    onSignUp () {
      const {username, password} = this
      this.error = null
      this.process = true

      signUp(username, password).then(() => {
        this.process = false
        this.$router.push('/sign-in')
      }).catch(error => {
        this.process = false
        this.error = errors[error.code]
      })
    }
  }
}
</script>
