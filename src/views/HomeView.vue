<template>
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
    <hr/>
    <SimpleFetch/>
    <hr/>
    <Suspense>
      <template #defautlt > 
        <SuspenseFetch />
      </template>
      <template #fallback >
        Cargando informacion de la Api, unmomento por favor...
      </template>
    </Suspense>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/00HelloWorld'
import SimpleCounter from '@/components/01SimpleCounter'
import ReactiveCounter from '@/components/02ReactiveCounter'
import WatchCounter from '@/components/03WatchCounter'
import SimpleCounterCompositionApi from '@/components/04SimpleCounterCompositionApi'
import TodoList from '@/components/05TodoList'
import SimpleFetch from '@/components/06SimpleFetch'
import SuspenseFetch from '@/components/07SuspenseFetch'

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
    SuspenseFetch,
  }
}
</script>
