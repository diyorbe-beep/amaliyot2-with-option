<template>
      <div>
            <div class="container">
                  <div class="left">
                        <img src="https://picsum.photos/400/300?random=1" alt="">
                  </div>
                  <div class="right">
                        <h1>About Page</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam unde aperiam odio ratione, laboriosam dolorem dignissimos placeat adipisci similique? Libero sit nobis exercitationem nemo dolores deserunt dolorem fugit esse, sunt quibusdam numquam provident tempore repellendus ut quod non cum?</p>
                        <BaseBtnVue>Read more</BaseBtnVue>
                  </div>
            </div>
      </div>
</template>

<script>
import BaseBtnVue from '@/components/BaseBtn.vue';
      export default {
            components: {
                  BaseBtnVue
            }
      }
</script>

<style scoped>
      .container{
            width: 80%;
            margin: 0 auto;
      }
</style>