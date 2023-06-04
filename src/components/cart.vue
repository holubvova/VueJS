<template>
  <br>
  <div class="container-md p-1 card ">
    <div class="row">
      <div class=" col col-md-4 ">
        <router-link to="/" class="btn bg-info"> &lt;- Back to shoping</router-link>

      </div>
      <div class="col-auto ">
        <h2>Cart</h2>
      </div>
    </div>

    <hr>
    <table class="table">
      <tr>
        <th><h5>Items: <strong>{{elem.quantity}}</strong></h5></th>
        <th><h5>Total: <strong>{{elem.total}}</strong></h5></th>
        <th><a style="float: right;margin: 5px" class="btn bg-success" @click="checkout_page" id="checkout" href="checkout">Checkout</a>
          <!--                <th><a style="float: right;margin: 5px" class="btn btn-success" href="">Checkout</a>-->

        </th>
      </tr>
    </table>
  </div>
  <br>
  <br>
  <div class="col-auto p-1 card">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Item</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>

        <th scope="col">Total</th>
      </tr>
      </thead>
      <tbody>
      <!--   ../images/Xiaomi-Mi-Notebook-Pro-15-2020-Intel-0_large.jpg    -->
      <tr>
        <th scope="row"><img src=""
                             style="width: 100px ; height: 100px"></th>
        <td><p class="px-lg-2"></p> {{elem.quantity}}</td>
        <td><p class="px-lg-2"></p>{{elem.price}}</td>
        <td>
          <p class="px-sm-2">
            <button @click="additem" class=" btn  update-cart  " data-product='product1' data-action='add'>
              +
            </button>
            <button @click="deleteitem" class=" btn update-cart" data-product='product1' data-action='remove'>
              -
            </button>
          </p>

        </td>
        <td><p class="px-lg-2"></p> {{elem.total}}</td>
      </tr>
      <!--      {% endfor %}-->
      </tbody>
    </table>
  </div>
</template>

<script>

//import store from "@/store/store.js";

export default {
  name: "cart",
  data() {
    return {
      elem: {
        item: 1,
        price: 1000,
        quantity: 1,
        total: 1000,
      },
    }
  },
  methods: {
    additem() {
      this.elem.quantity += 1;
      this.elem.total = this.elem.quantity * this.elem.price;
    },
    deleteitem() {
      if (this.elem.quantity > 0) {
        this.elem.quantity -= 1;
        this.elem.total = this.elem.quantity * this.elem.price;
      }
    },
    checkout_page(){
      // store.state.orderlist = this.elem;
      this.$router.push({name: 'checkout'});
    }
  }
}
</script>
