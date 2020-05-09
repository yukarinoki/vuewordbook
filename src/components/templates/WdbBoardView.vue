<template>
  <div>
  <WdbBoardNavigation name="Setting" @setting="redirect_to_setting" />
  <p>Board Page</p>
  <div class='test'>
      <WdbButton @click='wdbclicktest'>てすと</WdbButton>
      <WdbWordCard
        word='simontaneously'
        id='nazonoidmojiretu'
        listId='todo'
        description='konotangohasuperingugamuzui'
        :ismeanuserset="false"
        mean='usophon'
      ></WdbWordCard>

      <WdbWordDetailForm
       v-bind:wordobj="wordobject"
      :onupdate="onupdate"
      :onremove="onremove">
      </WdbWordDetailForm>
  </div>
  </div>
</template>

<script>
import WdbButton from '@/components/atoms/WdbButton.vue'
import WdbBoardNavigation from '@/components/molecules/WdbBoardNavigation.vue'
import WdbWordCard from '@/components/molecules/WdbWordCard.vue'
import WdbWordDetailForm from '@/components/molecules/WdbWordDetailForm.vue'

export default{
  name: 'WdbBoardView',
  components: {
    WdbButton,
    WdbBoardNavigation,
    WdbWordCard,
    WdbWordDetailForm
  },
  data: function () {
    return {
      wordobject: {
        id: 'testwordid',
        word: 'testword',
        mean: 'testmean',
        ismeanuserset: true,
        times: 2,
        listId: 'todo',
        description: 'testdescription',
        iscomplete: false
      }
    }
  },
  methods: {
    wdbclicktest () {
      console.log('clickwdb-button')
    },
    redirect_to_setting (ev) {
      // TODO
      console.log('setting is emited', ev)
    },
    async onupdate (w) {
      // TODO
      console.log('onupdate is excuted from BoardView')
    },
    async onremove (w) {
      // TODO
      console.log('onremove is executed from BoardView')
    }
  }
}
</script>
