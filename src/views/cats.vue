<template>
  <div>
    <h1>Cats for adoption</h1>
    <input type="text" v-model="filterCat" />
    <ul>
      <li v-for=" ca in filterCating" :key="ca">{{ca}}</li>
    </ul>
    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/cats/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      sugs: ["a", "b"],
      filterCat: "",
    };
  },
  computed: {
    ...mapState(["cats"]),
    filterCating() {
      const filtering = new RegExp(this.filterCat, "i");
      console.log(this.cats);
      console.log(filtering);
      return this.cats.filter((el) => {
        return el.name.match(filtering);
      });
    },
  },
  mounted() {},
};
</script>
