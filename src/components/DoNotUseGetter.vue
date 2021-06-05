<template>
  <div class="another-component">
    Another component
    {{ someObject }}
    <button @click="showObject">SHOW ME OBJECT ANOTHER COMPONENT</button>
    <button @click="changeObject">
      CHANGE NAME FOR NOT BEN
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
  name: "DoNotUseGetter",
  computed: {
    ...mapGetters([
      'someObject',
      'notObject',
    ]),
  },
  methods: {
    showObject() {
      this.$store.dispatch('showMeObject')
    },
    changeObject() {
      this.someObject.name = 'NotBen';
    },
    changeNotObject() {
      this.notObject = 10;
    },
  }
}
</script>
