<template>
  <div
    class="container mx-auto flex items-center justify-center max-w-7xl rounded my-32"
  >
    <div
      class="w-full md:w-1/2 hover:shadow-lg p-3 hover:border-green-500 border-2 transform hover:-skew-x-1 rounded-md mx-5"
    >
      <p class="text-dark capitalize">Author: Jeff</p>

      <div class="py-3">
        <p class="text-3xl text-green-800">The best show</p>
      </div>
      <article class="text-sm text-gray-500 leading-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        placeat minima vero distinctio velit ea voluptatem delectus sequi quo
        maiores quasi nemo facere harum nulla autem voluptatum dolorem, ducimus
        magni!
        <router-link
          to="/"
          class="capitalize text-green-900 font-bold ml-2 transition-transform duration-100 ease-in-out"
          >read more</router-link
        >
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style></style>
