<template>
  <div class="component-newgroup">
    <input type="text" placeholder="Nome do grupo" v-model="newGroup">
    
    <router-link to="/make-group" tag="button">
      <span @click="pushGroup()">
        Criar
      </span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'NewGroup',
  data(){
    return {
      newGroup: '',
    }
  },
  methods: {
    pushGroup: function() {
      if (this.newGroup !== '') {
        localStorage.setItem('newGroup', this.newGroup);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.component-newgroup {
  padding: 20px;
}
</style>
