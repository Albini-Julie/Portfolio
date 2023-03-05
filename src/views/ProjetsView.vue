<template>
<div class="dark:bg-black">
<!--HEADER-->
    <div class="flex justify-between items-center">
        <h2 class="dark:bg-none bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton neon h1">MES PROJETS</h2>
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
      <router-link to="/unifiedchampions">
        <ProjetGauche image="../../public/UCRose.jpg" 
        description="Rédaction d’un dossier de com et création d’une identité graphique pour une équipe de esport."
        type="Projet étudiant"
        filiere="COMMUNICATION"
        trait1="../../public/traits/PetitRose.jpg"
        trait2="../..public/traits/PetitRoseFonce.jpg"
        trait3="../../public/traits/MoyenRose.jpg"
        jaime="19" />
        </router-link>

        <!--RELEFLEXION-->
        <div class="mt-28">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton dark:text-white text-black transDroit">RÉFLÉXION</p>
          </div> 
        </div>

<!--BOX PROJET 2-->
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
              <p class="ml-5 mt-10 h2 font-anton dark:text-white text-black transDroit">DÉTERMINATION</p>
          </div> 
        </div>

<!--BOX PROJET 3-->
        <router-link to="/supanalyse">
          <ProjetGauche image="../../public/SupanalyseBleu.jpg" 
          description="Création d’un scénario de film et de ses visuels de promotion sur le logiciel Photoshop."
          type="SAE"
          filiere="DESIGN"
          trait1="../../public/traits/PetitRose.jpg"
          trait2="../../public/traits/PetitRoseFonce.jpg"
          trait3="../../public/traits/MoyenBleu.jpg"
          jaime="19" />
        </router-link>

<!--FOOTER-->
        <Footer class="mt-36 mb-16 dark:mb-0"/>
</div>
        
</template>

<script>

//import {
 //getFirestore, // Obtenir le Firestore
//collection, // Utiliser une collection de documents
//onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
//query, // Permet d'effectuer des requêtes sur Firestore
//} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";



import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import ProjetDroit from "../components/ProjetDroit.vue"
import ProjetGauche from "../components/ProjetGauche.vue"
import Footer from "../components/Footer.vue"

export default {
  data: function () {
    return {
      menuOuvert: false,
      idprojet: null,
      filiere: null,
      jaime: null,
      nom : null,
      type: null,
    };
  },
  mounted() {
    const projet = this;
    this.getProjet(projet);
  },
  methods: {
    async getProjet(projet) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbProjets = collection(firestore, "Projets");
      // Recherche du user par son uid
      const q = query(dbProjets, where("idprojet", "==", projet.uid));
      await onSnapshot(q, (snapshot) => {
        this.projetInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("projet Info", this.projetInfo);
      });
    },
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