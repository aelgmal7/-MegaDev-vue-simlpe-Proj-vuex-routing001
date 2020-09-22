<template>
  <div>
    <h1>{{animal.name}} ({{$route.params.spec}})</h1>
    <p>{{animal.age}}</p>
    <p>{{animal.breed}}</p>

  </div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.spec][this.$route.params.id]
    this.animal = animal
  }
}
</script>
