<template>
  <div class="home">
    <navbar></navbar>
    <listarticle></listarticle>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import listarticle from '@/components/listarticle'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    navbar,
    listarticle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
