<template>
  <div class="container-fluid ">
    <div class="row" style="margin: 1%"></div>
    <div class="row">
      <div class="col"></div>

      <div class="col-md-5  rounded justify-content-center  ">
        <div class="card card-body" style="background-color:#e3ffff">
          <form name="Sign_in" method="post">

            <h1 style="text-align: center">Sign in </h1>

            <div class="mb-md-3 d-grid gap-2 ">
              <div class="form-floating">
                <input v-model="form.email" type="email" data-cy="email-input" class="form-control" id="floatingInput"
                       placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating">
                <input v-model="form.password" type="password"  data-cy="password-input" class="form-control" id="floatingPassword"
                       placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
            </div>
            <div class="d-grid gap-2">

              <button  id="login" type="submit" @click="login" data-cy="submit-button" class="btn btn-primary  bt btn-block">Login
              </button>
            </div>

            <p class="text-center">Don't have a account?
              <router-link to="registration">Sing Up</router-link>
            </p>

          </form>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>


</template>

<script>

import store from '../store/store.js';
import router from "@/router/router";


export default {
  name: "login",
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }

  },
  methods: {
    login() {
      // Викликати дію loginUser з Store, передаючи дані з форми входу
      this.$store.dispatch('loginUser', {
        email: this.form.email,
        password: this.form.password
      }).then(() => {
        this.$router.push('/');
      }).catch(() => {
        // Обробка помилки входу
        window.alert('Email або пароль невірний');
        this.$router.push('/');
      });
    },
  },
}
</script>


<!--<script>-->
<!--import { mapMutations } from 'vuex';-->

<!--export default {-->
<!--  name: 'login',-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        email: '',-->
<!--        password: '',-->
<!--      },-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    ...mapMutations(['login']),-->
<!--    login() {-->
<!--      const user = {-->
<!--        email: this.form.email,-->
<!--        password: this.form.password,-->
<!--      };-->
<!--      this.$store.dispatch('loginUser', user);-->
<!--      const existingUser = this.$store.getters.getUser;-->
<!--      if (existingUser) {-->
<!--        this.$router.push('/');-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->



<!--<style scoped>-->

<!--</style>-->



<!--<script>-->

<!--import store from '../store/store.js';-->


<!--export default {-->
<!--  name: "login",-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        email: '',-->
<!--        password: '',-->
<!--      }-->
<!--    }-->

<!--  },-->
<!--  methods: {-->
<!--    login() {-->
<!--      let user = {-->
<!--        email: this.form.email,-->
<!--        password: this.form.password-->
<!--      }-->
<!--      if (user.email && user.password) {-->
<!--        store.state.userlist.forEach((item) => {-->
<!--          if (item.email === user.email && item.password === user.password) {-->
<!--            store.state.user = item;-->
<!--            this.$router.push('/');-->
<!--            return true;-->
<!--          }-->

<!--        })-->
<!--        window.alert('Email or password is incorrect');-->
<!--        return false;-->
<!--        //this.$router.back(0);// this line not work . error 404 . reason i dont known-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->



<!-- methods: {
    login() {
      // Викликати дію loginUser з Store, передаючи дані з форми входу
      this.$store.dispatch('loginUser', {
        email: this.form.email,
        password: this.form.password
      }).then(() => {
        // Перенаправити на головну сторінку після успішного входу
        this.$router.push('/');
      }).catch(() => {
        // Обробка помилки входу
        window.alert('Email або пароль невірний');
      });
    },
  },-->
<style scoped>

</style>