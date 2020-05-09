<template>
  <nav class="board-navigation">
    <div class="title">
      <h1>Wordbook App</h1>
    </div>
    <div class="actions">
      <WdbButton
        type="text"
        @click="$emit(name.toLowerCase())"
      >
        {{ name }}
      </WdbButton>
    </div>
    <div class="actions">
      <WdbButton
        type="text"
        @click="$emit('logout')"
      >
        Logout
      </WdbButton>
    </div>
  </nav>
</template>

<script>
import WdbButton from '@/components/atoms/WdbButton.vue'
export default {
  name: 'WdbBoardNavigation',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    WdbButton
  }
}
</script>

<style scoped>
.board-navigation {
  display: flex;
  border-bottom: medium solid black;
}
.title {
  flex: 1;
}
h1 {
  margin: 0px;
}
.actions {
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
}
</style>
