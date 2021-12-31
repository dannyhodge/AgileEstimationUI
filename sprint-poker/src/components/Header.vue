<template>
  <div>
    <b-navbar :shadow="true">
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
             <b-button label="Log in" @click="openLogin()" />
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section>
      <b-modal :width="1040" v-bind:can-cancel="false" v-bind:active="loginOpen">
        <div class="card">
          <form action="">
            <div class="modal-card" style="width: auto">
              <header class="modal-card-head">
                <p class="modal-card-title">Login</p>
                <button type="button" class="delete" @click="closeLogin()" />
              </header>
              <section class="modal-card-body">
                <b-field label="Email">
                  <b-input
                    type="email"
                    :value="email"
                    placeholder="Your email"
                    required
                  >
                  </b-input>
                </b-field>

                <b-field label="Password">
                  <b-input
                    type="password"
                    :value="password"
                    password-reveal
                    placeholder="Your password"
                    required
                  >
                  </b-input>
                </b-field>

                <b-checkbox>Remember me</b-checkbox>
              </section>
              <footer class="modal-card-foot">
                <b-button label="Close" @click="closeLogin()" />
                <b-button label="Login" type="is-primary" />
              </footer>
            </div>
          </form>
        </div>
      </b-modal>
    </section>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      loginOpen: true,
    };
  },
  methods: {
    closeLogin: function () {
      this.loginOpen = false;
    },
    openLogin: function () {
      this.loginOpen = true;
    },
  },
};
</script>
<style>
.navbar-item img {
  max-height: 3rem !important;
}
</style>