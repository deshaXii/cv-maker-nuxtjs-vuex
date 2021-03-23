<template>
    <div class="navbar-area">
        <div class="container">
            <b-navbar>
                <template #brand>
                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                        <img
                            src="/logo.png"
                            alt="Online Cv Logo"
                        >
                    </b-navbar-item>
                </template>
                <template #start>
                    <nuxt-link class="navbar-item" to="#">
                        home
                    </nuxt-link>
                    <nuxt-link class="navbar-item" to="#">
                        about
                    </nuxt-link>
                    <nuxt-link class="navbar-item" to="#">
                        site tools
                    </nuxt-link>
                </template>

                <template #end>
                    <b-navbar-item tag="div">
<div class="buttons">
                        <nuxt-link class="button is-light" v-show="!isLoggedIn" to="/login">
                            Login
                        </nuxt-link>
                        <div v-if="!isLoggedIn"></div>
                        <div v-else>
                            <nuxt-link class="button is-light" :to="`/profile/${userId}`">
                                my profile
                            </nuxt-link>
                            <button
                                class="button is-primary"
                                @click="logOut">
                                log out
                            </button>
                        </div>
                        

                        
                            
                        </div>
                    </b-navbar-item>
                </template>
            </b-navbar>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    methods: {
    ...mapActions({
      logOutActions: 'auth/logOutActions',
    }),
    logOut() {
      this.logOutActions().then(() => {
        this.$buefy.snackbar.open({
          duration: 2000,
          message: 'Signed out',
          type: 'is-danger',
          position: 'is-bottom-right',
          actionText: 'hide',
        })
        
      })
    },
  },
   computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
    userId() {
      return this.$store.state.auth.user._id
    }
  },
}
</script>

<style>
.navbar-area {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 0px 5px #3333;
    padding: 10px 0;
}
.button.is-primary {
    background: #3fc380;
}
.button.is-primary:hover {
    background: #359565;
}
.navbar-start .navbar-item {
    margin: 0 15px;
    position: relative;
    text-transform: capitalize;
}
.navbar-start .navbar-item:hover,
.navbar-start .navbar-item:focus {
    background: transparent;
    color: #3fc380;
}
.navbar-start .navbar-item:after {
    position: absolute;
    bottom: -11px;
    left: 50%;
    width: 3px;
    height: 3px;
    background: #333;
    content: '';
    transition: all .3s linear;
    transform: translateX(-50%);
}
.navbar-start .navbar-item:hover:after {
    background: #3fc380;
    width: calc(100% - 20px);
}
</style>