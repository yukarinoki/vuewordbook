<template>
<form class='word-details-form' novalidate>
  <div class='thatword'>
    <h3> {{wordobj.word}} </h3>
  </div>

  <div class='mean'>
    <div class='mean-set' v-if='isUnderMeanset' @dblclick="handleMeanset">
      <textarea id='word-mean'
        v-model='wordobj.mean'
      >
      </textarea>
    </div>

    <div class='mean-show' v-if='!isUnderMeanset' @dblclick="transition_to_meanset">
      <p id='word-mean-default'> {{ mean_of_word() }} </p>
    </div>
  </div>

  <div class='description'>
    {{ wordobj.description }}
  </div>

  <div class='times'>
    {{ wordobj.times }}
  </div>

  <div class='actions'>
    <WdbButton v-if="!wordobj.iscomplete" @click="handleTocomplete">To complete</WdbButton>
    <WdbButton @click="handleReset">Reset</WdbButton>
    <WdbButton @click="handleRemove">Delete</WdbButton>
  </div>
</form>
</template>

<script>
import WdbButton from '@/components/atoms/WdbButton.vue'

export default{
  name: 'WdbWordDetail',
  components: {
    WdbButton
  },
  data () {
    return {
      isUnderMeanset: false
    }
  },
  props: {
    wordobj: {
      type: Object,
      required: true
    },
    onupdate: {
      type: Function,
      required: true
    },
    onremove: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleTocomplete () {
      this.wordobj.iscomplete = true
      this.onupdate(this.wordobj).then(
        console.log('onupdate and handleTocomplete was excuted')
      ).catch(err => {
        console.error(err)
      })
    },
    handleRemove () {
      this.onremove(this.wordobj).then(
        console.log('onupdate and handleRemove was excuted')
      ).catch(err => {
        console.error(err)
      })
    },
    handleReset () {
      this.wordobj.iscomplete = false
      this.times = 0
      this.onupdate(this.wordobj).then(
        console.log('onupdate and handleReset was excuted')
      ).catch(err => {
        console.error(err)
      })
    },
    transition_to_meanset () {
      console.log('transition_to_meanset')
      if (this.wordobj.ismeanuserset) {
        this.isUnderMeanset = true
      } else {
        this.wordobj.mean = this.mean_from_dictionary()
        this.wordobj.ismeanuserset = true
        this.isUnderMeanset = true
      }
    },
    mean_from_dictionary () {
      // TODO
      return 'JISHO NI KAITEARUKOTO'
    },
    handleMeanset () {
      this.$emit('end_set_mean')
      console.log('end_mean_set')
      this.onupdate(this.wordobj).then(
        console.log('onupdate was excuted')
      ).catch(err => {
        console.error(err)
      })
      this.isUnderMeanset = false
    },
    mean_of_word () {
      if (this.wordobj.ismeanuserset) {
        return this.wordobj.mean
      } else {
        return this.mean_from_dictionary()
      }
    }
  }
}

</script>

<style scoped>
form {
  display: block;
  margin: 0 auto;
  text-align: left;
}
label {
  display: block;
}
input, textarea {
  width: 99%;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
