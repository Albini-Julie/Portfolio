<template>
    <svg
  width="5"
  :height="hauteur"
  viewBox="0 0 5 340"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <line x1="2.5" y1="340" x2="2.5" :stroke="couleur" stroke-width="5"></line>
</svg>
</template>

<script setup lang="ts">
    
    defineProps(), {
    couleur: "black",
    hauteur: "548",
    };
</script>