<template lang="pug">
  v-card
    v-form(@submit.prevent='onSave')
      v-card-text(v-for='item in userData' :key='item.key')
          v-text-field(
            :label='item.title'
            v-model='item.value'
            type='text'
            :name='item.key'
            v-validate='item.validate'
            :rules='(!errors.first(item.key)) ? [true] : [errors.first(item.key)]'
            autocomplete="off"
            @input.once='isEdit = true'
          )
      v-card-actions(m-4='')
          v-btn(flat='' @click='switchToBack') Назад
          v-spacer
          v-btn(flat='' type='submit') Сохранить
</template>

<script>
import model from '@/store/modules/models/user'
import _ from 'lodash'

export default {
  name: 'ProfileForm',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      userData: _.cloneDeep(this.items),
      isEdit: false
    }
  },
  computed: {
    dictionary () {
      let custom = {}
      Object.keys(model).forEach(key => {
        custom[key] = model[key].rules
      })
      return {
        custom
      }
    }
  },
  methods: {
    switchToBack () {
      if (this.isEdit) {
        this.$confirm('Изменения не сохранены. Вы дейстивтельно хотите закончить?').then(res => {
          if (res) {
            this.$emit('handleSwitch')
          }
        })
      } else {
        this.$emit('handleSwitch')
      }
    },
    onSave () {
      console.log(this.userData)
      this.$emit('handleSwitch')
    }
  },
  mounted () {
    this.$validator.localize('ru', this.dictionary)
  }
}
</script>
