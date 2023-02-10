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

    <img class="my-20 md:hidden w-full" src="../../public/TikTak.jpg"/>

    <!--LA DEMANDE-->
    <div class="flex justify-between">
        <div class="w-3/4 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">LA DEMANDE</p>
          </div> 
        </div>
        <div class="hidden md:flex w-1/4 justify-start">
            <img class="rotate-90" src="../../public/traits/MoyenRose.jpg" alt="ligne décorative"/>
        </div>
    </div>

    <!--PHOTO-->
    <img class="mt-10 hidden md:block" src="../../public/TikTak.jpg"/>
    <!--TEXTE-->
    <p class="mt-5 font-poppins texte mx-10">Il nous a été demandé lors d’une SAE de créer un site web d’une 
        marque de montre avec toute l’identité de cette marque et sa communication. 
Nous avions juste le nom de l’entreprise qui nous était donnée ainsi que l’ambiance de la marque ("sophistiquée'').
 Nous devions donc coder l’ensemble du site ainsi que toutes les fonctionnalités nécessaires pour que l’utilisateur 
puisse personnaliser sa chaussure. Il était également imposé la réalisation d’une base de données pour le site, 
permettant à l’utilisateur de se connecter et d’avoir accès aux montres qu’il avait créées précédemment.</p>
    <!--SOPHISTIQUE + PERSONNALISER-->
    <div class="flex mt-10">
        <div class="w-1/2 flex flex-col items-center justify-center bg-Rose leading-none bg-opacity-50">
            <h3 class="text-[120px] xl:text-[160px] font-anton">SOP</h3>
            <h3 class="text-[120px] xl:text-[160px] font-anton">HIST</h3>
            <h3 class="text-[120px] xl:text-[160px] font-anton">IQUÉ</h3>
        </div>
        <div class="w-1/2">
            <div class=" flex flex-col items-center justify-center leading-none bg-violet_pastel bg-opacity-50">
                <h3 class="text-[100px] xl:text-[160px] font-anton">PER</h3>
                <h3 class="text-[100px] xl:text-[160px] font-anton">SON</h3>
                <h3 class="text-[100px] xl:text-[160px] font-anton">NAL</h3>
                <h3 class="text-[100px] xl:text-[160px] font-anton">ISÉ</h3>
            </div>
            <div class="flex justify-center">
                <img class="rotate-90" src="../../public/traits/PetitBleu.jpg"/>
            </div>
        </div>
    </div>

    <!--LA REPONSE-->
    <div class="flex mt-20 justify-between">
        <div class="w-3/4 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">LA RÉPONSE</p>
          </div> 
        </div>
        <div class="hidden md:flex w-1/4 justify-start">
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