<template>
  <div class="dark:bg-black">
<!--Header-->
      <div class="flex justify-between items-center">
        <h2 class=" bg-[url('/RondNoir.jpg')] dark:bg-none  bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton neon h1">Julie Albini</h2>
        <div class="xl:hidden pr-5">
          <Header  />
        </div>
        <div class="hidden pr-16 xl:block">
          <HeaderOrdi/>
        </div>
      </div>
      

<!--ME DECOUVRIR PROFESSIONNELLEMENT-->
    <!--ME DECOUVRIR-->
    <div class="flex justify-center items-center  lg:gap-28 md:gap-10">
        <div class="md:hidden">
          <div class="justify center m-5 -gap-36">
            <p class=" font-anton MeDecouvrir  -mb-12 text-Turquoise_pastel text-[120px] ">ME</p>
            <p class=" font-anton MeDecouvrir  -mb-16  text-Turquoise_pastel text-[120px] ">DÉ</p>
            <p class=" font-anton MeDecouvrir  -mb-16 text-Turquoise_pastel text-[120px] ">CO</p>
            <p class=" font-anton MeDecouvrir  -mb-16 text-Turquoise_pastel text-[120px] ">UV</p>
            <p class=" font-anton MeDecouvrir  -mb-16 text-Turquoise_pastel text-[100px] ">RIR</p>
          </div>
        </div>

        <div class="hidden md:block">
          <p class=" font-anton -mb-12 md:mb-10 text-Turquoise_pastel text-[120px] 
          lg:text-[160px] MeDecouvrir  xl:text-[180px] ">ME</p>
          <p class="MeDecouvrir  font-anton -mb-12 text-Turquoise_pastel text-[120px]  
          lg:text-[160px] xl:text-[180px]">DÉCOUVRIR</p>
        </div>
        
        <!--PROFESSIONNELLEMENT-->
        <div class="mt-10 ">
          <img class="w-1/4 h-3/4 absolute" src="../../public/fond.jpg" alt=""/>
          <div class="flex flex-col items-center relative">
              <p class="Vague1-1 font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
            lg:text-[120px] xl:text-[130px] ">PROF</p>
            <p class="Vague2-1 font-anton -mb-14 lg:-mb-16  text-Noir text-[100px] md:text-[110px]
            lg:text-[120px] xl:text-[130px]">FESS</p>
            <p class="Vague3-1 font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
            lg:text-[120px] xl:text-[130px]">IONN</p>
            <p class="Vague4-1 font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
            lg:text-[120px] xl:text-[130px]">ELLE</p>
            <p class="Vague5-1 font-anton -mb-14 lg:-mb-16 text-Noir text-[80px] md:text-[90px]
            lg:text-[100px] xl:text-[110px]">MENT</p>
            </div> 
          </div>
      </div>
      <div class="hidden md:flex justify-center">
            <Fleche/>
      </div>

<!--INTRODUCTION-->

      <!--PHOTO-->
        <div class="mt-56 md:flex justify-center items-center">
          <div class="lg:flex">
            <div class="xl:w-1/4">
              <img class="hidden arrive xl:block" src="../../public/traits/MoyenRose.jpg" alt="ligne de décoration"/>
            </div >
            <div class="">
                <img class=" xl:hidden object-fill w-full absolute hover:opacity-70 md:static " src="../../public/photo.jpg" alt="photo Julie Albini"/>
              <img class=" hidden xl:block w-full absolute  md:static hover:opacity-70" src="../../public/photozoom.jpg" alt="photo Julie Albini"/>
            </div>
          </div>
          <div class="">
            <div class="md:flex justify-center">
              <img class="hidden md:block" src="../../public/traits/GrandViolet.jpg" alt="ligne décorative"/>
            </div>

      <!--TEXTE VIOLET TRANSPARENT-->
            <div class="lg:flex items-center ">
              <div class="flex justify-end content-end md:static relative top-[333px]">
                  <div class="w-3/4 h-max md:w-content p-3 hover:bg-opacity-100 bg-violet_pastel bg-opacity-50">
                    <p class="font-poppins text-white h3">Bonjour !</p>
                    <p class="font-poppins text-white texte">Découvrez moi professionnellement a travers les projets que j’ai réalisés !</p>
                    <p class=" flex justify-end font-poppins text-white">Julie Albini</p>
                  </div> 
              </div>
              <div>
                  <img class="hidden lg:block" src="../../public/traits/PetitViolet.jpg" alt="ligne décorative"/>
              </div>
          </div>
          
          </div>
          </div>

