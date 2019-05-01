<template>
  <div>
    <NewGroup/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewGroup from '@/components/NewGroup.vue'

export default {
  name: 'home',
  components: {
    NewGroup
  }
}
</script>
