<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import "scss/reset";

a {
  text-decoration: none;
  color: inherit;
}

.router-link-exact-active {
  color: blueviolet;
}
</style>