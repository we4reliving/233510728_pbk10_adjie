<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/orders">Pesanan Saya</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
