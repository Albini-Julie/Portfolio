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
        <div class="bg-violet_pastel intro w-1/2 xl:w-1/3 text-center p-5 bg-opacity-50 ">
          <p class="texte text-white font-poppins font-semibold">Voici les quelques projets que j’ai pu réaliser dans les différents domaines de la communication, 
            du design et du développement web.</p>
        </div>
      </div>


<!--BOX PROJET 1-->
    <div v-for="(projet, index) in listeProjets " :key="projet.ID" >
      <!--COLLABORATION-->
   <div class="mt-28">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton dark:text-white uppercase text-black transDroit">{{ projet.Thème }}</p>
          </div> 
        </div>

          <router-link :to="projet.Lien">
          <ProjetGauche v-if="index%2 === 0" v-bind="projet"  image="/UCRose.jpg" 
        trait1="/traits/PetitRose.jpg"
        trait2="/traits/PetitRoseFonce.jpg"
        trait3="/traits/MoyenRose.jpg"
        
         />
        
        <ProjetDroit v-else v-bind="projet" image="/TikTakViolet.jpg" 
        trait1="/traits/PetitRose.jpg"
        trait2="/traits/PetitBleu.jpg"
        trait3="/traits/MoyenViolet.jpg"
 /> 
        </router-link>
      </div>

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

import {where, query, collection, getFirestore, getDocs, doc, getDoc, onSnapshot} from "firebase/firestore"


import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import ProjetDroit from "../components/ProjetDroit.vue"
import ProjetGauche from "../components/ProjetGauche.vue"
import Footer from "../components/Footer.vue"

export default {
  data: function () {
    return {
      menuOuvert: false,
      listeProjets: []
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
      console.log("firestore", firestore)
      // Base de données (collection)  document participant
      const dbProjets = collection(firestore, "Projets");
      console.log("Projets", dbProjets)
      // Recherche du user par son uid
      const q = query(dbProjets, "idprojet");
      await onSnapshot(q, (snapshot) => {
        projet.listeProjets = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("listeProjets", projet.listeProjets);
      });
      this.listeProjets.forEach(function (projet) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "ImgProjet/" + projet.Image);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              projet.Image = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
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
</style>