<template lang="pug">
v-layout(align-center='', justify-center='')
 v-flex(xs12='', sm8='', md4='')
  v-card.elevation-12
    v-toolbar(dark='', color='red')
      v-toolbar-title Форма входа
      v-spacer
    v-card-text
      v-form
        v-text-field(prepend-icon='person', name='login', label='Логин', type='text' v-model="username")
        v-text-field#password(prepend-icon='lock', name='password', label='Пароль', type='password' v-model="password")
    v-card-actions
      v-spacer
      v-btn(color='red' @click="login") Войти
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const {username, password} = this
      console.log(username, password)
    }
  }
}
</script>
