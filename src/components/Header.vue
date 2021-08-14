<template>
  <header>
    <ul>
      <li>
        <router-link
            active-class
            to="/">
          HOME
        </router-link>
      </li>
      <li>
        <router-link
            active-class to="/test">
          Link Route
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
li {
  font-size: 5rem;

  & + & {
    color: orange;
  }
}
</style>