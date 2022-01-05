<script>
export default {};
</script>

<template>
  <header class="bg-green-700 p-3 shadow-sm">
    <nav class="flex items-center justify-between container mx-auto">
      <router-link to="/">
        <h1 class="text-2xl font-medium text-white">Connect</h1>
      </router-link>
      <ul class="flex items-center space-x-6">
        <li>
          <router-link
            :to="{ name: 'Register' }"
            href=""
            class="py-2 px-7 bg-white text-dark font-medium rounded-md"
            >Add Post</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'Register' }"
            href=""
            class="py-2 px-7 bg-green-900 text-white font-medium rounded-md"
            >Register</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style></style>
