<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-orange-500 font-bold text-xl"
    >
      Home
    </router-link>
    <div class="flex gap-1 items-center">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-orange-500 hover:text-white"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-orange-500 hover:text-white"
        >Meals by Letters</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-orange-500 hover:text-white"
        >Meals by Ingredients</router-link
      >
    </div>
  </header>
</template>
