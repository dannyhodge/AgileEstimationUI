<template>
  <div id="pastEstimations">
    <section>
      <b-table :data="tableData" :columns="columns"></b-table>
    </section>
  </div>
</template>
<script>
export default {
  name: 'PastEstimations',
  data: function () {
    return {
      userName: "",
      userScore: 0,

      tableData: [
        {
          score: 1,
          ticket: "Add text to the big button on the website",
        },
        {
          score: 2,
          ticket: "Add text to the other big button on the website",
        },
        {
          score: 3,
          ticket: "Create a new website for doing retrospectives",
        },
        {
          score: 4,
          ticket: "Try and understand Signal.IO",
        },
        {
          score: 5,
          ticket: "Make sure the website looks great",
        },
      ],
      columns: [
        {
          field: "ticket",
          label: "Ticket",
        },
        {
          field: "score",
          label: "Score",
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
#pastEstimations {
  width: 30%;
  margin-left: 15%;
  float: left;
}
</style>