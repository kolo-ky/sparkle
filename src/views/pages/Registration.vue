<template lang="pug">
v-layout(align-center='', justify-center='')
  v-flex(xs12='', sm8='', md4='')
    v-card.elevation-12
      v-toolbar(dark='', color='red')
        v-toolbar-title Регистрация
        v-spacer
      v-alert(:value="firebaseError" color="error", icon="warning", outline="")
        | {{firebaseError}}
      v-card-text
        v-form(@submit.prevent="onSignUp")
          v-text-field(
            prepend-icon='person'
            name='username'
            label='Логин'
            type='text'
            v-model="username"
            v-validate="'required|email'"
            :rules="(!errors.first('username')) ? [true] : [errors.first('username')]"
          )
          v-text-field#password(
            prepend-icon='lock'
            name='password'
            label='Пароль'
            type='password'
            v-model='password'
            ref='password'
            v-validate="'required|min:6'"
            :rules="(!errors.first('password')) ? [true] : [errors.first('password')]"
          )
          v-text-field#confirmPassword(
            prepend-icon='lock'
            name='confirmPassword'
            label='Подтверждение пароля'
            type='password'
            v-model="confirmPassword"
            data-vv-as="password"
            v-validate="'required|min:6|confirmed:password'"
            :rules="(!errors.first('confirmPassword')) ? [true] : [errors.first('confirmPassword')]"
          )
          v-card-actions
            v-spacer
            v-btn(color='red', type="submit", :disabled="process") Зарегистрироваться
      v-divider(light="")
      v-card-actions.pa-3
        v-spacer
        v-btn.text-lowercase.font-weight-thin(small="", color="#cccccc", to="/sign-in", round="", outline="") Есть аккаунт? Войдите
        v-spacer
</template>

<script>
import {signUp} from '@/db/firebase/auth'
import {dictionary} from '@/db/firebase/dictionary'

export default {
  name: 'Registration',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      process: false,
      firebaseError: null,
      dictionary: {
        custom: {
          username: {
            required: () => 'Поле не должно быть пустым',
            email: () => 'Неверный email'
          },
          password: {
            required: () => 'Поле не должно быть пустым',
            min: () => 'Поле должно содержать минимум 6 символов'
          },
          confirmPassword: {
            required: () => 'Поле не должно быть пустым',
            min: () => 'Поле должно содержать минимум 6 символов',
            confirmed: () => 'Пароли должны совпадать'
          }
        }
      }
    }
  },
  methods: {
    onSignUp () {
      this.process = true
      this.$validator.validate().then(result => {
        this.firebaseError = null

        if (!result) {
          this.process = false
        } else {
          const {username, password} = this

          signUp(username, password).then(() => {
            this.process = false
            this.$router.push('/')
          }).catch(error => {
            this.firebaseError = dictionary[error.code]
            this.process = false
          })
        }
      })
    }
  },
  mounted () {
    this.$validator.localize('ru', this.dictionary)
  }
}
</script>
