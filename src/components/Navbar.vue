<script>
export default {};
</script>

<template>
  <header class="bg-green-700 p-3 shadow-sm fixed top-0 w-full">
    <nav class="flex items-center justify-between container mx-auto">
      <router-link to="/">
        <h1 class="sm:text-2xl text-white uppercase font-semibold">Connect</h1>
      </router-link>
      <ul class="flex items-center space-x-6">
        <li>
          <router-link
            :to="{ name: 'Login' }"
            href=""
            class="py-2 px-7 bg-green-900 text-white font-medium rounded-md"
            >Login</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style></style>
