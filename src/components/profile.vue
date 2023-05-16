<template>
    <div class="container-fluid">
        <div class="row" style="margin: 1%"></div>
        <div class="row">
            <div class="col"></div>
            <div class="col-md-5  rounded justify-content-center  ">
                <div class="card card-body " style="background-color:#e3ffff">


                    <h1 style="text-align: center">profile </h1>
                    <div class="mb-md-3 d-grid gap-3 ">
                        <table class="table ">

                            <tr>
                                <th scope="row">Name</th>
                                <td>Volodymyr</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>v.holub@test.com</td>
                            </tr>
                            <tr>
                                <th scope="row">Birthday</th>
                                <td>17.05.2022</td>
                            </tr>
                            <tr>
                                <th scope="row">Sex</th>
                                <td>Man</td>
                            </tr>

                        </table>
                        <a type="button" class="btn btn-secondary" href="editprofile">
                            <img src="../assets/pen.svg" width="16" height="16">
                            Edit
                        </a>


                    </div>

                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>

</template>

<script>
export default {
    name: "profile"
}
</script>

<style scoped>

</style>