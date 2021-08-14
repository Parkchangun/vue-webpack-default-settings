<template>
  <div>
    <h1 @click="insertName">
      {{ msg }}
    </h1>
    <h2>{{ insertedName }}</h2>
    <ul>
      <li>reset</li>
      <li>test</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.message.msg;
    },
    insertedName() {
      return this.$store.getters.insertedName;
    }
  },
  methods: {
    insertName() {
      this.$store.dispatch('message/insertName');
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  color: orange;
}
</style>