<template>
    <div>
        <homeheader></homeheader>
        <div class="container">
            <router-view></router-view>
        </div>
        
    </div>

</template>

<script>
import  Homeheader from './components/Homeheader.vue'
export default {
  components: {
      Homeheader
  }
}
</script>


<style>

</style>
