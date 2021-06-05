<template>
  <div id="app">
    <UseGetter />
    <DoNotUseGetter />
    ROOT COMPONENT
    {{ someObject }}
    <button @click="showObject">SHOW ME OBJECT ROOT COMPONENT</button>
    <button @click="changeObject">
      CHANGE NAME ROOT COMPONENT
    </button>
  </div>
</template>

<script>
import UseGetter from './components/UseGetter.vue'
import DoNotUseGetter from './components/DoNotUseGetter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    UseGetter,
    DoNotUseGetter
  },
  computed: {
    ...mapGetters([
      'someObject',
    ])
  },
  methods: {
    showObject() {
      this.$store.dispatch('showMeObject')
    },
    changeObject() {
      this.someObject.name = 'Alex';
    }
  },
}
</script>

