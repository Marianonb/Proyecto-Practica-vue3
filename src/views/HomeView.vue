<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
    <hr/>
    <SimpleCounter/>
    <hr/>
    <ReactiveCounter/>
    <hr/>
    <WatchCounter/>
    <hr/>
    <SimpleCounterCompositionApi/>
    <hr/>
    <TodoList/>
  </div>
    <hr/>
    <SimpleFetch/>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/00HelloWorld.vue'
import SimpleCounter from '@/components/01SimpleCounter.vue'
import ReactiveCounter from '@/components/02ReactiveCounter.vue'
import WatchCounter from '@/components/03WatchCounter.vue'
import SimpleCounterCompositionApi from '@/components/04SimpleCounterCompositionApi.vue'
import TodoList from '@/components/05TodoList.vue'
import SimpleFetch from '@/components/06SimpleFetch.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    WatchCounter,
    SimpleCounterCompositionApi,
    TodoList,
    SimpleFetch,
  }
}
</script>
