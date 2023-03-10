<template>
<div class="dark:bg-black">
    <!--HEADER-->
    <div class="flex justify-between items-center">
        <h2 class="dark:bg-none bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton neon h1">Julie Albini</h2>
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
        <div class="hidden md:flex p-3 leading-none flex-col justify-center bg-Turquoise hover:bg-opacity-100 bg-opacity-50">
          <p class="font-anton text-[63px] text-white">DÉV</p>
          <p class="font-anton text-[63px] text-white">ELOP</p>
          <p class="font-anton text-[63px] text-white">PEM</p>
          <p class="font-anton text-[63px] text-white">ENT</p>
        </div>
          <img class="w-max hidden md:block hover:opacity-70" src="../../public/Photo2.jpg" alt="Photo Julie Albini"/>
          <img class="w-max md:hidden" src="../../public/photoViolet.jpg" alt=" image Julie Albini"/>
        </div>
    <!--Responsive en sm-->
        <div class="flex justify- md:hidden">
           <div class=" flex p-3 leading-none flex-col justify-center bg-Turquoise hover:bg-opacity-100 bg-opacity-50">
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
              <div class=" bg-Rose m-5 mb-0 bg-opacity-50 hover:opacity-0 p-3">
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
          <div class="bg-violet_pastel hover:opacity-50 xl:mr-20 p-10">
            <p class="font-poppins texte font-semibold text-white">ÉTUDIANTE EN 2ÈME ANNÉE DE BUT
              MÉTIERS DU MULTIMÉDIA
              et de l’internet </p>
          </div>
          <img class="hidden XDroit xl:block" src="../../public/traits/PetitBleu.jpg" alt="ligne décoratrice"/>
        </div>
        <div class="bg-Rose hidden md:block bg-opacity-50 hover:bg-opacity-100 p-3">
          <p class="font-bold font-poppins text-white texte ">Après mon stage d’observation de 3ème, j’ai su que c’était le métier d’infographiste que je 
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
        <img class="hidden lg:block relative Rot" src="../../public/traits/PetitNoir.jpg" alt="trait décoratif"/>
        <img class="hidden lg:block relative Rot2" src="../../public/traits/MoyenNoir.jpg" alt="barre décoratrice"/>
      </div>
    <!--TEXTE-->
      <p class="relative md:w-1/2 xl:w-1/3 dark:text-white font-poppins texte">Au lycée, pour faciliter mon entrée en MMI et mettre toutes mes chances de côté, 
        j’ai choisi trois spécialités : Sciences Economiques et Sociales pour le côté communication de MMI, Numériques 
        et Sciences de l’Informatique pour le côté numérique, et Langue, littérature et culture étrangère italien car 
        j’aime beaucoup les langues étrangères et particulièrement l’italien.</p>
    </div>
    <!--ICONES-->
    <div class="w-1/3 flex flex-col gap-10 items-center mr-5 md:mr-20 lg:mr-28 xl:mr-40 ">
      <Statistiques  class="Vague1 dark:hidden"/>
      <StatistiquesNoir  class="Vague1 hidden dark:block"/>
      <Html class="md:w-[150px] Vague2 md:h-[150px] w-[100px] h-[90px]"/>
      <Italie class="mt-8 w-[67px] Vague3 h-[96px] md:w-[107px] md:h-[146px]"/>
    </div>
  </div>
  <!--MMI-->
  <h2 class="hidden md:block relative ml-10 md:ml-40 text-violet_pastel Couleur xl:text-[275px] md:text-[220px] text-[155px] font-anton">MMI</h2>

  <!--EXPLICATIONS 3-->
  <div class="md:flex mt-20 lg:ml-10 items-center lg:gap-10 xl:gap-0 justify-around">
    <img class="md:hidden mb-40 w-max mx-auto hover:opacity-70" src="../../public/MMIRose.jpg" alt="Bâtiment MMI Montbéliard"/>
    <div class="md:w-1/3">
      <div class=" flex justify-end">
        <img class="absolute w-2/3 md:w-1/2 lg:w-1/4  -mt-20" src="../../public/FondBleu.jpg" alt="fond décoratif"/>
      </div>
      <p class="dark:text-white mx-10 md:mx-5 relative font-poppins texte">Une fois acceptée en MMI et ma première année réalisée, je me suis finalement rendue 
        compte que je préférais le développement et que j’aimais vraiment coder. C’est alors que j’ai choisi la spécialité 
        développement et que j’ai modifié mon projet professionnel pour finalement me diriger vers le métier de intégratrice 
        / développeuse web.</p>
    </div>
    <div class="xl:w-1/3 md:w-1/2 flex items-center flex-col">
      <img class="hidden md:block w-max hover:opacity-70" src="../../public/MMIRose.jpg" alt="Bâtiment MMI Montbéliard"/>
      <img class="w-max hidden md:block -mt-10 rotate-90" src="../../public/traits/GrandViolet.jpg" alt="ligne décorative"/>
    </div>
  </div>
  <h2 class="md:hidden relative flex justify-end mr-10 md:ml-40 Couleur text-violet_pastel xl:text-[275px] md:text-[220px] text-[155px] font-anton">MMI</h2>

  <!--CONNAISSANCES-->
  <div class="mt-36 md:my-28 mb-28">
    <img class="w-max xl:w-1/4 absolute" src="../../public/TraitRose.jpg" alt=""/>
    <div class="flex relative">
        <p class="ml-5 mt-10 h2 font-anton dark:text-white text-black transDroit">CONNAISSANCES</p>
    </div> 
  </div>

  <!--TABLEAU DE LOGOS-->
  <div class="flex justify-center items-center md:justify-start mx-2 md:mx-6 lg:mx-10 xl:mx-28 gap-10 md:gap-16 lg:gap-20 flex-wrap">
    <Figma class="RS"/>
    <htmlLogo class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Css class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <ChartJs class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Sql class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Js class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Vue class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <div class="flex flex-col items-center">
      <Tailwind class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
      <p class="RS font-anton text-violet_pastel bouton">Tailwind</p>
    </div>
    <Photoshop class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Illustrator class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <Wordpress class="RS w-[95px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"/>
    <div class="flex flex-col justify-center gap-5">
      <p class="RS font-anton text-violet_pastel text-[25px] xl:text-[35px]">Supabase</p>
      <p class="RS font-anton text-violet_pastel text-[25px] xl:text-[35px]">Firebase</p>
    </div>
      <img class="hidden md:block lg:ml-80 md:ml-40 xl:ml-80 -mt-20 rotate-90" src="../../public/traits/MoyenRose.jpg" alt="ligne décorative"/>
  </div>

  <!--AUTRES COMPETENCES-->
  <div class="lg:flex mt-20 items-center justify-around">
      <div class="Vague1 bg-Turquoise bg-opacity-50 xl:w-[460px] xl:h-[116px] w-[400px] h-[100px] justify-center flex items-center ">
          <p class="font-anton text-[30px] md:text-[35px] text-white">STRATÉGIE DE COMMUNICATION</p>
      </div>
    <div class="lg:block lg:mt-0 mt-10 flex justify-end">
      <div class="Vague2 bg-Rose flex items-center justify-center xl:w-[460px] xl:h-[116px] w-[420px] h-[100px]">
          <p class="font-anton text-[30px] md:text-[35px] text-white">TRAVAIL COLLECTIF</p>
      </div>
    </div>
  </div>
  <div class="lg:flex mt-10 items-center lg:mt-20 justify-around">
    <div class="Vague3 bg-violet_pastel bg-opacity-50 justify-center xl:w-[460px] xl:h-[116px] w-[400px] h-[100px] flex items-center ">
        <p class="font-anton text-[30px] md:text-[35px] text-white">GESTION DE BASE DE DONNÉES</p>
    </div>
    <div class="Vague4 mt-10 lg:mt-0 lg:block flex justify-end">
      <div class="bg-Rose bg-opacity-50 xl:w-[460px] xl:h-[116px] w-[420px] h-[100px] flex justify-center items-center ">
          <p class="font-anton text-[30px] md:text-[35px] text-white">RÉALISATION DE MAQUETTES</p>
      </div>
    </div>
  </div>

  <!--CE QUE J'AIME-->
  <div class="mt-36 md:mt-28 xl:mt-40  md:flex justify-between items-center">
    <div class="">
      <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
      <div class="flex relative">
          <p class="ml-5 mt-10 h2 font-anton dark:text-white text-black transDroit">CE QUE J'AIME</p>
      </div> 
    </div>
    <div class="hidden md:flex w-1/2 justify-center">
      <coeurRouge class="xl:w-[110px] xl:h-[90px] lg:w-[90px] lg:h-[75px]"/>
    </div>
  </div>

  <!--PHOTO CHATS SM-->
  <div class="flex mt-20 md:hidden justify-between items-center">
      <coeurRouge class="mx-auto"/>
    <img class="w-1/2 hover:opacity-70" src="../../public/ChatsRose.jpg" alt="image chats"/>
  </div>
  <div class="md:hidden hover:bg-opacity-100 bg-violet_pastel bg-opacity-50 mx-20 my-10 p-5 flex items-center justify-center">
    <p class=" text-white font-semibold font-poppins">J’aime beaucoup les animaux et j’ai d’ailleurs deux chats !</p>
  </div>

  <!--PHOTO MANGA SM-->
  <div>
    <img class="md:hidden hover:opacity-70" src="../../public/Mangas.jpg" alt="image manga"/>
  </div>
  <div class="md:hidden bg-Turquoise bg-opacity-40 w-2/3 my-10 p-5 flex items-center justify-center">
    <p class=" text-white font-semibold font-poppins">J’aime beaucoup les animaux et j’ai d’ailleurs deux chats !</p>
  </div>

  <!--PHOTO CHATS MD-->
  <div class="hidden md:mx-10 xl:mx-20 md:block lg:flex">
    <div class="flex gap-10 lg:items-start md:items-center lg:gap-0 mt-20">
      <img class="xl:absolute hover:opacity-70 xl:w-max xl:h-max w-2/5 h-1/3 lg:w-2/3 lg:h-2/3" src="../../public/Chats.jpg" alt="image chats"/>
      <div class="">
        <div class="ml-10 xl:ml-64 hover:bg-opacity-100 mt-10 lg:relative hidden md:block h-max bg-violet_pastel bg-opacity-50  p-5">
          <p class=" text-white font-semibold font-poppins">J’aime beaucoup les animaux et j’ai d’ailleurs deux chats !</p>
        </div> 
        <img class="mt-10 hidden hover:opacity-70 md:block lg:hidden " src="../../public/Mangas.jpg" alt="image mangas"/>
        <div class=" mx-20 mt-20 hidden lg:hidden md:block  bg-Rose bg-opacity-50  p-5">
          <p class=" text-white font-semibold font-poppins">J’apprécie également la lecture, et particulièrement les mangas.</p>
        </div>
      </div>
    </div>
    <div class="flex items-end">
      <img class="lg:-ml-56 lg:w-2/3 hover:opacity-70 xl:-ml-32 xl:w-2/3 md:hidden lg:block" src="../../public/Mangas.jpg" alt="image mangas"/>
      <div class="mb-10 lg:mb-20">
        <div class="flex items-center">
           <img class="hidden lg:block RotLong" src="../../public/traits/PetitRose.jpg" alt="ligne décorative"/>
          <img class="hidden lg:block XDroit" src="../../public/traits/GrandRosePastel.jpg" alt="ligne décorative"/>
        </div>
        <div class=" ml-20 hidden lg:block  bg-Rose bg-opacity-50  p-5">
          <p class=" text-white font-semibold font-poppins">J’apprécie également la lecture, et particulièrement les mangas.</p>
        </div>
      </div>
    </div>
  </div>

  <!--TENNIS ET SYNTHE-->
  <div class="flex mt-28 xl:mt-40  justify-center">
    <div class="lg:flex justify-start items-end">
      <img class="hidden lg:block" src="../../public/traits/MoyenViolet.jpg" alt="ligne décorative"/>
      <div class="lg:flex items-start">
        <img class="hidden lg:block XGauche mt-20" src="../../public/traits/PetitRose.jpg" alt="ligne décorative"/>
        <div class="flex flex-col justify-center md:w-max">
          <img class="hover:opacity-70" src="../../public/Tennis.jpg" alt="Image balles de tennis"/>
          <div class="bg-Rose py-5 hover:bg-Rose hover:opacity-50 flex justify-center items-center">
            <p class="text-white text-center texte font-poppins font-semibold">J’ai fait 8 années de tennis</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex items-start">
      <div class=" flex flex-col justify-center md:w-max">
        <img class="hover:opacity-70" src="../../public/Synthe.jpg" alt="Image synthé"/>
        <div class="bg-violet_pastel hover:bg-violet_pastel hover:opacity-50 py-5 flex justify-center items-center">
          <p class="text-white font-poppins font-semibold texte text-center">J’ai joué du synthé pendant 4 ans</p>
        </div>
      </div>
      <div class="lg:flex flex-col  items-center xl:items-end">
        <img class="hidden xl:block XBas mt-56" src="../../public/traits/HoriVioletFonce.jpg" alt="ligne décorative"/>
        <div class="flex items-center">
          <img class="hidden XHaut xl:block" src="../../public/traits/MoyenViolet.jpg" alt="ligne décorative"/>
          <img class="hidden xl:block XDroit" src="../../public/traits/PetitVioletFonce.jpg" alt="ligne décorative"/>
        </div>
      </div>
    </div>
  </div>

  <!--AUJOURD'HUI-->
    <div class="md:flex items-center md:justify-around mt-28 xl:mt-40">
      <div class="md:w-1/2 flex flex-col items-center justify-center">
        <div class="w-max transDroit bg-Turquoise px-1 bg-opacity-40">
          <p class="font-anton text-[68px] xl:[100px]  text-white">AUJOURD'HUI</p>
        </div>
        <div class="flex justify-center items-center">
          <img class="rotate-90 " src="../../public/traits/PetitBleu.jpg" alt="ligne décorative"/>
        </div>
      </div>
      <div class="md:w-1/2 md:flex flex-col items-start">
        <div class="flex items-center">
          <img class="mx-auto hover:opacity-70" src="../../public/Italie.jpg" alt="image Italie"/>
          <img class="hidden xl:block rotate-90" src="../../public/traits/PetitRose.jpg" alt="ligne décorative"/>
        </div>
        <div class="w-2/3 md:w-3/4 mx-auto md:mx-0 xl:w-2/3  mt-10 hover:bg-violet_pastel hover:opacity-50 bg-violet_pastel ">
          <p class="font-poppins text-center font-semibold texte text-white flex justify-center items-center p-3">Aujourd’hui je pratique de manière hebdomadaire 
            des cours d’italien. En effet, j’aime spécialement cette langue et ce pays.</p>
        </div>
      </div>
    </div>

    <!--FOOTER-->
    <Footer class="mt-36 mb-16 dark:mb-0"/>
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
import coeurRouge from "../components/icons/coeurRouge.vue"
import Footer from "../components/Footer.vue"
import StatistiquesNoir from "../components/icons/statistiquesNoir.vue"

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
    Wordpress,
    coeurRouge,
    Footer,
    StatistiquesNoir
  }
}

