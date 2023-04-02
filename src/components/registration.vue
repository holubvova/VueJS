<template>
    <div class="container-fluid ">
        <div class="row" style="margin: 1%"></div>
        <div class="row">
            <div class="col"></div>

            <div class="col-md-8  rounded justify-content-center  ">
                <div class="card card-body" style="background-color:#e3ffff">
                    <form @submit.prevent="registerUser">
                        <h1 style="text-align: center">Sign Up </h1>
                        <div class="mb-md-3 d-grid gap-2 ">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="username">Username</span>
                                <input  id="username" type="text" class="form-control" placeholder="First Name" aria-label="First Name"
                                       aria-describedby="basic-addon1"   required>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" >Email</span>
                                <input id="email" type="email" class="form-control" placeholder="Email" aria-label="Email"
                                       aria-describedby="basic-addon1"  required>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="password">Password</span>
                                <input type="password" class="form-control" id="password"
                                       placeholder="Password" required>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="password">Confirm Password</span>
                                <input type="password" class="form-control" id="confirmPassword"
                                       placeholder="confirmPassword" required>
                            </div>


                            <form>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" >Birthday:</span>
                                    <input id="=birthday" type="date" class="form-control" required>
                                </div>
                            </form>
                            <div class="input-group mb-3" >
                                <span class="input-group-text" >Sex </span>
                                <select id="sex"  class="form-select " aria-label="Default select example" required >
                                    <option selected value="1">Man</option>
                                    <option value="2">Woman</option>
                                </select>
                            </div>
                        </div>

                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary  bt btn-block"> Submit</button>
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
    name: "registration",

};
</script>

<style scoped>

</style>