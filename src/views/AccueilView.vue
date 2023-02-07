<template>
      <div class="flex justify-between items-center">
        <h2 class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton text-[75px] md:text-[100px] 
        lg:text-[125px] xl:text-[140px]">Julie Albini</h2>
        <div class="xl:hidden">
          <Header />
        </div>
        <div class="hidden xl:block">
          <HeaderOrdi/>
        </div>
      </div>
      


    <div class="flex justify-center items-center  lg:gap-28 md:gap-10">
        <div class="md:hidden">
          <div class="justify center m-5 -gap-36">
            <p class=" font-anton -mb-12 text-Turquoise_pastel text-[120px] ">ME</p>
            <p class=" font-anton -mb-16  text-Turquoise_pastel text-[120px] ">DÉ</p>
            <p class=" font-anton -mb-16 text-Turquoise_pastel text-[120px] ">CO</p>
            <p class=" font-anton -mb-16 text-Turquoise_pastel text-[120px] ">UV</p>
            <p class=" font-anton -mb-16 text-Turquoise_pastel text-[100px] ">RIR</p>
          </div>
        </div>

        <div class="hidden md:block">
          <p class=" font-anton -mb-12 md:mb-10 text-Turquoise_pastel text-[120px] 
          lg:text-[160px] xl:text-[180px] ">ME</p>
          <p class=" font-anton -mb-12 text-Turquoise_pastel text-[120px]  
          lg:text-[160px] xl:text-[180px]">DÉCOUVRIR</p>
        </div>
        
        <div class="mt-10 ">
        <img class="w-1/4 h-3/4 absolute" src="../../public/fond.jpg" alt=""/>
        <div class="flex flex-col items-center relative">
            <p class=" font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
          lg:text-[120px] xl:text-[130px] ">PROF</p>
          <p class=" font-anton -mb-14 lg:-mb-16  text-Noir text-[100px] md:text-[110px]
          lg:text-[120px] xl:text-[130px]">FESS</p>
          <p class=" font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
          lg:text-[120px] xl:text-[130px]">IONN</p>
          <p class=" font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
          lg:text-[120px] xl:text-[130px]">ELLE</p>
          <p class=" font-anton -mb-14 lg:-mb-16 text-Noir text-[80px] md:text-[90px]
          lg:text-[100px] xl:text-[110px]">MENT</p>
          </div> 
      </div>
      </div>

        <div class="mt-52 md:flex justify-center items-end">
          <div class="lg:flex">
            <div class="lg:w-1/2">
              <img class="hidden lg:block" src="../../public/LigneRose.jpg" alt="ligne de décoration"/>
            </div >
            <div class="">
              <img class=" w-full absolute  md:static " src="../../public/photo.jpg" alt="photo Julie Albini"/>
            </div>
          </div>
          <div class="">
            <div class="md:flex justify-center">
              <img class="hidden md:block" src="../../public/LigneVioletGrande.jpg" alt="ligne décorative"/>
            </div>
            <div class="lg:flex items-center">
              <div class="flex justify-end content-end  md:static relative">
                  <div class="w-3/4 h-max md:w-content p-3  bg-violet_pastel bg-opacity-50">
                    <p class="font-poppins text-white text-[25px]">Bonjour !</p>
                    <p class="font-poppins text-white">Découvrez moi professionnellement a travers les projets que j’ai réalisés !</p>
                    <p class=" flex justify-end font-poppins text-white">Julie Albini</p>
                  </div> 
              </div>
              <div>
                  <img class="hidden lg:block" src="../../public/LigneVioletPetite.jpg" alt="ligne décorative"/>
              </div>
          </div>
          </div>
          </div>
      

      <div class="h-[2px] -z-50 line fixed rotate-45 origin-[0] inset-y-10 w-0 bg-red-600"></div>

      
      <div class="mt-96 xl:mt-28">
        <img class="w-max md:w-1/3 xl:w-1/3 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
        <div class="flex relative">
            <p class="ml-5 mt-10 font-anton text-black text-xl xl:text-[100px] ">RIGUEUR</p>
          </div> 
      </div>

      <div class="mt-10 flex flex-col items-end">
        <img class="w-max xl:w-1/3 absolute" src="../../public/TraitRose.jpg" alt=""/>
        <div class="flex relative">
            <p class="mr-5 mt-10 font-anton xl:text-[100px] text-black text-xl">TENACITÉ</p>
          </div> 
      </div>

      <div class="mt-10">
        <img class="w-max xl:w-1/3 absolute" src="../../public/TraitViolet.jpg" alt=""/>
        <div class="flex relative">
            <p class="ml-5 mt-10 xl:text-[100px] font-anton text-black text-xl">CRÉATIVITÉ</p>
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