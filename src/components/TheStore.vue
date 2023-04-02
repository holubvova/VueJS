<template>
<!--  <navbar/>-->
    <div class="col-auto px-2 px-lg-2 m-2">
        <h3 class="text-center">Products</h3>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">

                        <img class="img-thumbnail" src="">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">

                        <p class="text">Name</p>
                        <p class="text"> Price: </p>
                        <p class="text">Description </p>

                    </div>
                    <div class=" col col-md-3 px-1">
                        <button class="btn-outline-success btn update-cart" data-product=""
                                data-action="add" href="">Add to cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
import navbar from './navbar.vue'
export default {
    name: "TheStore",

}
</script>

<style scoped>

</style>
