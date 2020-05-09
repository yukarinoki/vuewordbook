<template>
  <span :class="classes">
    {{ icon }}
  </span>
</template>

<script>
export default {
  name: 'WdbIcon',
  props: {
    name: {
      type: String,
      required: true,
      validator: value => {
        return ['close', 'remove', 'add', 'ng', 'ok'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes () {
      return ['wdb-icon', this.name]
    },
    icon () {
      const name = this.name
      if (name === 'close' || name === 'ng') {
        return 'x'
      } else if (name === 'remove') {
        return 'x'
      } else if (name === 'add') {
        return '+'
      } else if (name === 'ok') {
        return 'o'
      }
    }
  }
}
</script>
