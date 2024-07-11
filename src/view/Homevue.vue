<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <CardComponent v-for="products in products" :key="products.id" :products="products"></CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/cardComponent.vue";
import BaseBtnVue from '@/components/BaseBtn.vue';
export default {
  components: {
    CardComponent,
    BaseBtnVue
  },
  data() {
      return {
            products: [
                  {
                        id: 1,
                        img: 'https://picsum.photos/400/300?random=1',
                        title: 'Product 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque perferendis quibusdam tempore tempora ut.'
                  },
                  {
                        id: 2,
                        img: 'https://picsum.photos/400/300?random=2',
                        title: 'Product 2',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque perferendis quibusdam tempore tempora ut.'
                  },
                  {
                        id: 3,
                        img: 'https://picsum.photos/400/300?random=3',
                        title: 'Product 3',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque perferendis quibusdam tempore tempora ut.'
                  },
                  {
                        id: 4,
                        img: 'https://picsum.photos/400/300?random=4',
                        title: 'Product 4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque perferendis quibusdam tempore tempora ut.'
                  },
                  {
                        id: 5,
                        img: 'https://picsum.photos/400/300?random=5',
                        title: 'Product 5',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque perferendis quibusdam tempore tempora ut.'
                  },
            ]
      }
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
.row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
  margin: 50px 0;
}
      .col{
            border: 2px solid red;
            padding: 15px;
      }
      img{
            width: 100%;
      }
</style>