<template>
  <div class="main">
    <NavBar />
    <router-view class="container" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue';

export default {
  name: 'Main',
  components: {
    NavBar,
  },
};
</script>