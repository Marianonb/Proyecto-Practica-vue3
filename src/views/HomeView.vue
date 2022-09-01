<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
    <hr/>
    <SimpleCounter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/00HelloWorld.vue'
import SimpleCounter from '@/components/01SimpleCounter.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    SimpleCounter,
  }
}
</script>