<!--COMPETENCES-->

      <!--RIGUEUR-->
      <div class="xl:mx-64 lg:mx-48">
        <div class="mt-96 md:mt-28">
          <img class="w-max md:w-1/3 xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="transDroit ml-5 mt-10 font-anton dark:text-white text-black h2">RIGUEUR</p>
          </div> 
        </div>

      <!--TENACITE-->
        <div class="mt-10 flex flex-col items-end">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitRose.jpg" alt=""/>
          <div class="flex relative">
              <p class="transGauche mr-5 mt-10 font-anton h2 dark:text-white text-black">TENACITÉ</p>
            </div> 
        </div>

      <!--CREATIVITE-->
        <div class="mt-10">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitViolet.jpg" alt=""/>
          <div class="flex relative">
              <p class="transDroit ml-5 mt-10 h2 font-anton dark:text-white text-black ">CRÉATIVITÉ</p>
          </div> 
        </div>
      </div>

<!--LE CONCEPT-->

      <!--PHOTO-->
      <div class="hidden md:flex justify-center mt-20">
        <div class="imgDessus">
          <div class="filtre"></div>
        </div>
      </div>
      <div class="md:hidden flex justify-center mt-10">
        <img class="w-full " src="../../public/photo_coupee_bleu.jpg"/>
      </div>

    <!--DECORATION TRAITS BLEUS-->
      <div class="mt-10 flex justify-center lg:justify-around xl:justify-center">
        <div class="lg:flex items-center  xl:w-1/2 ">
          <div class="">
            <img class="hidden xl:block" src="../../public/traits/GrandBleu.jpg" alt="ligne décorative"/>
            <div class="flex justify-center">
              <img class= "hidden xl:block" src="../../public/traits/PetitBleu.jpg" alt="ligne décorative"/>
            </div>
          </div>
          <img class="hidden xl:block arrive" src="../../public/traits/MoyenBleu.jpg" alt="ligne décorative"/>
        </div>
        <div class="flex justify-center md:gap-0 gap-14 items-center">
          <div class="md:w-1/2">
            <img class="flex justify-center xl:hidden" src="../../public/traits/MoyenBleu.jpg" alt="ligne décorative"/>
          </div>
        
          <!--RECTANGLE ROSE-->
          <div class="flex w-1/2 md:justify-start lg:justify-end items-center ">
            <div class="w-[320px] p-5 h-[520px] flex flex-col justify-center  bg-rose_pastel bg-opacity-50 ">
              <h4 class="font-bold font-poppins  text-white h3">Le concept</h4>
              <p class="pb-3 leading-relaxed xl:leading-normal font-semibold texte font-poppins dark:text-white text-Gris_foncé">Ce site web a été créé dans le but 
                de vous permettre de me découvrir professionnellement, et de me donner l’opportunité 
                de mettre en avant les compétences que j’ai pu acquérir grâce aux projets que j’ai menés.</p>
            </div>
            <img class="hidden hauteur md:block" src="../../public/traits/PetitRose.jpg" alt="ligne décorative"/>
          </div>
        </div>
      </div>
        
