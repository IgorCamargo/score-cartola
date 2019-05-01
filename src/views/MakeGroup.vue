<template>
  <div>
    <h2>Criando Grupo: {{ returnStorage }}</h2>
    <div>
      <h4>Inserir Times:</h4>
      
      <SearchTeam/>

    </div>
  </div>
</template>

<script>
import SearchTeam from '@/components/SearchTeam.vue'

export default {
  name: 'MakeGroup',
  components: {
    SearchTeam
  },
  data(){
    return {
      returnStorage: ''
    }
  },
  mounted: function() {
    this.returnStorage = localStorage.getItem('newGroup');
  }
}
</script>

<style scoped lang="scss">

</style>