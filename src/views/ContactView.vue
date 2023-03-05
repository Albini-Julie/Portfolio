<template>
<div class="dark:bg-black">
    <!--Header-->
      <div class="flex justify-between items-center">
        <h2 class="dark:bg-none bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton neon 
        text-[50px] md:text-[100px] lg:text-[125px] xl:text-[110px]">ME CONTACTER</h2>
        <div class="xl:hidden pr-5">
          <Header  />
        </div>
        <div class="hidden pr-16 xl:block">
          <HeaderOrdi/>
        </div>
      </div>

    <div class="lg:flex items-start mt-20 lg:mt-40">
    <!--CONTACT lg + xl-->
        <div class="hidden lg:flex lg:w-2/3 leading-none mt-20 lg:ml-20 xl:ml-0 flex-col items-center">
            <p class="relative font-anton text-[65px] md:text-[120px] text-Turquoise">CONTACT</p>
            <p class="relative font-anton text-[65px] md:text-[120px] text-Turquoise">CONTACT</p>
            <p class="relative font-anton text-[65px] md:text-[120px] text-Turquoise">CONTACT</p>
        </div>
    <!--INTRODUCTION-->
        <div class="flex justify-center xl:justify-start">
            <div class="bg-violet_pastel w-1/2 xl:w-2/3 text-center p-5 bg-opacity-50 ">
                <p class="texte text-white font-poppins font-semibold">Si vous avez un commentaire sur le site ou que vous cherchez 
                    à me contacter, c’est sur cette page vous pourrez m’écrire !</p>
            </div>
        </div>
    <!--CONTACT md + sm-->
        <div class="flex lg:hidden lg:w-2/3 leading-none mt-20 flex-col items-end mr-5 md:mr-20">
            <p class="relative font-anton text-[70px] md:text-[100px] lg:text-[110px] xl:text-[120px] text-Turquoise">CONTACT</p>
            <p class="relative font-anton text-[70px] md:text-[100px] lg:text-[110px] xl:text-[120px] text-Turquoise">CONTACT</p>
            <p class="relative font-anton text-[70px] md:text-[100px] lg:text-[110px] xl:text-[120px] text-Turquoise">CONTACT</p>
        </div>
    </div>

    <!--FORMULAIRE-->
    <form action="https://api.web3forms.com/submit" method="post">
        <input type="hidden" name="access_key" value="63526bf5-9e2e-49b2-b5fd-f17f7480bac8">
    <div class="md:flex justify-around">
    <!--NOM-->
        <div>
            <div class="lg:mt-56 mt-28">
            <img class="w-max md:w-1/3 lg:w-1/4 absolute" src="../../public/TraitRose.jpg" alt="Trait décoratif"/>
            <div class="flex relative">
                <p class="ml-5 mt-10 transDroit formulaire font-anton dark:text-white text-black ">NOM</p>
            </div> 
            </div>
            <input class="ml-20 mt-20 border-b-4 focus:outline-none dark:bg-black formulaireOmbreRose h4 border-Rose border-opacity-50 w-2/3 lg:w-3/4 xl:w-w-5/6" 
            type="text" placeholder="Nom" name="nom" required>
        </div>

    <!--PRENOM-->
        <div>
            <div class="lg:mt-56 mt-28">
            <img class="w-max md:w-1/3 lg:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt="Trait décoratif"/>
            <div class="flex relative">
                <p class="ml-5 mt-10 formulaire font-anton transDroit dark:text-white text-black ">PRÉNOM</p>
            </div> 
            </div>
            <input class="ml-20 mt-20 border-b-4 dark:bg-black focus:outline-none formulaireOmbreBleu h4 border-Turquoise border-opacity-50 w-2/3 lg:w-3/4 xl:w-w-5/6" type="text" placeholder="Prénom" 
            name="prénom" required>
            </div>
    </div>

    <div class="md:flex justify-around">
    <!--ADRESSE MAIL-->
        <div>
            <div class="lg:mt-36 mt-14">
            <img class="w-max md:w-1/3 lg:w-1/4 absolute" src="../../public/TraitViolet.jpg" alt="Trait décoratif"/>
            <div class="flex relative">
                <p class="ml-5 mt-10 formulaire font-anton transDroit dark:text-white text-black ">ADRESSE MAIL</p>
            </div> 
            </div>
            <input class="ml-20 my-20 border-b-4 dark:bg-black focus:outline-none formulaireOmbreViolet h4 border-violet_pastel border-opacity-50 w-2/3 
            lg:w-3/4 xl:w-w-5/6" type="text" placeholder="Adresse mail" name="adresse_mail" required>
        </div>

    <!--MESSAGE-->
        <div>
            <div class="lg:mt-36 mt-14">
            <img class="w-max md:w-1/3 lg:w-1/4 absolute" src="../../public/TraitSaumon.jpg" alt="Trait décoratif"/>
            <div class="flex relative">
                <p class="ml-5 mt-10 formulaire font-anton transDroit dark:text-white text-black ">MESSAGE</p>
            </div> 
            </div>
            <textarea class="ml-20 my-20 dark:bg-black border-4 focus:outline-none formulaireOmbreSaumon h4 border-Rose w-2/3 lg:w-3/4 xl:w-5/6" 
            type="text" placeholder="Message" name="message" required />
            </div>
    </div>
     <input type="hidden" name="redirect" value="http://juliealbini.albini.fr/">

    <div class="flex justify-center">
        <button class="" type="submit">
            <Bouton  class="BoutonViolet bg-violet_pastel">Envoyer</Bouton>
        </button>
    </div>
    </form>

    <!--FOOTER-->
    <Footer class="mt-36 mb-16 dark:mb-0"/>
</div>
      
</template>


<script>
import Header from "../components/Header.vue"
import HeaderOrdi from "../components/HeaderOrdi.vue"
import Bouton from "../components/bouton.vue"
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
    Bouton,
    Footer
  },
  methods: {
    confirmation() {
      alert(
        "Votre message a bien été envoyé !"
      );
    },
  }
}

</script>

<style>

.BoutonViolet:hover {
    transition: 0.8s;
    background-color: white;
    border-color: #7879F1;
    color: #7879F1;
    box-shadow: 12px 12px 2px 1px rgba(120, 121, 241);
}

.formulaireOmbreRose:hover {
    transition: 0.8;
    box-shadow: 10px 7px 7px rgb(255, 143, 163, 0.6);
}

.formulaireOmbreBleu:hover {
    transition: 0.8;
    box-shadow: 10px 7px 7px rgb(0, 223, 247, 0.6);
}

.formulaireOmbreViolet:hover {
    transition: 0.8;
    box-shadow: 10px 7px 7px rgb(120, 121, 241, 0.6);
}

.formulaireOmbreSaumon:hover {
    transition: 0.8;
    box-shadow: 10px 7px 7px rgb(255, 143, 163);
}

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

.transGauche:hover {
  transition: 1s;
  transform: translateX(-100px);
}

.transGauche {
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