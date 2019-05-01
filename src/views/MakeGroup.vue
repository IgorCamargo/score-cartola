<template>
  <div>
    <h1>Criar Grupo {{ returnStorage }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MakeGroup',
  data(){
    return {
      returnStorage: ''
    }
  },
  mounted: function() {
    console.log('here');
    this.returnStorage = localStorage.getItem('newGroup');
  }
}
</script>

<style scoped lang="scss">

</style>