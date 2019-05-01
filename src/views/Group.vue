<template>
  <div>
    <h2>Grupo: {{ group.group }}</h2>
    <div>
      <h4>Times:</h4>
      
      <dir v-for="(team, index) in group.teams" :key="index">
        <p>{{ team }}</p>
      </dir>
        

    </div>
  </div>
</template>

<script>
export default {
  name: 'Group',
  data(){
    return {
      group: ''
    }
  },
  mounted: function() {
    this.group = JSON.parse(localStorage.getItem('group'));

    // this.group.teams.forEach(team => {
    //   console.log(team);
    // });
  }
}
</script>

<style scoped lang="scss">

</style>