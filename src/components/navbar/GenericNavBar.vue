<template>
  <div class="navbar-container">
    <b-navbar>

      <template #brand>
        <img
            src="../../assets/gourd.jpeg"
            alt="Lightweight UI components for Vue.js based on Bulma"
            class="brand-img"
        >
        <h2>Novel Hoarder</h2>
      </template>

      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/novels' }">
          Novel List
        </b-navbar-item>


        <!-- implement info pages -->
        <!-- <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown> -->
      </template>

      <!-- implement login logic -->
      <!-- <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template> -->
    </b-navbar>

  </div>
</template>
  
<script>
export default {
  name: 'GenericNavBar',
  props: {
    msg: String
  }
};
</script>
  
<style scoped>

::v-deep .navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

::v-deep .navbar-brand {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

::v-deep .navbar-menu > .navbar-start {
  display: flex;
  gap: 2rem;
}

::v-deep .navbar-brand > h2 {
  font-family: 'Water Brush', cursive;
  margin: 0%;
}

.brand-img {
  width: 50px;
  height: 50px;
}
</style>
  