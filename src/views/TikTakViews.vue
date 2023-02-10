<template>
    <!--HEADER-->
        <div class="flex justify-between items-center">
            <h2 class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton h1">TIK TAK</h2>
            <div class="xl:hidden pr-5">
            <Header  />
            </div>
            <div class="hidden pr-16 xl:block">
            <HeaderOrdi/>
            </div>
        </div>

    <!--INTRODUCTION-->
    <div class="flex justify-between mt-28 items-">
    <!--FIGURE BLEUE-->
        <div class="hidden xl:block lg:w-1/2 xl:ml-10">
            <div class="flex justify-">
                    <img class="" src="../../public/traits/PetitBleu.jpg"/>   
            </div>
            <img src="../../public/traits/GrandBleu.jpg" alt="Ligne décorative"/>
            <div class="flex justify-around">
                <img class="" src="../../public/traits/PetitBleu.jpg"/>
            </div>
        </div>
    
    <!--TEXTE-->
        <div class="md:w-3/4 xl:w-1/2 w-full">
            <div class="bg-violet_pastel  flex justify-center xl:justify-center bg-opacity-50 w-full ">
                <p class="font-anton text-[110px] xl:text-[80px] text-white">NOTE 18</p>
            </div>
            <div class="bg-Rose py-5">
                    <p class="font-anton text-center text-white bouton underline">Le site</p>
                    <p class="font-anton text-center text-white bouton underline">Les objectifs de communication</p>
            </div>
        </div>
    </div>

    <!--LA DEMANDE-->
    <div class="flex ">
        <div class=" mt-28 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">LA DEMANDE</p>
          </div> 
        </div>
        <div class="flex justify-end">
            <img class="rotate-90" src="../../public/traits/MoyenRose.jpg" alt="ligne décorative"/>
        </div>
    </div>

</template>



<script>
import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue"

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    Header,
    HeaderOrdi,
    Footer
  }
}

</script>