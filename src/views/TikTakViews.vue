<template>
    <!--HEADER-->
        <div class="flex justify-between items-center">
            <h2 class="bg-[url('/RondNoir.jpg')] bg-contain neon pl-16 md:26 bg-no-repeat text-rose_pastel font-anton h1">TIK TAK</h2>
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

    <img class="my-20 md:hidden w-full" src="../../public/TikTak/TikTak.jpg"/>

    <!--LA DEMANDE-->
    <div class="flex mt-28  xl:mt-10 justify-between">
        <div class="w-3/4 h-3/4 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">LA DEMANDE</p>
          </div> 
        </div>
        <div class="hidden md:h-1/2 xl:h-max md:flex w-1/4 h-1/4 justify-start">
            <img class="rotate-90" src="../../public/traits/MoyenRose.jpg" alt="ligne décorative"/>
        </div>
    </div>

    <div class="md:flex md:gap-5 xl:gap-20 items-center xl:ml-32 ">
        <div class="md:flex flex-col items-center">
            <!--PHOTO-->
            <img class="xl:mt-10 hidden md:block" src="../../public/TikTak/TikTak.jpg"/>
            <!--TEXTE-->
            <p class="mt-5 font-poppins texte xl:mt-10 mx-10">Il nous a été demandé lors d’une SAE de créer un site web d’une 
                marque de montre avec toute l’identité de cette marque et sa communication. 
            Nous avions juste le nom de l’entreprise qui nous était donnée ainsi que l’ambiance de la marque ("sophistiquée'').
             Nous devions donc coder l’ensemble du site ainsi que toutes les fonctionnalités nécessaires pour que l’utilisateur 
            puisse personnaliser sa chaussure. Il était également imposé la réalisation d’une base de données pour le site, 
            permettant à l’utilisateur de se connecter et d’avoir accès aux montres qu’il avait créées précédemment.</p>
        </div>
        <!--SOPHISTIQUE + PERSONNALISER-->
        <div class="flex mt-10 xl:mr-10">
            <div class="w-1/2 md:hidden xl:block flex flex-col items-center justify-center bg-Rose leading-none bg-opacity-50">
                <h3 class="text-[120px] lg:text-[140px]  xl:text-[140px] font-anton">SOP</h3>
                <h3 class="text-[120px] lg:text-[140px] xl:text-[140px] font-anton">HIST</h3>
                <h3 class="text-[120px] lg:text-[140px] xl:text-[140px] font-anton">IQUÉ</h3>
            </div>
            <div class="w-1/2">
                <div class=" flex md:hidden lg:block flex-col items-center justify-center leading-none bg-violet_pastel bg-opacity-50">
                    <h3 class=" flex justify-center text-[100px] lg:text-[110px] xl:text-[140px] font-anton">PER</h3>
                    <h3 class="flex justify-center text-[100px] lg:text-[110px] xl:text-[140px] font-anton">SON</h3>
                    <h3 class="flex justify-center text-[100px] lg:text-[110px] xl:text-[140px] font-anton">NAL</h3>
                    <h3 class="flex justify-center text-[100px] lg:text-[120px] xl:text-[140px] font-anton">ISÉ</h3>
                </div>
                <div class="flex justify-center">
                    <img class="md:hidden lg:block rotate-90" src="../../public/traits/PetitBleu.jpg"/>
                </div>
            </div>
        </div>
    </div>

    <!--LA REPONSE-->
    <div class="flex mt-20 justify-between">
        <div class="w-3/4 xl:mb-10 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">LA RÉPONSE</p>
          </div> 
        </div>
        <div class="hidden md:flex w-1/4 justify-start">
            <img class="rotate-90" src="../../public/traits/MoyenViolet.jpg" alt="ligne décorative"/>
        </div>
    </div>
    
    <!--EXPLICATIONS-->
    <div class="lg:flex items-center">
        <div class="lg:w-1/2">
            <img class="mx-auto xl:imageXL xl:h-[380px] w-full lg:flex" src="../../public/TIkTak/CharteG.jpg" alt="charte graphique du projet Tik Tak"/>
            <p class="text-center md:text-left ml-10 xl:ml-28 mt-14 font-poppins texte">Premièrement, j’ai créé un logo et l’harmonie colorée du site. J’ai 
                également dû définir les objectifs de communication de la marque.</p>
        </div>
        <div class="lg:w-1/2">/
            <img class="absolute flex ml-28 lg:ml-80" src="../../public/CarreViolet.jpg" alt="carre décoratif"/>
            <p class=" relative font-poppins font-bold text-[20px] md:mx-10 md:text-[25px] xl:text-[30px] text-center">Le site se décompose en 3 différentes pages.</p>
        </div>
    </div>

    <!--EXPLICATIONS 2---->
    <div class="lg:flex items-center mt-32">
        <div class="lg:w-1/2">
            <img class="w-full mx-auto xl:imageXL relative" src="../../public/TIkTak/TikTak.jpg" alt="image du site Tik Tak"/>
        </div>
        <div class="lg:w-1/2 mt-10 mx-10 lg:mt-0">
            <img class="absolute ml-40" src="../../public/FondRose.jpg" alt="décor"/>
            <h4 class="relative h4 font-anton">La page d'accueil</h4>
            <p class="relative font-poppins texte">Elle présente la marque, ses valeurs, et donne des avis 
                de clients à propos des services proposées par l’entreprise. L’objectif de cette page 
                d’accueil est de donné confiance à l’utilisateur en la marque, et lui donner envie de 
                continuer sur le site jusqu’à la commande de ses chaussures personnalisées.</p>
        </div>
    </div>
    <div class="lg:flex items-center mt-32">
        <div class="lg:w-1/2 mt-10 lg:mt-0">
            <img class="absolute md:hidden lg:block ml-20 rotate-90" src="../../public/FondBleu.jpg" alt="décor"/>
            <p class="xl:mx-40 mx-10 relative font-poppins texte">L’utilisateur a également la possibilité d’accéder 
                sur cette page d’accueil aux montres qu’il a déjà créées et peut également les modifier 
                lorsqu’il est connecté.</p>
        </div>
        <div class="lg:w-1/2">
            <img class="w-full mt-16 lg:mt-0 mx-auto xl:imageXL relative" src="../../public/TIkTak/Montres.jpg" alt="image du site Tik Tak - valeurs"/>
        </div>
    </div>

    <!--EXPLICATIONS 3-->
    <img class=" relative mt-20 xl:ml-40" src="../../public/TIkTak/PageConnexion.jpg" alt="image de la page Connexion du site web Tik Tak"/>
    <div class="xl:mx-96 mt-20">
        <div class="flex  justify-end">
            <img class="w-1/3 absolute" src="../../public/FondViolet.jpg" alt ="fond décoratif"/>
        </div>
        <h4 class="relative font-anton h4">La page connexion</h4>
        <p class="relative font-poppins texte">Justement, l’utilisateur a à sa disposition une page connexion sur laquelle 
            il peut se connecter ou s’inscrire.</p>
        <p class="relative font-poppins texte">Au niveau de la connexion, plusieurs possibilité d’offre à lui : il peut se 
            connecter grâce à Google, grâce à Facebook, ou via son adresse mail et le mot de passe qu’il a enregistré 
            sur notre site. </p>
        <p class="relative font-poppins texte mt-10">Toutes les données du site web sont enregistrées dans une base de données Supabase. 
            On retrouve dans cette dernière les comptes users inscrits sur le site, ainsi que les montres créées par les 
            utilisateurs. C’est d’ailleurs ce qui permet de faire apparaître les montres créées par l’utilisateur connecté et 
            seulement lorsqu’il est connecté.</p>
        <div class="flex justify-end gap-20 mt-10">
            <Google class="relative lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
            <Facebook class="relative lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
            <Mail class="relative lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
        </div>
    </div>


</template>



<script>
import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue"
import Google from "../components/icons/google.vue"
import Facebook from "../components/icons/facebook.vue"
import Mail from "../components/icons/Mail2.vue"

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
    Google,
    Facebook,
    Mail
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