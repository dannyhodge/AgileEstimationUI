<template>
  <div id="mainArea">
    <h1>This is my Sprint Poker app 3!</h1>
    <section>
      <b-field label="Name: ">
        <b-input v-model="userName"></b-input>
      </b-field>

      <b-field label="Score: ">
        <b-input v-model="userScore"></b-input>
      </b-field>

      <b-button @click="clickMe">Click Me</b-button>
    </section>

    <section>
      <b-table :data="tableData" :columns="columns"></b-table>
    </section>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      userName: "",
      userScore: 0,

      tableData: [
        { score: 0, userName: "temp" },
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
          field: "userName",
          label: "Username",
        },
        {
          field: "score",
          label: "score",
          width: "40",
          numeric: true,
        },
      ],
    };
  },
  methods: {
    clickMe: function clickMe() {
      this.tableData[0].userName = this.userName;
      this.tableData[0].score = this.userScore;
    },
  },
  watch: {},
  mounted: function () {},
};
</script>
<style>
#mainArea {
  width: 50%;
  margin-left: 25%;
}
</style>