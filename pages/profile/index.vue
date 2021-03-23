<template>
 <div class="profile-page">
   <div class="form-v2">
    <a class="back-link" @click="$router.go(-1)" ><i class="fa fa-arrow-left"></i> <span>back</span></a>
    <div>
      <div class="loading-box" v-if="$fetchState.pending">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; background: #fff; display: block"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient
              id="ldio-f06atycv7si-gradient"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop offset="10%" stop-color="black" stop-opacity="0"></stop>
              <stop offset="100%" stop-color="white" stop-opacity="1"></stop>
            </linearGradient>
            <mask
              id="ldio-f06atycv7si-mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="100"
              height="100"
            >
              <rect
                x="22"
                y="8"
                width="56"
                height="54"
                fill="url(#ldio-f06atycv7si-gradient)"
              ></rect>
            </mask>
            <path
              id="ldio-f06atycv7si-steam"
              d="M0-4c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0 c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9h0c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9"
              stroke-width="6"
              stroke-linecap="round"
              fill="#f00"
              stroke="#f8b26a"
            ></path>
          </defs>
          <g mask="url(#ldio-f06atycv7si-mask)">
            <use x="29" y="18" xlink:href="#ldio-f06atycv7si-steam">
              <animate
                attributeName="y"
                values="4;-14"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.5s"
              ></animate>
            </use>
            <use x="47" y="18" xlink:href="#ldio-f06atycv7si-steam">
              <animate
                attributeName="y"
                values="0;-18"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.25s"
              ></animate>
            </use>
            <use x="64" y="18" xlink:href="#ldio-f06atycv7si-steam">
              <animate
                attributeName="y"
                values="-4;-22"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.3333333333333333s"
              ></animate>
            </use>
          </g>
          <path
            d="M81.2,52.5l-5.2,0V49c0-1.6-1.3-3-3-3H20c-1.6,0-3,1.3-3,3v11.6C17,71.3,25.7,80,36.5,80h20.1 c7.1,0,13.3-3.8,16.7-9.5h8.3c5.2,0,9.3-4.4,9-9.6C90.2,56.1,86,52.5,81.2,52.5z M81.5,67.5h-6.8c0.8-2.2,1.3-4.5,1.3-7v-5h5.5 c3.3,0,6,2.7,6,6S84.8,67.5,81.5,67.5z"
            fill="#f8b26a"
          ></path>
          <path
            d="M78.8,88H19.2c-1.1,0-2-0.9-2-2s0.9-2,2-2h59.5c1.1,0,2,0.9,2,2S79.9,88,78.8,88z"
            fill="#d1d1d1"
          ></path>
        </svg>
      </div>
      <div class="error-page" v-else-if="$fetchState.error">
          <div class="code-area">
            <span style="color: #777;font-style:italic;">
                // 404 page not found.
            </span>
            <span>
                <span style="color:#d65562;">if</span>
                (
                <span style="color:#4ca8ef;">!</span><span style="font-style: italic;color:#bdbdbd;">found</span>)
                {
            </span>
            <span>
                <span style="padding-left: 15px;color:#2796ec">
                <i style="width: 10px;display:inline-block"></i>throw
                </span>
                <span>
                (<span style="color: #a6a61f">404 Error"</span>);
                </span>
                <span style="display:block">}</span>
                <span style="color: #777;font-style:italic;">
                // <nuxt-link to="/">Go home!</nuxt-link>
                </span>
            </span>
        </div>
      </div>
      <div v-else class="page-content">
        <div class="form-v2-content">
          <form
            class="form-detail"
            action="/profile"
            method="POST"
          >
            <form-wizard 
              @on-complete="completeInfo"
              shape="circle"
              color="#20a0ff"
              title="Complete Your profile Information"
              subtitle="subtitle"
            >
              <tab-content title="Personal details" icon="fa fa-user">
                <div class="personalDetails">
                  <div class="form-row row">
                      <div class="col-md-3">
                        <label>full name :</label>
                        <b-field>
                          <b-input placeholder="mustafa fathi ibrahim"
                            type="text"
                            v-model="userData.fullname"
                            :validation-message="nameErrorMessage"
                            pattern="[a-z-A-Z ]*">
                          </b-input>
                        </b-field>
                      </div>
                      <div class="col-md-3">
                        <label>email address :</label>
                        <b-field>
                          <b-input 
                            icon-pack="fas"
                            icon="envelope"
                            :validation-message="emailErrorMessage"
                            v-model="userData.email"
                            placeholder="name@email.com" type="email">
                          </b-input>
                        </b-field>
                      </div>
                      <div class="col-md-3">
                        <label>job title :</label>
                        <b-field>
                          <b-input placeholder="Front end developer"
                            type="text"
                            v-model="userData.jobTitle"
                            :validation-message="nameErrorMessage"
                            pattern="[a-z-A-Z ]*">
                          </b-input>
                        </b-field>
                      </div>
                      <div class="col-md-3">
                        <label>Address :</label>
                        <b-field>
                          <b-input placeholder="Egypt -> El-Behira Badr -> City"
                            type="text"
                            v-model="userData.address"
                            :validation-message="nameErrorMessage"
                            pattern="[a-z-A-Z - > ]*">
                          </b-input>
                        </b-field>
                      </div>
                  </div>
                  <br>
                  <div class="form-row row">
                    <div class="col-md-3">
                      <label>Your Image url :</label>
                      <b-field>
                        <b-input placeholder="put your image link"
                          type="text"
                          v-model="userData.imageUrl">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="col-md-3">
                      <label>Birth date :</label>
                      <b-field>
                        <b-input placeholder="10/07/1998"
                          type="text"
                          v-model="userData.birthDate">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="col-md-3">
                      <label>Nationality :</label>
                      <b-field>
                        <b-input placeholder="Egyption"
                          type="text"
                          v-model="userData.nationality"
                          :validation-message="nameErrorMessage"
                          pattern="[a-z-A-Z ]*">
                        </b-input>
                      </b-field>
                    </div>
                    <div class="col-md-3">
                      <label>Phone :</label>
                      <b-field>
                        <b-input placeholder="01069966454"
                          type="text"
                          v-model="userData.phone"
                          >
                        </b-input>
                      </b-field>
                    </div>
                  </div>
                  <br>
                  <div class="form-row row">
                    <div class="col-12">
                      <label>header message :</label>
                      <b-field>
                          <b-input maxlength="200" v-model="userData.headerMessage" type="textarea"></b-input>
                      </b-field>
                    </div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Social Media" icon="fa fa-hashtag">
                  <div class="socialMedia">
                    <div class="form-row row">
                      <div class="col-3">
                        <label>facebook :</label>
                        <b-field>
                            <b-input placeholder="put your username only *(deshaXii7)"
                            type="text"
                            v-model="userData.socialMedia.facebook">
                          </b-input>
                        </b-field>
                      </div>
                      <div class="col-3">
                        <label>twitter :</label>
                        <b-field>
                            <b-input placeholder="put your username only *(deshaXii7)"
                            type="text"
                            v-model="userData.socialMedia.twitter">
                          </b-input>
                        </b-field>
                      </div>
                      <div class="col-3">
                        <label>github :</label>
                        <b-field>
                            <b-input placeholder="put your username only *(deshaXii7)"
                            type="text"
                            v-model="userData.socialMedia.github">
                          </b-input>
                        </b-field>
                      </div>
                      <div class="col-3">
                        <label>linkedin :</label>
                        <b-field>
                            <b-input placeholder="put your username only *(deshaXii7)"
                            type="text"
                            v-model="userData.socialMedia.linkedin">
                          </b-input>
                        </b-field>
                      </div>
                    </div>
                  </div>
              </tab-content>
              <tab-content title="Experiences" icon="fa fa-briefcase">
                <div class="experiences">
                  <div class="form-row row experience-box">
                    <div class="col-12">
                      <!--          Add Svg Icon-->
                      <svg
                        @click.prevent="addField(userData.experiences)"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="green"
                          d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                        />
                      </svg>
                    </div>
                    <div class="col-md-12" 
                      v-for="(experience, index) in userData.experiences"
                      :key="index"
                    >

                      <!--          Remove Svg Icon-->
                      <svg
                        v-show="userData.experiences.length > 1"
                        @click.prevent="removeField(index, userData.experiences)"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="#EC4899"
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                        />
                      </svg>
                      <div class="experience-item row">
                        <div class="col-md-3">
                          <label>Job name :</label>
                          <b-field>
                            <b-input placeholder="front end developer"
                              type="text"
                              v-model="experience.jobName"
                              :validation-message="nameErrorMessage"
                              pattern="[a-z-A-Z ]*">
                            </b-input>
                          </b-field>
                        </div>
                        <div class="col-md-3">
                          <label>company name :</label>
                          <b-field>
                            <b-input placeholder="el shrka"
                              type="text"
                              v-model="experience.companyName"
                              :validation-message="nameErrorMessage"
                              pattern="[a-z-A-Z ]*">
                            </b-input>
                          </b-field>
                        </div>
                        <div class="col-md-4">
                          <label>what you do :</label>
                          <b-field>
                            <b-input placeholder="i create a ......"
                              type="text"
                              v-model="experience.wid"
                              :validation-message="nameErrorMessage"
                              pattern="[a-z-A-Z ]*">
                            </b-input>
                          </b-field>
                        </div>
                        <div class="col-md-1">
                          <label>from :</label>
                          <b-field>
                            <b-input placeholder="2019"
                              type="text"
                              v-model="experience.from">
                            </b-input>
                          </b-field>
                        </div>
                        <div class="col-md-1">
                          <label>to :</label>
                          <b-field>
                            <b-input placeholder="2020 or current"
                              type="text"
                              v-model="experience.to">
                            </b-input>
                          </b-field>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Educations" icon="fa fa-graduation-cap">
                <div class="educations">
                  <div class="form-row row education-box">
                    <div class="col-12">
                      <!--          Add Svg Icon-->
                      <svg
                        @click.prevent="addField(userData.educations)"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="green"
                          d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                        />
                      </svg>
                    </div>

                      
                    <div class="col-md-12" 
                      v-for="(education, index) in userData.educations"
                      :key="index"
                    >
                      <!--          Remove Svg Icon-->
                      <svg
                        v-show="userData.educations.length > 1"
                        @click.prevent="removeField(index, userData.educations)"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="#EC4899"
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                        />
                      </svg>

                      <div class="education-item row">
                        <div class="col-md-4">
                          <label>Name of the certificate :</label>
                          <b-field>
                            <b-input placeholder="telecommunications engineering"
                              type="text"
                              v-model="education.certificateName"
                              :validation-message="nameErrorMessage"
                              pattern="[a-z-A-Z ]*">
                            </b-input>
                          </b-field>
                        </div>
                        <div class="col-md-4">
                          <label>College Name :</label>
                          <b-field>
                            <b-input placeholder="Cairo University"
                              type="text"
                              v-model="education.collegeName"
                              :validation-message="nameErrorMessage"
                              pattern="[a-z-A-Z ]*">
                            </b-input>
                          </b-field>
                        </div>
                        <div class="col-md-2">
                          <label>from :</label>
                          <b-field>
                            <b-input placeholder="2019"
                              type="text"
                              v-model="education.from">
                            </b-input>
                          </b-field>
                        </div>
                        <div class="col-md-2">
                          <label>to :</label>
                          <b-field>
                            <b-input placeholder="2020 or current"
                              type="text"
                              v-model="education.to">
                            </b-input>
                          </b-field>
                        </div>
                        
                      </div>
                    </div>
                    <br>
                  </div>
                </div>
              </tab-content>
              <tab-content title="Skills" icon="fa fa-cogs">
                
              </tab-content>
              <tab-content title="Layout" icon="fa fa-id-card">
                <section class="choose-layout">
                  <b-field>
                      <div class="row">
                        <div class="col-md-3 offset-md-1">
                          <b-radio-button v-model="userData.cvLayout"
                            native-value="layout1">
                            <img src="/layout1.jpg" alt="">
                          </b-radio-button>
                        </div>
                        <div class="col-md-3">
                          <b-radio-button v-model="userData.cvLayout"
                              native-value="layout2">
                            <img src="/layout2.png" alt="">
                          </b-radio-button>
                        </div>
                        <div class="col-md-3">
                          <b-radio-button v-model="userData.cvLayout"
                          native-value="layout3">
                            <img src="/layout3.jpg" alt="">
                          </b-radio-button>
                        </div>
                      </div>
                  </b-field>
                </section>
              </tab-content>
            </form-wizard>
          </form>
          
        </div>
      </div>
      <!-- <span v-if="this.$nuxt.layoutName == 'style2'"> style 2 </span>
      <button @click="changeLayout(1)">change layout 1</button>
      <button @click="changeLayout(2)">change layout 2</button> -->
      <!-- -if="this.$nuxt.layoutName == 'style1'" -->
    </div>
  </div>
 </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Complete-Profile',
  head() {
    return {
      title: 'Complete Profile Information'
    }
  },
  components: {
    FormWizard,
    TabContent
  },
  fetchOnServer: false,
  async fetch() {
    await this.$axios
    .$get(`http://localhost:9000/api/users/${this.userId._id}`)
    .then(res => {
      this.userData = res
      // if (this.userData._id !== this.userId) {
      //   throw new Error('404 Error')
      // }
    })
    .catch((e) => {
      throw new Error(e)
    })
  },
  data() {
    return {
      userData: null,
      radioButton: 'layout1',
      emailErrorMessage: 'Please enter a valid email * example (name@email.com)',
      nameErrorMessage: 'Small English letters only',
    }
  },
  middleware({app, redirect}) {
    const cookieRes = app.$cookies.get('user_token')
    if (!cookieRes) {
      redirect('/login')
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    }),
    ...mapState({
      userId: state => state.auth.user
    })
  },
  methods: {
    onComplete: function() {
      alert('Yay. Done!');
    },
    validateFirstStep() {
      return new Promise((resolve, reject) => {
        this.$refs.ruleForm.validate((valid) => {
          resolve(valid);
        });
      })
    },
    // changeLayout(layout) {
    //   this.$nuxt.setLayout(`style${layout}`)
    // },
    completeInfo() {
      const cookieRes = this.$cookies.get('user_token')
      this.$axios.$post('http://localhost:9000/api/profile', {
        id: this.userData._id,
        birthDate: this.userData.birthDate,
        cvLayout:  this.userData.cvLayout,
        fullName: this.userData.fullname,
        email: this.userData.email,
        phone: this.userData.phone,
        address: this.userData.address,
        nationality: this.userData.nationality,
        headerMessage: this.userData.headerMessage,
        imageUrl: this.userData.imageUrl,
        jobTitle: this.userData.jobTitle,
        socialMedia: {
          facebook: this.userData.socialMedia.facebook,
          twitter: this.userData.socialMedia.twitter,
          linkedin: this.userData.socialMedia.linkedin,
          github: this.userData.socialMedia.github,
        },
        educations: this.userData.educations,
        experiences: this.userData.experiences,
        completeProfile: true
      },
      {
        headers: { 'Authorization': cookieRes }
      }).then( data => {
        this.$router.push(`/profile/${data.userID}`)
        this.$buefy.snackbar.open({
          duration: 2000,
          message: data.message,
          type: 'is-info',
          position: 'is-bottom-left',
          actionText: 'اخفاء',
        })
      })
    },
    addField(fieldType) {
      fieldType.push({});
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },
  },
}
</script>

