<template>
  <div class="form-v2">
    <a class="back-link" @click="$router.go(-1)" ><i class="fa fa-arrow-left"></i> <span>back</span></a>
    <div class="page-content">
      <div class="form-v2-content">
        <div class="form-left">
          <img src="../static/register-bg.jpg" alt="form" />
          <div class="text-1">
            <p>after login<span>you can change your <br> information</span></p>
          </div>
          <div class="text-2">
            <p><span>Online Resume</span></p>
          </div>
        </div>
        <form
          class="form-detail"
          action="/register"
          @submit="addUser"
          method="POST"
        >
          <h2>create a new account</h2>
         <div class="form-row">
            <label for="your_email">full name :</label>
            <b-field>
            <b-input placeholder="mustafa fathi ibrahim"
              type="text"
              v-model="fullName"
              :validation-message="nameErrorMessage"
              pattern="[a-z-A-Z ]*">
            </b-input>
        </b-field>
         </div>
         <br>
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
                  placeholder="aw8Rv13@sv1#da5"
                  password-reveal>
                  min="10"
              </b-input>
            </b-field>
          </div>
          <br>
          <div class="form-row">
            <label for="your_email">confirm password:</label>
            <b-field>
              <b-input type="password"
                  icon-pack="fas"
                  v-model="confirmPassword"
                  placeholder="aw8Rv13@sv1#da5"
                  id="confirm_password"
                  password>
              </b-input>
            </b-field>
          </div>
          <br>
          <span class="checked-label">
           already have an account ?
                <nuxt-link to="/login" class="text"> login</nuxt-link>
          </span>
           
          <div class="form-row-last">
            <br>
            <input
              type="submit"
              name="register"
              class="register"
              value="register"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware({app, redirect}) {
    const cookieRes = app.$cookies.get('user_token')
    if (cookieRes) {
      redirect('/profile')
    }
  },
  head() {
    return {
      title: 'Online Resume Register',
     
    }
  },
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      nameErrorMessage: 'Small English letters only',
      passwordErrorMessage: '',
      emailErrorMessage: 'Please enter a valid email * example (name@email.com)',
      confirmPassword: '',
    }
  },
  methods: {
    async addUser(e) {
      e.preventDefault()
      let state = false;
      if (this.password === this.confirmPassword) {
        state = true;
      } else {
        state = false
        this.$buefy.snackbar.open({
          duration: 2000,
          message: 'Password does not match',
          type: 'is-danger',
          position: 'is-top',
          actionText: 'hide',
        })
      }
      if (state) {
        await this.$axios.$post('http://localhost:9000/api/register', {
          password: this.password,
          email: this.email,
          fullname: this.fullName,
          socialMedia: {
            facebook: '',
            twitter: '',
            linkedin: '',
            github: ''
          }
        })
        .then(data => {
          if (data.status == 'sucsses') {
            // Clear red border from input
            document.getElementById('confirm_password').classList.remove('wrong')
            // add notification
            this.$buefy.snackbar.open({
              duration: 2000,
              message: data.message,
              type: 'is-info',
              position: 'is-top',
              actionText: 'hide',
            })
            this.$router.push('/profile')
          } else {
            this.$buefy.snackbar.open({
              duration: 2000,
              message: data.message,
              type: 'is-danger',
              position: 'is-top',
              actionText: 'hide',
            })
          }
          
        })
        .catch(() => {
          console.log('No user added. Try again')
        })      
      }
    }
  },
}

</script>

<style>

</style>
