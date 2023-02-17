<template>
    <!--HEADER-->
    <div class="flex justify-between items-center">
        <h2 class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton neon h1">Julie Albini</h2>
        <div class="xl:hidden pr-5">
          <Header  />
        </div>
        <div class="hidden pr-16 xl:block">
          <HeaderOrdi/>
        </div>
    </div>

<!--PRESENTATION 1-->
    <div class="md:flex justify-center lg:mx-20 xl:mx-0 mt-28">
    <div class="flex items-start flex-col">
      <div class="md:flex mx-auto md:w-3/4 xl:w-2/3">
        <div class="hidden md:flex p-3 leading-none flex-col justify-center bg-Turquoise bg-opacity-50">
          <p class="font-anton text-[63px] text-white">DÉV</p>
          <p class="font-anton text-[63px] text-white">ELOP</p>
          <p class="font-anton text-[63px] text-white">PEM</p>
          <p class="font-anton text-[63px] text-white">ENT</p>
        </div>
          <img class="w-max hidden md:block" src="../../public/Photo2.jpg" alt="Photo Julie Albini"/>
          <img class="w-max md:hidden" src="../../public/photoViolet.jpg" alt=" image Julie Albini"/>
        </div>
    <!--Responsive en sm-->
        <div class="flex justify- md:hidden">
           <div class=" flex p-3 leading-none flex-col justify-center bg-Turquoise bg-opacity-50">
              <p class="font-anton text-[63px] text-white">DÉV</p>
              <p class="font-anton text-[63px] text-white">ELOP</p>
              <p class="font-anton text-[63px] text-white">PEM</p>
              <p class="font-anton text-[63px] text-white">ENT</p>
            </div>
            <div class="flex flex-col  items-center">
              <div class="bg-violet_pastel  xl:mr-20 p-10">
                  <p class="font-poppins texte font-semibold text-white">ÉTUDIANTE EN 2ÈME ANNÉE DE BUT
                    MÉTIERS DU MULTIMÉDIA
                    et de l’internet </p>
              </div>
              <div class=" bg-Rose m-5 mb-0 bg-opacity-50 p-3">
                  <p class="font-bold font-poppins text-white texte">Après mon stage d’observation de 3ème, j’ai su que c’était le métier d’infographiste que je 
                    voulais exercer plus tard. Je me suis renseignée sur les écoles qui me prépareraient à ce métier 
                    et je suis tombée sur l’école de MMI.
                  </p>
              </div>
            </div>
        </div>
       
        <img class="rotate-90 -mt-20 md:mt-0" src="../../public/traits/MoyenRose.jpg" alt="ligne décorative"/>
      </div>
      <div class="md:w-2/4 xl:w-1/4 mt-20 gap-14 flex flex-col  md:mr-10 lg-mr:0 xl:ml-20 ">
        <div class="hidden md:block xl:flex justify-center">
          <div class="bg-violet_pastel xl:mr-20 p-10">
            <p class="font-poppins texte font-semibold text-white">ÉTUDIANTE EN 2ÈME ANNÉE DE BUT
              MÉTIERS DU MULTIMÉDIA
              et de l’internet </p>
          </div>
          <img class="hidden xl:block" src="../../public/traits/PetitBleu.jpg" alt="ligne décoratrice"/>
        </div>
        <div class="bg-Rose hidden md:block bg-opacity-50 p-3">
          <p class="font-bold font-poppins text-white texte">Après mon stage d’observation de 3ème, j’ai su que c’était le métier d’infographiste que je 
            voulais exercer plus tard. Je me suis renseignée sur les écoles qui me prépareraient à ce métier 
            et je suis tombée sur l’école de MMI.
</p>
        </div>
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