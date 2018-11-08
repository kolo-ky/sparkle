<template lang="pug">
    v-container
      v-layout(align-center='', justify-center='')
        v-progress-circular(:size='50', color='primary', indeterminate='')
</template>

<script>

export default {
  name: 'Progress'
}
</script>
