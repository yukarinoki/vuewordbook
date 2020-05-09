<template>
<div>
  <WdbBoardNavigation name="Board" @board="redirect_to_board" />
  <p>Setting Page</p>
</div>
</template>

<script>
import WdbButton from '@/components/atoms/WdbButton.vue'
import WdbBoardNavigation from '@/components/molecules/WdbBoardNavigation.vue'
export default{
  name: 'WdbBoardView',
  components: {
    WdbButton,
    WdbBoardNavigation
  },
  methods: {
    wdbclicktest () {
      console.log('clickwdb-button')
    },
    redirect_to_board (ev) {
      // TODO
      console.log('board is emited', ev)
    }
  }
}
</script>
