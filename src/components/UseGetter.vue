<template>
  <div class="first-component">
    First component
    {{ someObject }}
    <button @click="showObject">SHOW ME OBJECT FIRST COMPONENT</button>
    <button @click="changeObject">
      CHANGE NAME FOR ALSO NOT BEN
    </button>
    NOT OBJECT
    {{ notObject }}
    <button @click="changeNotObject">
      CHANGE NOT OBJECT
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters([
      'someObject',
      'notObject',
    ])
  },
  methods: {
    showObject() {
      this.$store.dispatch('showMeObject')
    },
    changeObject() {
      this.someObject.name = 'Also not Ben';
    },
    changeNotObject() {
      this.notObject = 25;
    },
  },
}
</script>