<!--ME CONNAITRE-->

      <!--PHOTO-->
      <div class="hidden md:flex mt-28 ">
        <div class="imgDessous">
          <div class="filtreRose"></div>
          <div class="md:hidden">
            <img class="w-full " src="../../public/photo_coupee_bleu.jpg"/>
          </div>
        </div>
      </div>
      <div class="">
        <img class="mt-10 w-full md:hidden" src="../../public/photo_coupee_rose.jpg"/>
        <div class="flex md:justify-end lg:ml-10">
          <div class="flex md:w-max md:py-3 md:px-20 justify-center w-1/2 CouleurT-C bg-Turquoise_pastel bg-opacity-40">
            <h3 class="text-[40px] xl:text-[60px] text-white font-anton">Julie</h3>
          </div>
          <div class="flex md:w-max md:py-3 md:px-20 justify-center w-1/2 hover:bg-opacity-50 CouleurC-T  bg-Bleu_Ciel">
            <h3 class="h3 text-[40px] xl:text-[60px] text-white font-anton">Albini</h3>
          </div>
        </div>

        <!--PARAGRAPHE GRIS-->
        <div class="flex xl:justify-center justify-around xl:gap-28 md:items-center">
          <div class="w-1/2 h-full md:flex items-center md:w-[300px] md:h-[200px] lg:h-[300px] 
          hover:bg-white hover:border-4 hover:border-Gris_foncé  bg-Gris_foncé p-5">
            <p class="text-white font-poppins hover:text-Gris_foncé hover:font-semibold texte">Je suis actuellement étudiante en deuxième 
              année de BUT Métiers du Multimédia et de l’Internet et ai choisi de me spécialiser 
              en développement...</p>
          </div>
        <!--BOUTON-->
          <div class="w-1/2 h-1/2 md:flex items-center justify-center">
            <div class=" py-16 md:w-max px-5 flex justify-center items-center bg-violet_pastel bg-opacity-50">
                <router-link to="/meconnaitre">
                  <Bouton class=" BoutonRose bg-Rose ">Me connaître</Bouton>
                </router-link>
            </div>
            <img class="hidden md:block" src="../../public/traits/PetitViolet.jpg" alt="ligne décorative"/>
          </div>
        </div>
      </div>

<!--TELECHARGEMENT DU CV-->
    <a href="/CV_JulieAlbini.pdf" download>
      <div class="mt-28  bg-Turquoise AnimCV border-t-4 border-b-4 border-Turquoise border-opacity-10 bg-opacity-40 xl:w-full">
        <div class="flex justify-center items-center gap-5 md:gap-10">
          <FlecheRose class="md:w-[82px] md:h-[49px] lg:w-[102px] lg:h-[69px] xl:w-[150px] xl:h-[85px] "/>
          <p class="text-[50px] lg:text-[60px] xl:text-[80px] font-anton dark:text-white text-Noir hover:text-violet_pastel">MON CV</p>
        </div>
      </div>
    </a>

<!--MES PROJETS-->  

      <!--FOND VIOLET-->
      <div class="flex mt-28 justify-end">
        <img class="md:w-1/2 h-3/4 w-3/4 xl:h-3/4  absolute" src="../../public/FondViolet.jpg" alt=""/>
      </div>

      <!--LIGNGE DECORATIVE-->
      <div class="relative mt-10 md:flex justify-center items-center">
        <div class=" flex items-center justify-end">
          <img class="hidden xl:block" src="../../public/traits/GrandRose.jpg" alt="Ligne décorative"/>
          <img class="hidden md:block rotate-90 arrivePetit" src="../../public/traits/GrandBleu.jpg" alt="Ligne décorative"/>
        </div>

        <!--IMAGE PROJET-->
        <div class="flex flex-col gap-20">
          <div>
            <img class="w-full" src="../../public/MaquetteThe100.jpg" alt="image de la maquette Figma The 100"/>
          </div>
        <!--BOUTON-->
        <div class="flex mr-20 justify-end">
          <div class="md:flex md:gap-16 lg:gap-28 xl:gap-56 items-center">
              <p class="md:hidden mb-10 font-anton text-white text-[40px] md:text[50px] lg:text-[60px] 
              xl:text-[70px]">MES PROJETS</p>
              <router-link to="/projets">
                <Bouton class="BoutonGris bg-Gris_foncé ">Découvrir</Bouton>
              </router-link>
          <!--TITRE PROJET-->
              <div class="hidden md:block">
                  <p class="font-anton text-white h3">MES PROJETS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  <!--FOOTER-->
      <Footer class=" mt-36 mb-16 dark:mb-0"/>
