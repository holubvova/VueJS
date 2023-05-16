<template>
<!--  <navbar/>-->
    <div class="col-auto px-2 px-lg-2 m-2">
        <h3 class="text-center">Products</h3>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">

                        <img class="img-thumbnail" src="../images/Xiaomi-Mi-Notebook-Pro-15-2020-Intel-0_large.jpg">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">

                        <p class="text">Name: Xiaomi notebook PRO</p>
                        <p class="text"> Price: 1000$ </p>
                        <p class="text">Description:Xiaomi notebook 14.6 </p>

                    </div>
                    <div class=" col col-md-3 px-1">
                        <button @click="increase" class="btn-outline-success btn update-cart" data-product=""
                                data-action="add" href="">Add to cart
                        </button>


                    </div>
                </div>

            </div>
            <hr>
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">

                        <img class="img-thumbnail" src="../images/iphone-se.jpg">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">

                        <p class="text">Name: Iphone</p>
                        <p class="text"> Price: 1000$ </p>
                        <p class="text">Description: IPhone SE 2 2022 </p>

                    </div>
                    <div class=" col col-md-3 px-1">
                        <button @click="increase" class="btn-outline-success btn update-cart" data-product=""
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
import store from "@/store/store";
export default {
    name: "TheStore",
    methods: {
      increase(){
         store.state.count++;
         console.log(store.state.count);
      },
    },
}
</script>

<style scoped>

</style>
