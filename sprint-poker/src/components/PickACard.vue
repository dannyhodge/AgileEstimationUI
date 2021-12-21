<template>
  <div id="bottomSection">
    <div id="allCards">
      <div v-for="card in cardData" :key="card.score">
        <div class="card" v-bind:class="{ height: card.height }">
          <div class="card-content">
            <p class="title">{{ card.score }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PickACard",
  data: function () {
    return {
      activeCard: 1,
      cardData: [
        {
          score: 1,
          height: 50,
        },
        {
          score: 2,
          height: 50,
        },
        {
          score: 3,
          height: 50,
        },
        {
          score: 5,
          height: 300,
        },
        {
          score: 8,
          height: 50,
        },
        {
          score: 13,
          height: 50,
        },
        {
          score: 21,
          height: 50,
        },
        {
          score: 34,
          height: 50,
        },
      ],
    };
  },
  methods: {
    clickMe: function clickMe() {
      this.tableData[0].userName = this.userName;
      this.tableData[0].score = this.userScore;
    },
    bringToFront: function (card) {
      if (this.activeCard == card.zIndex) {
        return 100;
      }
    },
  },
  watch: {},
  mounted: function () {},
};
</script>
<style>
#bottomSection {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
}
.card {
  width: 12%;
  height: 175px;
  float: left;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 30%),
    0 0px 0 1px rgb(10 10 10 / 3%) !important;
  margin-left: -3%;
  margin-top: 25px;
  min-width: 120px;
}
.card:hover {
  z-index: 1000;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 30%),
    0 0px 0 1px rgb(10 10 10 / 40%) !important;

  margin-top: 0px;
  height: 200px;
}
.card .card-content .title {
  text-align: center;
}
#allCards {
  width: 70%;
  height: 200px;

  margin-left: 25%;
}
</style>