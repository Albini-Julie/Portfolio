<template>

<!--HEADER-->
    <div class="flex justify-between items-center">
        <h2 class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton h1">MES PROJETS</h2>
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
          <p class="texte text-white font-poppins font-semibold">Voici les quelques projets que j’ai pu réaliser dans les différents domaines de la communication, 
            du design et du développement web.</p>
        </div>
      </div>

<!--BOX PROJET 1-->
      <ProjetDroit image="../../public/MaquetteBleu.jpg" 
        description="Création d’une maquette de site web sur le thème de la série The 100 sur le logiciel Figma."
        type="Projet personnel"
        filiere="DESIGN"
        trait1="../../public/traits/PetitRose.jpg"
        trait2="../../public/traits/PetitBleu.jpg"
        trait3="../../public/traits/MoyenBleu.jpg"
        jaime="28" />

        <!--COLLABORATION-->
        <div class="mt-28">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitViolet.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">COLLABORATION</p>
          </div> 
        </div>

<!--BOX PROJET 2-->
        <ProjetGauche image="../../public/UCRose.jpg" 
        description="Rédaction d’un dossier de com et création d’une identité graphique pour une équipe de esport."
        type="Projet étudiant"
        filiere="COMMUNICATION"
        trait1="../../public/traits/PetitRose.jpg"
        trait2="../../public/traits/PetitRoseFonce.jpg"
        trait3="../../public/traits/MoyenRose.jpg"
        jaime="19" />

        <!--RELEFLEXION-->
        <div class="mt-28">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">RÉFLÉXION</p>
          </div> 
        </div>

<!--BOX PROJET 3-->
    <router-link to="/tiktak">
        <ProjetDroit image="../../public/TikTakViolet.jpg" 
        description="Développement d’un site web de personnalisation de montres avec toutes les fonctionnalités utiles."
        type="SAE"
        filiere="DÉVELOPPEMENT"
        trait1="../../public/traits/PetitRose.jpg"
        trait2="../../public/traits/PetitBleu.jpg"
        trait3="../../public/traits/MoyenViolet.jpg"
        jaime="28"/>
    </router-link>

        <!--DÉTERMINATION-->
        <div class="mt-28">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitRose.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">DÉTERMINATION</p>
          </div> 
        </div>

<!--BOX PROJET 4-->
        <ProjetGauche image="../../public/FatumBleu.jpg" 
        description="Création d’un scénario de film et de ses visuels de promotion sur le logiciel Photoshop."
        type="SAE"
        filiere="DESIGN"
        trait1="../../public/traits/PetitRose.jpg"
        trait2="../../public/traits/PetitRoseFonce.jpg"
        trait3="../../public/traits/MoyenBleu.jpg"
        jaime="19" />

<!--FOOTER-->
        <Footer class="mt-36 mb-16"/>
        
</template>

<script>
import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import ProjetDroit from "../components/ProjetDroit.vue"
import ProjetGauche from "../components/ProjetGauche.vue"
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
    ProjetDroit,
    ProjetGauche,
    Footer
  }
}

</script>