<style>
.choose-layout .b-radio.radio.button {
    display: block;
    height: 400px;
    border-radius: 5px;
    margin: 0;
    border: none;
    padding: 10px;
    padding-bottom: 5px;
}
.choose-layout .b-radio.radio.button img {
  height: 100%;
  object-fit: fill;
}
.wizard-icon-circle.checked i {
  color: rgb(32, 160, 255);
}
span.stepTitle {
    margin: 10px;
}
.wizard-icon-circle.checked {
  outline: none;
}
.form-v2-content .experience-box,
.form-v2-content .education-box {
  box-shadow: none;
    padding: 0;
    border-radius: 0;
}
.wizard-tab-container {
  margin: 30px 0;
}
.education-box .col-md-12,
.experience-box .col-md-12 {
  margin-bottom: 30px;
}
.experience-box .col-md-12:last-of-type,
.education-box .col-md-12:last-of-type {
  margin: 0;
}
.education-box svg,
.experience-box svg {
  cursor: pointer;
}
.vue-form-wizard .wizard-btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857;border-radius:4px}.vue-form-wizard .wizard-btn.disabled,.vue-form-wizard .wizard-btn[disabled],fieldset[disabled] .vue-form-wizard .wizard-btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.vue-form-wizard *{-webkit-box-sizing:border-box;box-sizing:border-box}.vue-form-wizard a{text-decoration:none}.vue-form-wizard .wizard-nav{margin-bottom:0;padding-left:0;list-style:none}.vue-form-wizard .wizard-nav>li{position:relative;display:block}.vue-form-wizard .wizard-nav>li>a{position:relative;display:block;padding:10px 15px}.vue-form-wizard .wizard-nav>li>a:focus,.vue-form-wizard .wizard-nav>li>a:hover{text-decoration:none;background-color:#eee}.vue-form-wizard .wizard-nav>li.disabled>a{color:#777}.vue-form-wizard .wizard-nav>li.disabled>a:focus,.vue-form-wizard .wizard-nav>li.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.vue-form-wizard .wizard-progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;transition:width .6s ease}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn,.vue-form-wizard .wizard-btn{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:2px;background-color:transparent;font-size:14px;font-weight:600;padding:6px 12px;min-width:140px}.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:focus,.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn:hover,.vue-form-wizard .wizard-btn:focus,.vue-form-wizard .wizard-btn:hover{outline:0!important}.vue-form-wizard .wizard-nav-pills{margin-top:0;position:relative;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.vue-form-wizard .wizard-nav-pills a,.vue-form-wizard .wizard-nav-pills li{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-positive:1;flex-grow:1}.vue-form-wizard .wizard-nav-pills>li>a,.vue-form-wizard .wizard-nav-pills a{display:-webkit-box;display:-ms-flexbox;display:flex}.vue-form-wizard .wizard-nav-pills>li>a{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0;margin:0 auto;color:rgba(0,0,0,.2);position:relative;top:3px}.vue-form-wizard .wizard-nav-pills>li>a:focus,.vue-form-wizard .wizard-nav-pills>li>a:hover{background-color:transparent;color:rgba(0,0,0,.2);outline:0!important}.vue-form-wizard .wizard-nav-pills>li>a.disabled{pointer-events:none;cursor:default}.vue-form-wizard .wizard-nav-pills>li.active>a,.vue-form-wizard .wizard-nav-pills>li.active>a:focus,.vue-form-wizard .wizard-nav-pills>li.active>a:hover{background-color:transparent;-webkit-transition:font-size .2s linear;transition:font-size .2s linear}.vue-form-wizard .wizard-nav-pills>li.active>a .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:focus .wizard-icon,.vue-form-wizard .wizard-nav-pills>li.active>a:hover .wizard-icon{color:#fff;font-size:24px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .2s linear;transition:all .2s linear}.vue-form-wizard{padding-bottom:20px}.vue-form-wizard .is_error{border-color:#c84513!important}.vue-form-wizard .is_error .icon-container{background:#c84513!important}.vue-form-wizard.xs .wizard-icon-circle{width:40px;height:40px;font-size:16px}.vue-form-wizard.xs .wizard-icon-circle.tab_shape{height:25px}.vue-form-wizard.xs .wizard-nav-pills>li.active>a .wizard-icon{font-size:16px}.vue-form-wizard.xs .wizard-navigation .wizard-progress-with-circle{position:relative;top:25px;height:4px}.vue-form-wizard.sm .wizard-icon-circle{width:50px;height:50px;font-size:20px}.vue-form-wizard.sm .wizard-icon-circle.tab_shape{height:30px}.vue-form-wizard.sm .wizard-nav-pills>li.active>a .wizard-icon{font-size:20px}.vue-form-wizard.sm .wizard-navigation .wizard-progress-with-circle{position:relative;top:30px;height:4px}.vue-form-wizard.md .wizard-icon-circle{width:70px;height:70px;font-size:24px}.vue-form-wizard.md .wizard-icon-circle.tab_shape{height:40px}.vue-form-wizard.md .wizard-nav-pills>li.active>a .wizard-icon{font-size:24px}.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard.lg .wizard-icon-circle{width:90px;height:90px;font-size:28px}.vue-form-wizard.lg .wizard-icon-circle.tab_shape{height:50px}.vue-form-wizard.lg .wizard-nav-pills>li.active>a .wizard-icon{font-size:28px}.vue-form-wizard.lg .wizard-navigation .wizard-progress-with-circle{position:relative;top:50px;height:4px}.vue-form-wizard .wizard-icon-circle{font-size:18px;border:3px solid #f3f2ee;border-radius:50%;font-weight:600;width:70px;height:70px;background-color:#fff;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}.vue-form-wizard .wizard-icon-circle.square_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle.tab_shape{width:100%;min-width:100px;height:40px;border:none;background-color:#f3f2ee;border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;border-radius:50%;margin:-3px}.vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape{border-radius:0}.vue-form-wizard .wizard-icon-circle .wizard-icon-container.tab_shape{border-radius:0;margin:0}.vue-form-wizard .wizard-icon-circle .wizard-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-form-wizard .wizard-tab-content{min-height:100px;}.vue-form-wizard .wizard-header{padding:15px;position:relative;border-radius:3px 3px 0 0;text-align:center}.vue-form-wizard .wizard-title{color:#252422;font-weight:300;margin:0;text-align:center}.vue-form-wizard .category{font-size:14px;font-weight:400;color:#9a9a9a;margin-bottom:0;text-align:center}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle{position:relative;top:40px;height:4px}.vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar{-webkit-box-shadow:none;box-shadow:none;-webkit-transition:width .3s ease;transition:width .3s ease}.vue-form-wizard .clearfix:after{content:"";clear:both;display:table}.vue-form-wizard .wizard-card-footer{padding:0 20px}.vue-form-wizard .wizard-card-footer .wizard-footer-left{float:left}.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:right}@media screen and (max-width:350px){.vue-form-wizard .wizard-card-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vue-form-wizard .wizard-card-footer .wizard-footer-left,.vue-form-wizard .wizard-card-footer .wizard-footer-right{float:none;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vue-form-wizard .wizard-card-footer .wizard-footer-right button{margin-top:10px}}.vue-form-wizard.vertical .wizard-card-footer{display:block}.vue-form-wizard.vertical .wizard-nav-pills{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vue-form-wizard.vertical .wizard-navigation{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.vue-form-wizard.vertical .wizard-card-footer{padding-top:30px}
</style>