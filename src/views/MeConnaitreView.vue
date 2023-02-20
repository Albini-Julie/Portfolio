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
      <div class="md:w-2/4 xl:w-1/4  gap-14 flex flex-col md:mr-10 lg-mr:0 xl:ml-20 ">
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

  <!--FOND DECORATIF-->
  <img class="absolute lg:w-max  w-1/2 " src="../../public/FondViolet.jpg" alt="fond décoratif"/>
  <!--EXPLICATIONS 2-->
  <div class="flex items-center gap-10 md:gap-0">
    <div class="flex gap-10">
  <!--DECORATION BARRES-->
      <div class="lg:flex md:w-1/4 lg:w-1/3 flex-col items-center">
        <img class="hidden lg:block relative" src="../../public/traits/PetitNoir.jpg" alt="trait décoratif"/>
        <img class="hidden lg:block relative" src="../../public/traits/MoyenNoir.jpg" alt="barre décoratrice"/>
      </div>
    <!--TEXTE-->
      <p class="relative md:w-1/2 xl:w-1/3 font-poppins texte">Au lycée, pour faciliter mon entrée en MMI et mettre toutes mes chances de côté, 
        j’ai choisi trois spécialités : Sciences Economiques et Sociales pour le côté communication de MMI, Numériques 
        et Sciences de l’Informatique pour le côté numérique, et Langue, littérature et culture étrangère italien car 
        j’aime beaucoup les langues étrangères et particulièrement l’italien.</p>
    </div>
    <!--ICONES-->
    <div class="w-1/3 flex flex-col gap-10 items-center mr-5 md:mr-20 lg:mr-28 xl:mr-40 ">
      <Statistiques class="md:w-[150px] md:h-[150px] w-[90px] h-[90px]"/>
      <Html class="md:w-[150px] md:h-[150px] w-[90px] h-[90px]"/>
      <Italie class="mt-8 md:w-[127px] md:h-[156px] w-[97px] h-[136px]"/>
    </div>
  </div>
  <!--MMI-->
  <h2 class="hidden md:block relative ml-10 md:ml-40 text-violet_pastel xl:text-[275px] md:text-[220px] text-[155px] font-anton">MMI</h2>

  <!--EXPLICATIONS 3-->
  <div class="md:flex mt-20 lg:ml-10 items-center lg:gap-10 xl:gap-0 justify-around">
    <img class="md:hidden mb-40 w-max mx-auto" src="../../public/MMIRose.jpg" alt="Bâtiment MMI Montbéliard"/>
    <div class="md:w-1/3">
      <div class=" flex justify-end">
        <img class="absolute w-2/3 md:w-1/2 lg:w-1/4  -mt-20" src="../../public/FondBleu.jpg" alt="fond décoratif"/>
      </div>
      <p class="mx-10 md:mx-5 relative font-poppins texte">Une fois acceptée en MMI et ma première année réalisée, je me suis finalement rendue 
        compte que je préférais le développement et que j’aimais vraiment coder. C’est alors que j’ai choisi la spécialité 
        développement et que j’ai modifié mon projet professionnel pour finalement me diriger vers le métier de intégratrice 
        / développeuse web.</p>
    </div>
    <div class="xl:w-1/3 md:w-1/2 flex items-center flex-col">
      <img class="hidden md:block w-max" src="../../public/MMIRose.jpg" alt="Bâtiment MMI Montbéliard"/>
      <img class="w-max hidden md:block -mt-10 rotate-90" src="../../public/traits/GrandViolet.jpg" alt="ligne décorative"/>
    </div>
  </div>
  <h2 class="md:hidden relative flex justify-end mr-10 md:ml-40 text-violet_pastel xl:text-[275px] md:text-[220px] text-[155px] font-anton">MMI</h2>

  <!--CONNAISSANCES-->
  <div class="mt-36 md:my-28 mb-28">
    <img class="w-max xl:w-1/4 absolute" src="../../public/TraitRose.jpg" alt=""/>
    <div class="flex relative">
        <p class="ml-5 mt-10 h2 font-anton text-black ">CONNAISSANCES</p>
    </div> 
  </div>

  <!--TABLEAU DE LOGOS-->
  <div class="flex justify-center items-center md:justify-start mx-2 md:mx-6 lg:mx-10 xl:mx-28 gap-10 md:gap-16 lg:gap-20 flex-wrap">
    <Figma class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <htmlLogo class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Css class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <ChartJs class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Sql class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Js class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Vue class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <div class="flex flex-col items-center">
      <Tailwind class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
      <p class="font-anton text-violet_pastel bouton">Tailwind</p>
    </div>
    <Photoshop class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Illustrator class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Wordpress class="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <div class="flex flex-col justify-center gap-5">
      <p class="font-anton text-violet_pastel text-[25px] xl:text-[35px]">Supabase</p>
      <p class="font-anton text-violet_pastel text-[25px] xl:text-[35px]">Firebase</p>
    </div>
      <img class="hidden md:block lg:ml-80 md:ml-40 xl:ml-80 -mt-20 rotate-90" src="../../public/traits/MoyenRose.jpg" alt="ligne décorative"/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Statistiques from "../components/icons/statistiques.vue";
import Html from "../components/icons/html.vue";
import Italie from "../components/icons/italie.vue";
import ChartJs from "../components/icons/connaissances/chartjs.vue"
import Css from "../components/icons/connaissances/css.vue"
import Figma from "../components/icons/connaissances/figma.vue"
import htmlLogo from "../components/icons/connaissances/hmtlLogo.vue"
import Illustrator from "../components/icons/connaissances/illustrator.vue"
import Js from "../components/icons/connaissances/js.vue"
import Photoshop from "../components/icons/connaissances/photoshop.vue"
import Sql from "../components/icons/connaissances/sql.vue"
import Tailwind from "../components/icons/connaissances/tailwind.vue"
import Vue from "../components/icons/connaissances/vue.vue"
import Wordpress from "../components/icons/connaissances/wordpress.vue"

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    Header,
    HeaderOrdi,
    Statistiques,
    Html,
    Italie,
    ChartJs,
    Css,
    Figma,
    htmlLogo,
    Illustrator,
    Js,
    Photoshop,
    Sql,
    Tailwind,
    Vue,
    Wordpress
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