<template>

      <div class="flex justify-around">
        <h2
        class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 bg-no-repeat text-rose_pastel font-anton text-[75px] ">Julie Albini</h2>
        <Menu class=""/>
      </div>

      <Suspense>
    <router-view class="" />
  </Suspense>

     
</template>

<script>
import Menu from "../src/components/icons/menu.vue";

export default {
  components: {
    Menu
  },
}
  </script>