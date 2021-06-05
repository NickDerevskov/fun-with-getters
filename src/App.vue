<template>
  <div id="app">
    <UseGetter />
    <DoNotUseGetter />
  </div>
</template>

<script>
import UseGetter from './components/UseGetter.vue'
import DoNotUseGetter from './components/DoNotUseGetter.vue'

export default {
  name: 'App',
  components: {
    UseGetter,
    DoNotUseGetter
  }
}
</script>

