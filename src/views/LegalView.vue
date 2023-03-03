<template>
<div class="dark:bg-black">
  <!--Header-->
      <div class="flex justify-between items-center">
        <h2 class="dark:bg-none bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat neon text-rose_pastel font-anton h1">CÔTÉ LÉGAL</h2>
        <div class="xl:hidden pr-5">
          <Header  />
        </div>
        <div class="hidden pr-16 xl:block">
          <HeaderOrdi/>
        </div>
      </div>

  <!--INTRODUCTION-->
      <div class="flex justify-center mt-20 ">
        <div class="bg-violet_pastel w-1/2 xl:w-1/3 text-center p-5 bg-opacity-50 ">
          <p class="texte text-white font-poppins font-semibold">Vous trouverez sur cette page les mentions légales liées à ce site web. Merci d’en prendre connaissance.</p>
        </div>
      </div>

  <!--MENTIONS LEGALES-->
        <div class="my-28">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton transDroit dark:text-white text-black ">MENTIONS LÉGALES</p>
          </div> 
        </div>

      <div class="flex justify-end items-around">
  <!--IMAGE-->
        <img class="w-1/2 h-1/2 absolute " src="../../public/FondRose.jpg" alt="Fond rose décoratif"/>
      </div>
  <!--TEXTE-->
      <div class="relative mx-10 md:mx-20 lg:mx-36 xl:mx-48">
        <p class="dark:text-white font-poppins texte">Cette page décrit les mentions légales qui s’appliquent à tout 
          internaute visitant ce site. En le consultant, vous vous engagez sans réserve à les respecter. 
          Les mentions légales pouvant être modifiées à tout moment et sans préavis, nous vous engageons 
          à les consulter régulièrement.</p>
        <p class="dark:text-white mt-10 font-poppins texte">Responsable éditorial et responsable légal : Julie Albini </p>
        <p class="dark:text-white font-poppins texte">Adresse : 4 Place Tharradin, 25200 Montbéliard</p>
        <p class="dark:text-white font-poppins texte">E-mail : julie-albini@orange.fr </p>
        <p class="dark:text-white mt-10 font-poppins texte">Hébergeur: Infomaniak Network SA</p>
        <p class="dark:text-white font-poppins texte">Adresse : Rue Eugène Marziano 25, 1227 Les Acacias (GE)</p>
        <p class="dark:text-white font-poppins texte">N°TVA : CHE-103.167.648</p>
      </div>

  <!--CONDITIONS D'UTILISATION-->
        <div class="my-28">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitViolet.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton dark:text-white text-black transDroit">CONDITION D'UTILISATION</p>
          </div> 
        </div>
  
  <!--IMAGE-->
      <img class="w-1/2 h-1/2 absolute " src="../../public/FondBleu.jpg" alt="Fond bleu décoratif"/>
  <!--TEXTE-->
      <div class="mx-10 md:mx-20 lg:mx-36 xl:mx-48">
        <p class="dark:text-white relative font-poppins texte">Ce site est exploité par Julie Albini. La présentation et chacun des éléments, y compris les marques, logos et noms de domaine, apparaissant sur le site https://www.albini.fr/ sont protégés par les lois en vigueur sur la propriété intellectuelle, et appartiennent à Julie Albini, ou font l’objet d’une autorisation d’utilisation. Aucun élément composant le Site ne peut être copié, reproduit, modifié, réédité, chargé, dénaturé, transmis ou distribué de quelque manière que ce soit, sous quelque support que ce soit, de façon partielle ou intégrale, sans l’autorisation écrite et préalable de Julie Albini à l’exception d’une stricte utilisation pour les besoins de la presse et sous réserve du respect des droits de propriété intellectuelle et de tout autre droit de propriété dont il est fait mention. Toute utilisation autorisée des éléments composant ou figurant dans le site doit se faire sans dénaturation, modification ou altération de quelque manière que ce soit. Julie Albini se réserve le droit de poursuivre tout acte de contrefaçon de ses droits de propriété intellectuelle. Le présent Contrat est soumis au droit Français. Le présent Contrat s’applique dans le monde entier, et seule sa version en langue française fait foi en vue de son interprétation.</p>
        <p class="dark:text-white relative mt-10 font-poppins texte">Graphisme, photos et illustrations : Le graphisme (incluant le webdesign et le logo) a été réalisé par Julie Albini.</p>
        <p class="dark:text-white font-poppins texte">Les photographies appartiennent à Julie Albini, etc.</p>
      </div>
  
  <!--IMAGE-->
      <div class="flex justify-end items-around">
          <img class="w-1/2 h-1/2 absolute md:hidden" src="../../public/FondViolet.jpg" alt="Fond violet décoratif"/>
      </div>
  <!--TEXTE-->
      <div class="mx-10 md:mx-20 lg:mx-36 xl:mx-48">
        <p class="dark:text-white mt-10 relative font-poppins texte">Déclaration à la CNIL : Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l’égard des traitements de données à caractère personnel) relative à l’informatique, aux fichiers et aux libertés, ce site n’a pas fait l’objet d’une déclaration auprès de la Commission nationale de l’informatique et des libertés (www.cnil.fr). Litiges : Les présentes conditions du site https://www.albini.fr/ sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.</p>
      </div>

  <!--FOOTER-->
      <Footer class="mt-36 mb-16"/>
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

<style>

.neon {  
      animation:neon infinite 4s;
      transition: 5s;
 }

 .transDroit:hover {
  transition: 1s;
  transform: translateX(100px);
}

.transDroit {
  transition: 1s;
  transform: translateX(0px);
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