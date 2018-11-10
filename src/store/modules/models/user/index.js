export default {
  name: {
    title: 'Имя',
    value: '',
    validate: 'required',
    rules: {
      required: () => 'Поле не должно быть пустым'
    }
  },
  surname: {
    title: 'Фамилия',
    value: '',
    validate: 'required',
    rules: {
      required: () => 'Поле не должно быть пустым'
    }
  },
  email: {
    title: 'Почта',
    value: '',
    validate: 'required|email',
    rules: {
      required: () => 'Поле не должно быть пустым',
      email: () => 'Неверный email'
    }
  },
  bio: {
    title: 'О себе',
    value: '',
    validate: 'required',
    rules: {
      required: () => 'Поле не должно быть пустым'
    }
  }
}
