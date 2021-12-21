<template>
  <div id="app">
    <Header />
    <MainVotingArea />
    <PickACard />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainVotingArea from './components/MainVotingArea.vue'
import PickACard from './components/PickACard.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainVotingArea,
    PickACard
    
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
