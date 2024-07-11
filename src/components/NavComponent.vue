<template>
      <div>
            <nav class="nav">
                  <div class="container">
                        <div class="logo">LOGO</div>
                        <div class="nav-right">
                              <div class="nav_list">
                                    <router-link to="/">Home</router-link>
                                    <router-link to="/about">About</router-link>
                                    <router-link to="/contact">Contact</router-link>
                              </div>
                        </div>
                  </div>
            </nav>
      </div>
</template>

<script>
      export default {
            
      }
</script>

<style scoped>
      *{
            margin: 0;
            padding: 0;
      }
      .nav{
            background-color: lime;
            padding: 20px;
      }
      .container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            margin: 0 auto;
      }
      .logo{
            color: #fff;
            font-size: 32px;
            font-family: cursive;
      }
      .nav_list{
            color: #fff;
            font-size: 20px;
            font-family: sans-serif;
            display: flex;
            align-items: center;
            gap: 20px;
      }
</style>