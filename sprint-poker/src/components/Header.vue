<template>
  <b-navbar :shadow=true>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/logo3.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#"> Home </b-navbar-item>
      <b-navbar-dropdown label="Rooms">
        <b-navbar-item href="#"> Room 1 </b-navbar-item>
        <b-navbar-item href="#"> Room 2 </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light"> Log in </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  data: function () {
    return {
  
    };
  },
};
</script>
<style>
.navbar-item img {
  max-height: 3rem !important;
}
</style>