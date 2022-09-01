<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
    <hr/>
    <SimpleCounter/>
    <hr/>
    <reactive-counter/>
    <hr/>
    <watch-counter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/00HelloWorld.vue'
import SimpleCounter from '@/components/01SimpleCounter.vue'
import ReactiveCounter from '@/components/02ReactiveCounter.vue'
import WatchCounter from '@/components/03WatchCounter.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    WatchCounter,
  }
}
</script>
