<template>
  <div>
    <input type="text" placeholder="Nome do time" v-model="searchTeam" autofocus>
    <div>
      <h5>Times adicionados:</h5>
      <div class="team-item" v-for="(team, index) in listTeam" :key="team.index">
        <div>{{ team.name }} - <button @click="removeTeam(index)">Remove</button></div>
      </div>
    </div>
    <div>
      <div class="team-item" v-for="team in resultTeam" :key="team.time_id">
        {{ team.slug }} - <button @click="pushTeam(team.slug)">Inserir</button>
      </div>
    </div>
    <footer>
      <router-link to="/group" tag="button">
        <span @click="saveGroup()">
          Salvar Grupo
        </span>
      </router-link>
      <button @click="saveGroup()">Salvar</button>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
import { async } from 'q';

export default {
  name: 'SearchTeam',
  data(){
    return {
      searchTeam: '',
      resultTeam: '',
      listTeam: [],
      team: '',
    }
  },
  mounted: function() {
    localStorage.removeItem('group');
  },
  watch: {
    searchTeam: function() {
      axios
        .get(
          'https://api.cartolafc.globo.com/times?q=' + this.searchTeam, {
            // headers: {
            //   'Access-Control-Allow-Origin': '*'
            // },
            withCredentials: false
          })
        .then(response => (this.resultTeam = response.data))
    }
  },
  methods: {
    pushTeam: async function(teamName) {
      if(this.listTeam.findIndex(obj => obj.slug === teamName) < 0) {
        const self = this;
        try {
          const response = await axios.get(
            'https://api.cartolafc.globo.com/time/slug/' + teamName, {
              // headers: {
              //   'Access-Control-Allow-Origin': '*'
              // },
              withCredentials: false
            }
          );
          self.team = response.data
        } catch (error) {
          console.error(error);
        }
        this.team = {
          name:         this.team.time.nome,
          slug:         this.team.time.slug,
          logo:         this.team.time.url_escudo_svg,
          photoProfile: this.team.time.foto_perfil
        }
        this.listTeam.push(this.team);
      }
    },
    removeTeam: function(index) {
      this.listTeam.splice(index, 1);
    },
    saveGroup: function() {
      let group;
      if (this.listTeam.length > 0) {
        group = {
          group: localStorage.getItem('newGroup'),
          teams: this.listTeam
        };
        group = JSON.stringify( group );
        localStorage.setItem('group', group);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.team-item {
  margin: 5px;
}
</style>
