<template>
  <div class="home">
    <h1>add a new friend</h1>
    <button class="btn btn-danger" @click="toggleForm">add new pet</button>
    {{animalsCount}}
    <b-form @submit.prevent ="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label='spec:' label-for="input-3">
        <b-form-select id="input-3" v-model="formData.spec" :options="['cats','dogs']" required></b-form-select>
      </b-form-group>
      <b-form-input id="input-2" v-model="formData.age" required placeholder="enter age"></b-form-input>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        spec: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    toggleForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { spec, name, age } = this.formData
      const payload = {
        spec,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      // TO reset
      this.formData = {
         name: '',
        age: 0,
        spec: null
      }
    }
  }
}
</script>
