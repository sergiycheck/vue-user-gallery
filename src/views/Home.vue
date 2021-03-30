<template>
  <div class="home-content">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    




  </div>
</template>

<script>

//import './Home.scss';
//import activateHomeHandlers from './home-scripts.js';

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';


//activateHomeHandlers();

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}

</script>
