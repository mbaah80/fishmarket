<template>
  <ul class="dash__f-list">
    <li>

      <router-link class="dash-active" to="/dashboard">Manage My Account</router-link></li>
    <li>

      <router-link to="/profile">My Profile</router-link></li>
    <li>

      <router-link to="/track-order">Track Order</router-link></li>
    <li>

      <router-link to="/orders">My Orders</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "sidebar"
}
</script>

<style scoped>

</style>
