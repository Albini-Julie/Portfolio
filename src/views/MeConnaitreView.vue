<template>
    <div class="flex justify-between items-center">
        <h2 class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton text-[75px] md:text-[100px] 
        lg:text-[125px] xl:text-[140px]">ME CONNAITRE</h2>
        <div class="xl:hidden">
          <Header />
        </div>
        <div class="hidden xl:block">
          <HeaderOrdi/>
        </div>
      </div>
</template>

<script>
import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    Header,
    HeaderOrdi
  }
}

</script>