</script>

<style>
.Couleur{
  animation : Couleur 8s infinite;
}

@keyframes Couleur {
  0%{
    color: rgb(120, 121, 241);
  }
  20%{
    color: rgba(120, 121, 241, 0.8);
  }
  40%{
    color: rgb(255, 143, 163);
  }
  60%{
    color: rgba(255, 143, 163, 0.8);
  }
  80%{
    color: rgba(0, 223, 237);
  }
  100%{
    color: rgba(0, 223, 237, 0.8);
  }
}

.Rot{
  animation: Rot 6s infinite;
}

.RotLong{
  animation: Rot 8s infinite;
}

@keyframes Rot{
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(90deg);
  }
  75%{
    transform: rotate(90deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

.Rot2{
  animation: Rot2 6s infinite;
}

@keyframes Rot2{
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(90deg);
  }
  75%{
    transform: rotate(90deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

.XDroit {
  animation: XDroit 8s infinite
}

@keyframes XDroit{
  0% {
    transform: translate(0px);
  }
  50% {
    transform: translate(150px);
  }
}

.XGauche {
  animation: XGauche 8s infinite
}

@keyframes XGauche{
  0% {
    transform: translate(0px);
  }
  50% {
    transform: translate(-150px);
  }
}

.XHaut {
  animation: XHaut 8s infinite
}

@keyframes XHaut{
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(150px);
  }
}

.XBas {
  animation: XBas 8s infinite
}

@keyframes XBas{
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-150px);
  }
}
</style>