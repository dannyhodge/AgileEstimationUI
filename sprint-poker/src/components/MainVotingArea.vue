<template>
  <div id="mainArea">
    <CurrentEstimations  v-bind:mySocket="socket" :myScore="myScore" />
    <PastEstimations />
  </div>
</template>
<script>
import CurrentEstimations from "./CurrentEstimations.vue";
import PastEstimations from "./PastEstimations.vue";

export default {
  components: { CurrentEstimations, PastEstimations },
  props: {
    myScore: Number,
    mySocket: Object,
  },
  data: function () {
    return {
      socket: Object,
    };
  },
  created() {
    this.socket = this.mySocket;
  },
  name: "MainVotingArea",
};
</script>
<style>
#mainArea {
  width: 70%;
  margin-left: 15%;
  margin-top: 50px;
}
</style>