</div>
</template>

<script>
import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Fleche from "../components/icons/fleche.vue"
import Trait from "../components/trait.vue"
import Bouton from "../components/bouton.vue"
import FlecheRose from "../components/icons/flecheRose.vue"
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
    Fleche,
    Trait,
    Bouton,
    FlecheRose,
    Footer
  }
}

</script>

<style>
.filtre {
  width:100%;
  height:100%;
  background:rgba(0, 223, 237, 0.4)
}


.filtreRose {
  width:100%;
  height:100%;
  background:rgba(255, 143, 163, 0.4)
}

.imgDessus {
  width:375px;
  height:100px;
  background:url("../../public/photo_coupee_bleu.jpg") center;
  background-repeat: no-repeat;
  
}

.imgDessous {
  width:600px;
  height:200px;
  background:url("../../public/photo_coupee2.jpg") center;
  background-repeat: no-repeat;
  
}

.AnimCV:hover {
    transition: 0.5s;
    background-color: white;
    border-color: rgb(0, 223, 237, 0.4);
}

.CouleurT-C {
  animation : CouleurT-C infinite 5s
}

.CouleurC-T {
  animation : CouleurC-T infinite 8s
}

@keyframes CouleurC-T{
  0% {
    background-color: rgb(112, 201, 243);
  }
  50%{
    background-color: rgb(0, 223, 237, 0.4);
  }
  100% {
    background-color: rgb(112, 201, 243);
}
}

@keyframes CouleurT-C{
  0% {
    background-color: rgb(0, 223, 237, 0.4);
  }
  50%{
    background-color: rgb(112, 201, 243);
  }
  100% {
    background-color: rgb(0, 223, 237, 0.4);
}
}

.Vague1-1 {
  animation: vague-1 2s infinite 0.2s;
}

.Vague2-1 {
  animation: vague-1 2s infinite 0.4s;
}

.Vague3-1 {
  animation: vague-1 2s infinite 0.6s;
}

.Vague4-1 {
  animation: vague-1 2s infinite 0.8s;
}

.Vague5-1 {
  animation: vague-1 2s infinite 1s;
}

.MeDecouvrir:hover {
  animation: MeDecouvrir 1s;
  transition: 5s;
}

.hauteurPetit {
  animation: hauteurPetit infinite 8s;
}

@keyframes hauteurPetit {
  0% {
    margin-left: 50%;
  }
  25% {
    margin-left: 0%;
    
  }
  50% {
    margin-left: 0%;
    
  }
  75% {
    margin-left: 0%;
    
  }
  100% {
    margin-left: 50%
  }
}


.arrive {
  animation: arrive infinite 8s;
 
}

@keyframes arrive {
  0% {
    margin-left: 100%;
  }
  25% {
    margin-left: 0%;
    
  }
  50% {
    margin-left: 0%;
    
  }
  75% {
    margin-left: 0%;
    
  }
  100% {
    margin-left: 100%
  }
}

.hauteur {
  animation: hauteur infinite 10s;
}

@keyframes hauteur {
  0%{
    margin-top : 100%
  }
  25%{
    margin-top: 0%;
  }
  50%{
    margin-top: 100%;
  }
  75%{
    margin-top: 0%;
  }
  100%{
    margin-top: 100%
  }

}

@keyframes MeDecouvrir {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}

@keyframes vague-1 {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
    color: white;
  }
  100%{
    transform: scale(1);
  }
}

.arrivePetit {
            animation: arrivePetit infinite 8s;
        }

        @keyframes arrivePetit {
            0% {
                margin-left: 50%;
            }

            25% {
                margin-left: 0%;

            }

            50% {
                margin-left: 0%;

            }

            75% {
                margin-left: 0%;

            }

            100% {
                margin-left: 50%
            }
        }

</style>



