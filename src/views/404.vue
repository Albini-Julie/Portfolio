<template>

<div class="dark:bg-black">
    
        <!--HEADER-->
    <div class="flex justify-between items-center">
        <h2 class="dark:bg-none bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton neon 
        text-[50px] md:text-[100px] lg:text-[110px] xl:text-[70px] 2xl:text-[120px]">PAGE 404</h2>
        <div class="xl:hidden pr-5">
          <Header  />
        </div>
        <div class="hidden pr-16 xl:block">
          <HeaderOrdi/>
        </div>
    </div>

    <!--TEXTE-->
    <div class="mt-28 xl:mt-40">
        <div class="flex">
            <img class="AllerGauche ml-10 md:ml-28 lg:ml-56 xl:ml-80 mt-10 absolute md:w-1/5 lg:h-1/4 md:h-1/5 w-1/2 h-1/4" src="../../public/TraitBleu.jpg" alt="trait décoratif"/>
        </div>
        <div class="flex justify-end">
            <img class="hidden md:block absolute w-1/3 h-1/4" src="../../public/TraitRose.jpg" alt="trait décoratif"/>
        </div>
        <h3 class="relative mx-4 md:mx-0 font-anton xl:h3 text-[40px] text-center dark:text-white">La page n’a pas été trouvée !</h3>
        <p class="relative mx-6 md:mx-0 text-center mt-10 xl:h4 font-poppins text-[25px] dark:text-white">Vous pouvez vous aider du menu pour naviguer !</p>
    </div>
    <!--BONNE VISITE-->
    <div class="w-full bg-violet_pastel justify-center gap-8 bg-opacity-50 mt-40 flex">
        <p class="Bond mx-2 md:mx-0 font-anton dark:text-white h1 text-center ">BONNE</p>
        <p class="Bond mx-2 md:mx-0 font-anton dark:text-white h1 text-center ">VISITE</p>
    </div>

    <!--FOOTER-->
    <Footer class="mt-36 mb-16 dark:mb-0"/>
</div>
</template>

<script>
import Header from "../components/Header.vue"
import HeaderOrdi from "../components/HeaderOrdi.vue"
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
    Footer,
  },
}
</script>

<style>

.Bond:hover {
  animation : Bond 1.5s
}

@keyframes Bond {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.08);
  }
  100%{
    transform: scale(1);
  }
}

.AllerGauche {
  animation : AllerGauche 5s infinite
}

@keyframes AllerDroit{
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(100px);
  }
}

@keyframes AllerGauche{
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-100px);
  }
}

</style>

