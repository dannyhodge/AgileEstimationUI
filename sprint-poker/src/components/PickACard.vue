<template>
  <div id="bottomSection">
    <div id="allCards">
      <div v-for="card in cardData" :key="card.score">
        <div
          class="card score"
          v-bind:style="[
            {
              height:
                card.score == activeCard || card.score == hoveredCard
                  ? '200px'
                  : '175px',
            },
            {
              marginTop:
                card.score == activeCard || card.score == hoveredCard
                  ? '0px'
                  : '25px',
            },
            {
              zIndex:
                card.score == activeCard || card.score == hoveredCard
                  ? 1000
                  : 1,
            },
            {
              boxShadow:
                card.score == activeCard
                  ? '0 0.5em 1em -0.125em rgb(10 10 10 / 50%), 0 0px 0 2px rgb(121 87 213 / 100%) !important'
                  : card.score == hoveredCard
                  ? '0 0.5em 1em -0.125em rgb(10 10 10 / 50%), 0 0px 0 2px rgb(10 10 10 / 3 0%) !important'
                  : '0 0.5em 1em -0.125em rgb(10 10 10 / 50%),0 0px 0 1px rgb(10 10 10 / 3%) !important',
            },
          ]"
          @click="cardSelected(card)"
          @mouseover="onHoverCard(card)"
          @mouseleave="onExitCard(card)"
        >
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
  props: {
    mySocket: Object,
  },
  data: function () {
    return {
      activeCard: 0,
      hoveredCard: 0,
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
          height: 50,
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
      socket: Object,
    };
  },
  created() {
    this.socket = this.mySocket;
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
    cardSelected: function (card) {
      this.activeCard = card.score;
      this.$emit("changeSelection", card.score);
      this.socket.emitMyScore(this.socket.socket.id, card.score);
    },
    onHoverCard: function (card) {
      this.hoveredCard = card.score;
    },
    onExitCard: function () {
      this.hoveredCard = 0;
    },
  },
};
</script>
<style>
#bottomSection {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
}

.score {
  width: 130px;
  float: left;
  margin-left: -3%;
  border-radius: 15px 15px 0px 0px!important;
}

.card .card-content .title {
  text-align: center;
}
#allCards {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
}
</style>