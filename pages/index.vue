<template>
  <div class="home-page-card">
    <a class="back-link" @click="$router.go(-1)" ><i class="fa fa-arrow-left"></i> <span>back</span></a>
      <div class="table-cell">
        <div class="container flex">
          <div class="flex_content flex2">
              <h2>the project</h2>
              <h4><i class="fab fa-github"></i> available on <a href="#">github</a></h4>
              <span>4 forks</span>
              <ul>
                  <li>Nodejs - express</li>
                  <li>Mongodb - mongoose</li>
                  <li>json web token</li>
              </ul>
              <button>
                  show on github
              </button>
          </div>
          <div class="flex_content">
              <h2>try the services</h2>
              <h4><i class="fa fa-user-plus"></i> create a new account </h4>
              <span>join us</span>
              <ul>
                  <li>you can edit your information anytime</li>
                  <li>you can share your cv with your profile url</li>
                  <li>it's completely free</li>
              </ul>
              <nuxt-link v-if="!isLoggedIn" to="/register">
                  <button>start register </button>
              </nuxt-link>
              <nuxt-link v-else :to="`/profile/${userId}`">
                  <button>my profile </button>
              </nuxt-link>
          </div>
        </div>
        <div class="pec-link">
          <p>
            <span>follow me on linkedin : </span>
            <a href="https://www.linkedin.com/in/deshaxii" class="text-center link ultra-2" data-splitting>Mustafa Fathi Ibrahim</a>
          </p>
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  head () {
    return {
      title: "online resume",
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    }),
    userId() {
      return this.$store.state.auth.user._id
    }
  }
}
</script>

<style>
.pec-link {
    color: #777;
    margin-top: 40px;
}
.home-page-card {
      position: relative;
    height: 93vh;
    display: table;
    width: 100%;
}
.home-page-card .table-cell {
    display: table-cell;
    height: 100%;
    /* background-image: linear-gradient(to right bottom, #ff0844 0%, #ffb199 100%); */
    vertical-align: middle;
}
  .home-page-card .container {
    background-color: #fff;
    color: #ccc;
    width: 70%;
    border-radius: 7px;
    padding: 5%;
    margin: 0 auto 0;
    background: #fff;
    box-shadow: 0 0 0 1px rgb(8 9 10 / 10%);
    border-radius: 5px;
  }
  .home-page-card .flex {
    display: flex;
    justify-content: space-around;
  }
  .home-page-card .flex2 {
    border-right: 0.1px solid rgba(109, 105, 105, 0.185);
  }
  a {
    color: #3fc380;
  }
  .home-page-card .flex_content {
    padding: 0% 10%;
    flex: 1;
  }
  .home-page-card .flex_content h2 {
    font-weight: 600;
    font-size: 24px;
    text-transform: capitalize;
    color:#171819;
    margin-bottom: 10px;
  }
  .home-page-card .flex_content h4 i {
    margin-left: 5px;
  }

  .home-page-card .flex_content ul li:last-of-type {
    margin-bottom: 0;
  }

  .home-page-card .flex_content ul li:before {content: '';position: absolute;top: 50%;left: -15px;transform: translateY(-50%);width: 6px;height: 6px;border-radius: 50%;background: #555;}
  .home-page-card .flex_content h4 {
    font-weight: 400;
    font-size: 16px;
    color: #666;
    margin: 0;
    margin-left: 5px;
  }
  .home-page-card .flex_content span {
    font-weight: 200;
    font-size: 13px;
    color: #999;
    margin-left: 10px;
  }
  .home-page-card .flex_content ul {
    padding-inline-start: 7%;
    margin: 15% 0;
  }
  .home-page-card .flex_content ul li {
    font-weight: 200;
    margin-bottom: 10px;
    margin-left: 15px;
    color: #555;
    position: relative;
  }
  .home-page-card .flex_content button {
    outline: none;
    border: none;
    background: #3fc380;
    color: #fff;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    text-transform: capitalize;
  }
  .home-page-card .flex_content:nth-of-type(1) button {
    background: transparent;
    border: 1px solid #3fc380;
    color: #3fc380;
}
  @media screen and (max-width: 540px) {
    .home-page-card .flex {
      flex-direction: column;
    }
    .home-page-card .flex2 {
      border: none;
    }
  }

  .link {
    display: block;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    direction: ltr;
    font-family: monospace;
  }
  .pec-link p {
    display: flex;
    justify-content: center;
    align-items: center;
}
a.text-center.link.ultra-2.words.chars.splitting:hover {
    color: #fff;
}
.pec-link p a {
    margin: 0 10px;
}

  .link .char {
    transition: transform 0.3s cubic-bezier(0.8, 0, 0.2, 1);
    transition-delay: calc(0.02s * var(--char-index));
  }
  .link .char::after {
    visibility: visible;
    transform-origin: left bottom;
    transition: inherit;
    width: auto;
    left: -3px;
    right: -3px;
  }
  /* ---------------------------------- */
  .ultra .char::after {
    content: "";
    width: 100%;
    top: 100%;
    border-bottom: solid var(--border-size);
    transform: translateY(calc(-1 * var(--border-size))) scaleY(0.2) translateZ(0);
  }
  .ultra:hover .char {
    transform: translateY(calc(-1 * var(--border-size)));
  }
  .ultra:hover .char::after {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
  /* ---------------------------------- */
  .ultra-2 {
    --border-size: 0.1em;
  }
  .ultra-2 .char::after {
    content: attr(data-char);
    color: #fff;
    visibility: visible;
    transition: inherit;
    transition-property: clip-path;
    clip-path: polygon(
      0 calc(100% - var(--border-size, 1px)),
      100% calc(100% - var(--border-size, 1px)),
      100% 100%,
      0% 100%
    );
    background: #ffb199;
  }
  .ultra-2:hover .char::after {
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  


</style>