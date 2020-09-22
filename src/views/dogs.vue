<template>
  <div>
    <h1>dogs for adoption</h1>
     <b-table striped hover :items="dogs">
     <template v-slot:cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
      </template>
     </b-table>
           <p v-for="(p,index) in posts" :key="index"> {{p.title}}</p>

  </div>
</template>

<script>
// import dogs from '@/data/dogs'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // dogs
      posts:null
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  },
  mounted(){
    this.getPosts()
  },
  methods:{
    getPosts(){
      return this.$http('https://jsonplaceholder.typicode.com/posts')
      .then(response=>{
        this.posts=response
      }).catch(error=>{
        console.error();
      })
      console.log('run')
    }
  }
}
</script>
