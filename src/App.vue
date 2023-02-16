<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from "./layout"
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
