<template>
  <div id="currentEstimations">
    <section style="display: none">
      <b-field label="Name: ">
        <b-input v-model="userName"></b-input>
      </b-field>

      <b-field label="Score: ">
        <b-input v-model="userScore"></b-input>
      </b-field>

      <b-button>Click Me</b-button>
    </section>

    <section>
      <b-table :data="tableData" :columns="columns"></b-table>
    </section>
  </div>
</template>
<script>
export default {
  name: "CurrentEstimations",
  props: {
    myScore: Number,
    mySocket: Object,
  },
  data: function () {
    return {
      userName: "",
      userScore: 0,

      tableData: [
        {
          score: 0,
          userName: "temp",
        },
        {
          score: 1,
          userName: "Danny",
        },
        {
          score: 2,
          userName: "John",
        },
        {
          score: 3,
          userName: "Tina",
        },
        {
          score: 4,
          userName: "Clarence",
        },
        {
          score: 5,
          userName: "Anne",
        },
      ],
      columns: [
        {
          field: "Name",
          label: "Username",
        },
        {
          field: "Score",
          label: "Score",
          width: "40",
          numeric: true,
        },
      ],
    };
  },
  created() {
    this.socket = this.mySocket;
    this.socket.socket.on("scores changed", (data) => {
      this.tableData = data;
    });
  },
  watch: {
    myScore: function () {
      this.tableData[0].score = this.myScore;
    },
  },
  mounted: function () {
    this.tableData[0].userName = this.userName;
  },
};
</script>
<style>
#currentEstimations {
  width: 55%;
  float: left;
}
</style>