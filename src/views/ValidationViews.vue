<template>
    <div class="dark:bg-black">
    
        <!--HEADER-->
    <div class="flex justify-between items-center">
        <h2 class="dark:bg-none bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton neon 
        text-[50px] md:text-[100px] lg:text-[110px] xl:text-[70px] 2xl:text-[120px]">VALIDATION</h2>
        <div class="xl:hidden pr-5">
          <Header  />
        </div>
        <div class="hidden pr-16 xl:block">
          <HeaderOrdi/>
        </div>
    </div>

    <!--FOND ROSE-->
    <div class="flex ">
            <img class="absolute w-2/3 h-1/2 lg:w-2/3 lg:h-1/3 mt-20 lg:mt-40" src="../../public/TraitRose.jpg" alt="trait décoratif"/>
    </div>
    <!--ICONE ET TEXTE-->
    <div class="lg:flex justify-evenly xl:justify-center mt-20 lg:mt-56 items-center">
        <div class="lg:w-1/3">
            <Valide class="mb-10 lg:mb-0 mx-auto w-[250px] h-[250px] md:w-[300px] md:h-[300px] xl:w-[300px] xl:h-[300px]"/>
        </div>
        <div class="lg:w-1/3 flex flex-col justify-center items-center">
            <p class="mx-6 md:mx-20 lg:mx-0 relative font-poppins h4 dark:text-white text-center">Votre message à bien été envoyé.</p>
            <h4 class=" lg:mt-0 mx-6 md:mx-20 lg:mx-0 relative text-[120px] md:text-[140px] xl:text-[160px] Couleur font-anton">MERCI !</h4>
        </div>
    </div>

    <!--FOOTER-->
    <Footer class="mt-36 mb-16 dark:mb-0"/>
</div>
</template>

<style>

</style>

<script>
import Header from "../components/Header.vue"
import HeaderOrdi from "../components/HeaderOrdi.vue"
import Footer from "../components/Footer.vue"
import Valide from "../components/icons/iconsValidation.vue"

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    Header,
    HeaderOrdi,
    Footer,
    Valide
  },
}
</script>