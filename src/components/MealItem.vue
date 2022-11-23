<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        class="rounded-t-xl h-48 w-full object-cover bg-orange-200"
        :src="meal.strMealThumb"
        alt="the main picture"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequuntur
        vero labore quis ratione tempore, aliquam assumenda esse! Corrupti,
        obcaecati.
      </p>
      <div>
        <YoutubeButton :href="meal.strYoutube"> Youtube </YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
