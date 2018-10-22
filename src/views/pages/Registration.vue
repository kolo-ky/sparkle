<template lang="pug">
v-layout(align-center='', justify-center='')
  v-flex(xs12='', sm8='', md4='')
    v-card.elevation-12
      v-toolbar(dark='', color='red')
        v-toolbar-title Регистрация
        v-spacer
      v-alert(color="error", icon="warning", outline="")
        | 123
      v-card-text
        v-form(@submit.prevent="onSignUp" v-model="validate")
          v-text-field(prepend-icon='person', name='login', label='Логин', type='text' v-model="username", :rules="rules.email")
          v-text-field#password(prepend-icon='lock', name='password', label='Пароль', type='password' v-model="password", :rules="rules.password")
          v-text-field#confirmPassword(prepend-icon='lock', name='confirmPassword', label='Подтверждение пароля', type='password', v-model="confirmPassword", :rules="rules.confirmPassword")
          v-card-actions
            v-spacer
            v-btn(color='red', type="submit", :disabled="process || !validate") Зарегистрироваться
      v-divider(light="")
      v-card-actions.pa-3
        v-spacer
        v-btn.text-lowercase.font-weight-thin(small="", color="#cccccc", to="/sign-in", round="", outline="") Есть аккаунт? Войдите
        v-spacer
</template>

<script>
import {signUp} from '@/db/firebase/auth'

export default {
  name: 'Registration',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      validate: false,
      process: false,
      rules: {
        email: [
          (value) => !!value || 'Пожалуйста, введите e-mail',
          // eslint-disable-next-line
          (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Введенный e-mail неправильный'
        ],
        password: [
          (value) => !!value || 'Пожалуйста, введите пароль',
          (value) => (value && value.length >= 6) || 'Длина пароля должна быть не менее 6 символов'
        ],
        confirmPassword: [
          (value) => !!value || 'Пожалуйста, повторите пароль',
          (value) => (value && value.length >= 6) || 'Длина пароля должна быть не менее 6 символов',
          (value) => value === this.password || 'Пароли должны совпадать'
        ]
      }
    }
  },
  methods: {
    onSignUp () {
      const {username, password} = this
      this.process = true

      signUp(username, password).then(() => {
        this.process = false
        this.$router.push('/sign-in')
      }).catch(() => {
        this.process = false
      })
    }
  }
}
</script>
