<template>
  <div id="app">
    <Header />
    <MainVotingArea  v-bind:mySocket="socket" v-bind:my-score="myScore" />
    <PickACard v-bind:mySocket="socket" v-on:changeSelection="changeSelection" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainVotingArea from "./components/MainVotingArea.vue";
import PickACard from "./components/PickACard.vue";

import SocketioService from "./services/socketio.services";

export default {
  name: "App",
  data: function () {
    return {
      myScore: 0,
      numPlayers: 0,
      socket: Object
    };
  },
  created() {
    this.socket = SocketioService;
    this.socket.setupSocketConnection();
    this.socket.socket.on("playernumchanged", (data) => {
      this.numPlayers = data;
    });
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  components: {
    Header,
    MainVotingArea,
    PickACard,
  },
  methods: {
    changeSelection: function (userScore) {
      this.myScore = userScore;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
