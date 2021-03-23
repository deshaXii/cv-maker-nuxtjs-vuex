<template>
  <div class="form-v2">
    <a class="back-link" @click="$router.go(-1)" ><i class="fa fa-arrow-left"></i> <span>back</span></a>
    <div class="page-content">
      <div class="form-v2-content">
        <div class="form-left">
          <img src="../static/login-bg.jpg" alt="form" />
          <div class="text-1">
            <p>after login you can<span> start create your reusme </span></p>
          </div>
      
        </div>
        <form
          class="form-detail"
          action="/logn"
          @submit.prevent="getUser"
          method="POST"
        >
          <h2>welcome back</h2>
          <div class="form-row">
            <label for="your_email">email address:</label>
          <b-field>
            <b-input 
              icon-pack="fas"
              icon="envelope"
              :validation-message="emailErrorMessage"
              v-model="email"
              placeholder="name@email.com" type="email">
            </b-input>
          </b-field>
          </div>
<br>
          <div class="form-row">
            <label for="your_email">password:</label>
            <b-field>
              <b-input type="password"
                  icon-pack="fas"
                  v-model="password"
                  password-reveal
                  placeholder="aw8Rv13@sv1#da5">
              </b-input>
            </b-field>
          </div>
            <br>
            <span class="checked-label">
           dont have an account ?
                <nuxt-link to="/register" class="text"> create one</nuxt-link>
          </span>
          <div class="form-row-last">
            <br>
            <input
              type="submit"
              name="register"
              class="register"
              value="login"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
  middleware({app, redirect}) {
    const cookieRes = app.$cookies.get('user_token')
    if (cookieRes) {
      redirect('/profile')
    }
  },
  head() {
    return {
      title: 'Online Resume Login',
    }
  },
  data() {
    return {
      email: '',
      password: '',
      passwordErrorMessage: '',
      emailErrorMessage: 'يرجي ادخال بريد الكتروني صحيح *مثال (name@email.com)',
    }
  },
  methods: {
    ...mapActions({
      loginActions: 'auth/loginActions'
    }),
    ...mapMutations({
      'SET_USER': 'auth/SET_USER'
    }),
    getUser() {
      this.loginActions({email: this.email, password: this.password})
      .then( data => {
        if (data.userData.completeProfile) {
         this.$router.push(`/profile/${data.userData._id}`)
        } else {
          this.$router.push('/profile')
        }
        let {token}  = data;
        this.$cookies.set('user_token', `Bearer ${token}`, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
        this.$buefy.snackbar.open({
          duration: 2000,
          message: data.message,
          type: 'is-info',
          position: 'is-bottom-left',
          actionText: 'اخفاء',
        })
      }) 
      .catch( e => {
        this.$buefy.snackbar.open({
          duration: 2000,
          message: e,
          type: 'is-danger',
          position: 'is-top',
          actionText: 'اخفاء',
        })
      })
    }
  },
 
}

</script>

<style>

</style>
