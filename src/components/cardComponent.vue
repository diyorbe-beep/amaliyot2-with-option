<template>
      <div>
            <div class="col">
                  <img :src="products.img" alt="">
                  <h1>{{products.title}}</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque perferendis quibusdam tempore tempora ut.</p>
                  <button>Click me..</button>
            </div>
      </div>
</template>

<script>
export default {
      props: {
            products: {
                  type: Object,
                  default: true,
                  required: true
            },
      },
}
</script>

<style scoped>
      .col{
            border: 2px solid red;
            padding: 15px;
      }
      img{
            width: 100%;
      }
</style>