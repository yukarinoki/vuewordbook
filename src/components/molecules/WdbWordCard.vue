<template>
  <div class='word-card'>
    <div class="action">
      <WdbButton
        type="text"
        @click="$emit('remove', {id, listId})"
      >
        <WdbIcon name='remove' />
      </WdbButton>
    </div>
    <div class="word">
      <router-link :to="{ name: 'taskDetailModal', params: { id } }">
        <h3>{{ word }}</h3>
      </router-link>
    </div>
    <div class="action">
      <WdbButton
        type="text"
        @click="$emit('ok', {id, listId})"
      >
        <WdbIcon name='ok' />
      </WdbButton>

      <WdbButton
        type="text"
        @click="$emit('ng', {id, listId})"
      >
        <WdbIcon name='ng' />
      </WdbButton>
    </div>
  </div>
</template>

<script>
import WdbButton from '@/components/atoms/WdbButton.vue'
import WdbIcon from '@/components/atoms/WdbIcon.vue'

export default {
  name: 'WdbWordCard',
  components: {
    WdbButton,
    WdbIcon
  },
  props: {
    id: {
      type: String,
      required: true
    },
    word: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    ismeanuserset: {
      type: Boolean,
      default: false
    },
    mean: {
      type: String,
      default: ''
    },
    listId: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.task-card {
  display: flex;
}
.name {
  flex: 1;
}
h3 {
  margin: 0px;
  font-size: 0.75em;
  text-align: left;
  padding-left: 8px;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
.actions {
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
}
</style>
