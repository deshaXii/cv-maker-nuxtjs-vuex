<template>
  <div class="profile-page" >
    <a class="back-link" @click="$router.go(-1)" ><i class="fa fa-arrow-left"></i> <span>back</span></a>
    <div class="container">
      <!-- <nuxt-link to="/settings">go to settings </nuxt-link> -->
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
      <div v-else>
        <div class="layout1" v-if="userData.cvLayout === 'layout1'">
          Layout 1 choosed
        </div>
        <div class="layout2" v-else-if="userData.cvLayout === 'layout2'">
          <div class="row">
            <div class="col-md-4 r-b">
              <div class="p-h">
                <div class="ph-img">
                  <img :src="`${userData.imageUrl}`" alt="form" />
                </div>
                <div class="ph-info"> 
                  <h2>{{ userData.fullname }}</h2>
                  <p>{{ userData.jobTitle }}</p>
                  <nuxt-link v-if="sameUser" to="/profile">
                    edit profile</nuxt-link>
                </div>
              </div>
              <div class="lb-contact">
                <h3 class="lb-title">contact</h3>
                <ul>
                  <li>
                    <i class="fa fa-map-marker-alt"></i>
                    <div>
                      <h5>Address</h5>
                      <span>{{ userData.address }}</span>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-birthday-cake"></i>
                    <div>
                      <h5>date of birth</h5>
                      <span>{{ userData.birthDate }}</span>
                    </div>
                  </li>
                   <li>
                    <i class="fa fa-mobile-alt"></i>
                    <div>
                      <h5>phone</h5>
                      <span>{{ userData.phone }}</span>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>
                    <div>
                      <h5>email</h5>
                      <span>{{ userData.email }}</span>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-globe-africa"></i>
                    <div>
                      <h5>nationality</h5>
                      <span>{{ userData.nationality }}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="lb-social-media">
                 <h3 class="lb-title">social media</h3>
                <ul>
                  <li class="facebook">
                    <a :href="`https://www.fb.com/${userData.socialMedia.facebook}`" target="_blank">
                     <h5><i class="fab fa-facebook"></i></h5>  
                    </a>
                  </li>
                  <li class="linkedin">
                    <a :href="`https://www.linkedin.com/in/${userData.socialMedia.linkedin}`" target="_blank">
                     <h5><i class="fab fa-linkedin"></i></h5>  
                    </a>
                  </li>
                  <li class="twitter">
                    <a :href="`https://www.twitter.com/${userData.socialMedia.twitter}`" target="_blank">
                     <h5><i class="fab fa-twitter"></i></h5>  
                    </a>
                  </li>
                  <li class="github">
                    <a :href="`https://www.github.com/${userData.socialMedia.github}`" target="_blank">
                      <h5><i class="fab fa-github"></i></h5>  
                    </a>
                  </li>
                </ul>
              </div>
              <div class="lb-skills"></div>
            </div>
            <div class="col-md-8 r-b-8">
              <div class="rb-header-welcome">
                 <h3 class="rb-title">Profile header</h3>
                <p>
                  {{ userData.headerMessage }}
                </p>
              </div>
              <div class="rb-educations">
                <h3 class="rb-title">education</h3>
                <ul>
                  <li v-for="(education, index) in userData.educations" :key="index">
                    <span class="job-unversity">
                      <span class="from"> {{education.from}} </span>
                      <span class="s-line"></span> 
                      <span class="to"> {{education.to}} </span>
                    </span>
                    <div class="xds-a">
                      <h4 class="education-title">{{education.certificateName}}</h4>
                      <div class="education-unversity-box">
                        <span class="unversity-name">{{education.collegeName}}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="rb-experience">
                <h3 class="rb-title">work experience</h3>
                <ul>
                  <li v-for="(experience, index) in userData.experiences" :key="index">
                    <span class="job-time">
                      <span class="from"> {{experience.from}} </span>
                      <span class="s-line"></span> 
                      <span class="to"> {{experience.to}} </span>
                    </span>
                    <div class="xds-a">
                      <h4 class="job-title"> <span>{{experience.jobName}} </span> <span class="company-name"> at {{experience.companyName}}</span> </h4>
                      <div class="job-company-box">
                        <p>{{experience.wid}}</p>
                      </div>
                    </div>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="layout3" v-else-if="userData.cvLayout === 'layout3'">
          Layout 3 choosed
        </div>
        <div class="default-layout" v-else>
          <div class="row">
            <div class="col-md-12">
              <div class="profile-header">
                <div class="row">
                  <div class="col-3">
                    <div class="my-image-box">
                      <img :src="`${userData.imageUrl}`" alt="form" />
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="my-info-box">
                      <h2>{{ userData.fullname }}</h2>
                      <p>{{ userData.jobTitle }}</p>
                      <nuxt-link v-if="sameUser" to="/profile">
                        edit profile</nuxt-link>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="header-welcome">
                      <p>
                        {{ userData.headerMessage }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="personal-info-box">
                <h3>personal details</h3>
                <ul>
                  <li>
                    <h5>date of birth</h5>
                    <span>{{ userData.birthDate }}</span>
                  </li>
                  <li>
                    <h5>Nationality</h5>
                    <span>{{ userData.nationality }}</span>
                  </li>
                  <li>
                    <h5>Address</h5>
                    <span>{{ userData.address }}</span>
                  </li>
                </ul>
              </div>
              <div class="contact-info-box">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <h5><i class="fa fa-envelope"></i></h5>
                    <a :href="`mailto:${ userData.email }`">
                      <span>{{ userData.email }}</span>
                    </a>
                  </li>
                  <li>
                    <h5><i class="fa fa-phone"></i></h5>
                    <a :href="`tel:${userData.phone}`">
                      <span>{{ userData.phone }}</span>
                    </a>
                  </li>
                  <li>
                    <h5><i class="fab fa-facebook"></i></h5>
                    <a :href="`https://www.fb.com/${userData.socialMedia.facebook}`" target="_blank">
                      <span>/{{userData.socialMedia.facebook}}</span>
                    </a>
                  </li>
                  <li>
                    <h5><i class="fab fa-linkedin"></i></h5>
                    <a :href="`https://www.linkedin.com/in/${userData.socialMedia.linkedin}`" target="_blank">
                      <span>/{{userData.socialMedia.linkedin}}</span>
                    </a>
                  </li>
                  <li>
                    <h5><i class="fab fa-twitter"></i></h5>
                    <a :href="`https://www.twitter.com/${userData.socialMedia.twitter}`" target="_blank">
                      <span>/{{userData.socialMedia.twitter}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-9">
              <div class="experience-box">
                <h3>Professional experience</h3>
                <ul>
                  <li v-for="(experience, index) in userData.experiences" :key="index">
                    <h4 class="job-title">{{experience.jobName}}</h4>
                    <div class="job-company-box">
                      <span class="company-name">{{experience.companyName}}</span>
                      <span class="job-time">{{experience.from}} - {{experience.to}}</span>
                    </div>
                    <p>
                      {{experience.wid}}
                    </p>
                  </li>
                </ul>
              </div>

              <div class="education-box">
                <h3>education</h3>
                <ul>
                  <li v-for="(education, index) in userData.educations" :key="index">
                    <h4 class="education-title">{{education.certificateName}}</h4>
                    <div class="education-unversity-box">
                      <span class="unversity-name">{{education.collegeName}}</span>
                      <span class="job-unversity">{{education.from}} - {{education.to}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      userId: this.$route.params.id,
      sameUser: false,
      userData: null,
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  async fetch() {
    await this.$axios
      .$get(`http://localhost:9000/api/users/${this.userId}`)
      .then((res) => {
        this.userData = res
        if (this.userData._id !== this.userId) {
          throw new Error('404 Error')
        }
      })
      .catch((e) => {
        throw new Error(e)
      })
  },
  mounted() {
    if (this.$store.state.auth.user) {
      this.$store.state.auth.user._id === this.userId
        ? (this.sameUser = true)
        : (this.sameUser = false)
    }
  },
}
</script>

<style scoped>
.rb-experience .job-time {
    margin-right: 20px;
}

.rb-experience .job-time .from, .rb-experience .job-time .to {
    display: block;
    font-weight: bold;
}

.rb-experience .job-time .s-line {
    width: 2px;
    background: #3fc380;
    display: block;
    margin: 0 auto;
    height: 10px;
}

.rb-experience li {
    display: flex;
    margin-bottom: 20px;
}
.rb-experience .xds-a {
    width: 100%;
}
.xds-a .job-title {
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.xds-a .job-company-box p {
    color: #9e9e9e;
    font-weight: 300;
    font-size: 16px;
}
.rb-educations ul li {
    display: flex;
    margin-bottom: 20px;
}

.rb-educations ul li .job-unversity {
    margin-right: 20px;
}

.rb-educations ul li .job-unversity .from,.rb-educations ul li .job-unversity .to {
    display: block;
    font-weight: bold;
}

.rb-educations ul li .xds-a h4 {
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: uppercase;
}

.rb-educations ul li .job-unversity .s-line {
    width: 2px;
    background: #3fc380;
    display: block;
    margin: 0 auto;
    height: 10px;
}

.xds-a .education-unversity-box span {
    color: #9e9e9e;
    font-weight: 300;
    font-size: 16px;
}
h3.rb-title {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.rb-header-welcome {
    margin-bottom: 30px;
    padding-bottom: 50px;
    border-bottom: 4px dashed rgba(204,204,204,0.32157);
}

.rb-header-welcome p {
    color: #9e9e9e;
    font-weight: 300;
    font-size: 16px;
    line-height: 25px;
}

.rb-educations {
    margin-bottom: 30px;
    padding-bottom: 50px;
    border-bottom: 4px dashed rgba(204,204,204,0.32157);
}
.lb-social-media {
    margin-top: 50px;
}
.rb-experience {
    padding-bottom: 50px;
}
li.facebook {
    background: #3b5998;
}

.lb-social-media ul li {
    width: calc(25% - 4px);
    display: inline-flex;
    margin-bottom: 20px;
    align-items: center;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
}

.lb-social-media ul li a {
    color: #fff;
    width: 100%;
}

li.linkedin {
    background: #0a66c2;
}

.lb-social-media ul li h5 {
    width: 100%;
}

li.twitter {
    background: #1da1f2;
}

li.github {
    background: #0d1117;
}
.profile-page {
    padding: 50px 0;
    padding-top: 110px;
}
.layout2 {
    background: #fff;
    padding: 50px;
    border-bottom: 30px solid #3fc380;
}

.p-h {
    text-align: center;
}

.p-h .ph-img img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
}

.layout2 .r-b {
    border-right: 4px dashed #cccccc52;
    padding-right: 50px;
}

.layout2 .r-b-8 {
    padding-left: 60px;
}

.p-h .ph-info h2 {
    font-weight: bold;
    font-size: 24px;
    margin: 0 auto;
    text-transform: uppercase;
    max-width: 80%;
    text-align: center;
}

.p-h .ph-info p {
    font-size: 18px;
    text-transform: capitalize;
}

.p-h .ph-info a {
    color: #5555e6;
    text-transform: capitalize;
    text-decoration: underline;
    transition: all .3s linear;
}

.p-h .ph-info a:hover {
    text-decoration: none;
}

.lb-contact {
    margin-top: 50px;
}

h3.lb-title {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.lb-contact ul li {
    display: flex;
    margin-bottom: 15px;
}

.lb-contact ul li i {
    margin-right: 25px;
    font-size: 22px;
    color: #3fc380;
    margin-top: 5px;
}

.lb-contact ul li h5 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 17px;
    line-height: 20px;
}

.lb-contact ul li span {
    color: #9e9e9e;
    font-weight: 300;
    font-size: 14px;
}
</style>