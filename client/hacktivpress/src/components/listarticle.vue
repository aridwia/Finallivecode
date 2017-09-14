<template lang="html">
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Panel heading</div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
  </div>
</template>

<script>
import {mapAction} from 'Vuex'
export default {
  methods: {
    ...mapActions([
      'getallarticles'
    ])
  },
  created: {
    this.getallarticles()
  }
}
</script>

<style lang="css">
</style>
