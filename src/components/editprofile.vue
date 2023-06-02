<template>
  <div class="container-fluid ">
    <div class="row" style="margin: 1%"></div>
    <div class="row">
      <div class="col"></div>
      <div class="col-md-5  rounded justify-content-center  ">
        <div class="card card-body" style="background-color:#e3ffff">
          <form name="Update_profile" method="post" >
            <h1 style="text-align: center">Edit Profile </h1>
            <div class="mb-md-3 d-grid gap-2 ">
              <div class="input-group mb-3">
                <span class="input-group-text" id="username">UserName</span>
                <input v-model="form.userName" type="text" class="form-control" placeholder="First Name"
                       aria-label="First Name"
                       aria-describedby="basic-addon1"
                       id="username1"
                >
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="email">Email</span>
                <input v-model="form.useremail" type="email" class="form-control" placeholder="Email" aria-label="Email"
                       aria-describedby="basic-addon1"
                       id = "useremail">
              </div>
              <form>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="=birthday">Birthday:</span>
                  <input type="date" v-model="form.birthDay" data-userbirthday class="form-control" id="bday">
                </div>
              </form>
              <div class="input-group mb-3">
                <span class="input-group-text" id="sex">Sex </span>
                <select v-model="form.sex" data-usersex class="form-select " aria-label="Default select example" id="sex">
                  <option selected value="1">Man</option>
                  <option value="2">Woman</option>
                </select>
              </div>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" @click="handleSubmit" class="btn btn-primary  bt btn-block"> Save</button>
            </div>
            <div
                class="message"
                v-if="submitted"
            >
              Thank you for your submission, {{ form }}.
            </div>
          </form>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>


export default {
  name: "editprofile",
  data() {
    return {
      form: {
        userName: '',
        useremail: '',
        birthDay: '',
        sex: 1,
      },
      submitted: false
    }
  },
  methods: {

    handleSubmit() {
      // this.submitted = true;
      // console.log(this.form);
      // this.$router.push({name: 'profile', params: {form: this.form}});
      if (this.checkDate() && this.checkSex() && this.checkEmail()) {
        this.submitted = true;
        alert("Update success");
        this.$router.push({name: 'profile'});
        // console.log(this.form);
      } else {
        alert("Update fail");
        this.$router.push({name: 'editprofile'});
      }


    },
    checkDate() {
      if (this.form.birthDay !== '') {
        alert(this.form.birthDay)
        var tmp = this.form.birthDay.split('-');
        alert(tmp[0] + " " + tmp[1] + " " + tmp[2])
        const date = new Date();
        console.log(date.getFullYear() + " " + date.getMonth() + " " + date.getDate());
        if (tmp[0] >=date.getFullYear() && tmp[1] >= date.getMonth() && tmp[2] >=date.getDate()) {
          alert("Date is not valid");
          console.log('false');
          return false;
        } else {
          console.log('true');
          return true;
        }
      } else {
        if (this.form.birthDay === '') return false;
      }
    },
    checkSex() {
      console.log('false');
      return this.form.sex !== '';
    },
    checkEmail() {
      if (this.form.useremail !== '') {
        alert(this.form.useremail);
        return true;
      } else {
        alert("Email is not valid");
        return false;
      }
    }
  },


}
</script>

<style scoped>

</style>