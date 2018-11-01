<template lang="pug">
v-layout(align-center='', justify-center='')
  v-flex(xs12='', sm8='', md4='')
    v-card.elevation-12(light="")
      v-spacer
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
            autocomplete="off"
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
            autocomplete="off"
          )
          v-text-field#confirmPassword(
            prepend-icon='refresh'
            name='confirmPassword'
            label='Подтверждение пароля'
            type='password'
            v-model="confirmPassword"
            data-vv-as="password"
            v-validate="'required|min:6|confirmed:password'"
            :rules="(!errors.first('confirmPassword')) ? [true] : [errors.first('confirmPassword')]"
            autocomplete="off"
          )
          v-card-actions
            v-spacer
            v-btn.white--text.text-lowercase(color='red', type="submit" :disabled="loading") Зарегистрироваться
      v-divider(light="")
      v-card-actions.pa-3
        v-spacer
        v-btn.text-lowercase(small="", color="dark", to="/sign-in", round="", outline="") Есть аккаунт? Войдите
        v-spacer
</template>

<script>
import {AUTH_REGISTER} from '@/store/actions/auth'
import {mapGetters} from 'vuex'

export default {
  name: 'Registration',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
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
  computed: {
    ...mapGetters(['loading'])
  },
  methods: {
    onSignUp () {
      this.$validator.validate().then(result => {
        if (result) {
          const {username, password} = this
          this.$store.dispatch(AUTH_REGISTER, { username, password }).then(() => {
            this.$router.push({name: 'all-events'})
          }).catch(() => {})
        }
      })
    }
  },
  mounted () {
    this.$validator.localize('ru', this.dictionary)
  }
}
</script>
