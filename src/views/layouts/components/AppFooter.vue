<template lang="pug">
  v-footer.pa-3(color='red', dense='', fixed='', clipped-left='', app='')
    v-spacer
    div © {{ new Date().getFullYear() }}
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
