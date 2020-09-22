export default {
  appendPet: (state, { pet, spec }) => {
    state[spec].push(pet)
  }
}

