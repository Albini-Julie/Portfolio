<template>
    <div class="flex justify-between items-center">
        <h2 class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat neon text-rose_pastel font-anton text-[75px] md:text-[100px] 
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

<style>

.neon {  
      animation:neon infinite 4s;
      transition: 5s;
 }

@keyframes neon{
	
0%{
	text-shadow:  0 0 7px #fff, 
               0 0 2.5px #fff, 
               0 0 10.5px rgb(255, 143, 163),   
               0 0 19.25px rgb(255, 143, 163), 
               0 0 25px rgb(255, 143, 163)
	}

  50%{
    text-shadow:  0 0 7px #fff, 
               0 0 8px #fff, 
               0 0 33.6px rgb(255, 143, 163),   
               0 0 61.6px rgb(255, 143, 163), 
               0 0 80px rgb(255, 143, 163) 
  }

  100% {
    text-shadow:  0 0 7px #fff, 
               0 0 2.5px #fff, 
               0 0 10.5px rgb(255, 143, 163),   
               0 0 19.25px rgb(255, 143, 163), 
               0 0 25px rgb(255, 143, 163)
  }
	}	

</style>