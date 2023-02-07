<template>
      <div class="flex justify-around">
        <h2 class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 bg-no-repeat text-rose_pastel font-anton text-[75px] ">Julie Albini</h2>
        <Header/>
      </div>


    <div class="flex ">
        
        <div class="justify center m-5 -gap-36">
          <p class=" font-anton -mb-12 text-Turquoise_pastel text-[120px] ">ME</p>
          <p class=" font-anton -mb-16  text-Turquoise_pastel text-[120px] ">DÉ</p>
          <p class=" font-anton -mb-16 text-Turquoise_pastel text-[120px] ">CO</p>
          <p class=" font-anton -mb-16 text-Turquoise_pastel text-[120px] ">UV</p>
          <p class=" font-anton -mb-16 text-Turquoise_pastel text-[100px] ">RIR</p>
        </div>
        <!--
        <div>
          <p class=" font-anton text-Turquoise_pastel text-[120px] ">MEDÉCOUVRIR</p>
        </div>
      -->
        <div class=" flex flex-col items-center justify-center bg-Rose bg-contain bg-no-repeat font-anton ">
          <p class=" font-anton -mb-14 text-Noir text-[100px] ">PROF</p>
          <p class=" font-anton -mb-14  text-Noir text-[100px] ">FESS</p>
          <p class=" font-anton -mb-14 text-Noir text-[100px] ">IONN</p>
          <p class=" font-anton -mb-14 text-Noir text-[100px] ">ELLE</p>
          <p class=" font-anton -mb-14 text-Noir text-[80px] ">MENT</p>
        </div>
      </div>

        <div class="mt-10">
        <img class="w-full absolute " src="../../public/photo.jpg" alt="photo Julie Albini"/>
        <div class="flex justify-end content-end relative">
          <div class="w-3/4  p-3  bg-rose_pastel bg-opacity-60">
            <p class="font-poppins text-white text-[25px]">Bonjour !</p>
            <p class="font-poppins text-white">Découvrez moi professionnellement a travers les projets que j’ai réalisés !</p>
            <p class=" flex justify-end font-poppins text-white">Julie Albini</p>
          </div> 
        </div>
      </div>

      <!--<h2 class="mt-96 bg-[url('/public/TraitTurquoise.jpg')] bg-contain bg-no-repeat font-anton text-black text-xl ">RIGUEUR</h2>-->
      <div class="mt-96">
        <img class="w-max absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
        <div class="flex relative">
            <p class="ml-5 mt-10 font-anton text-black text-xl">RIGUEUR</p>
          </div> 
      </div>

      <div class="mt-10 flex flex-col items-end">
        <img class="w-max absolute" src="../../public/TraitRose.jpg" alt=""/>
        <div class="flex relative">
            <p class="mr-5 mt-10 font-anton text-black text-xl">TENACITÉ</p>
          </div> 
      </div>

      <div class="mt-10">
        <img class="w-max absolute" src="../../public/TraitViolet.jpg" alt=""/>
        <div class="flex relative">
            <p class="ml-5 mt-10 font-anton text-black text-xl">CRÉATIVITÉ</p>
          </div> 
      </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    Header,
  }
}

</script>