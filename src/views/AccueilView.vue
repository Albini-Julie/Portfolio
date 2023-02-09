<template>
<!--Header-->
      <div class="flex justify-between items-center">
        <h2 class="bg-[url('/RondNoir.jpg')] bg-contain pl-16 md:26 bg-no-repeat text-rose_pastel font-anton h1">Julie Albini</h2>
        <div class="xl:hidden">
          <Header />
        </div>
        <div class="hidden xl:block">
          <HeaderOrdi/>
        </div>
      </div>
      

<!--ME DECOUVRIR PROFESSIONNELLEMENT-->
    <div class="flex justify-center items-center  lg:gap-28 md:gap-10">
        <div class="md:hidden">
          <div class="justify center m-5 -gap-36">
            <p class=" font-anton -mb-12 text-Turquoise_pastel text-[120px] ">ME</p>
            <p class=" font-anton -mb-16  text-Turquoise_pastel text-[120px] ">DÉ</p>
            <p class=" font-anton -mb-16 text-Turquoise_pastel text-[120px] ">CO</p>
            <p class=" font-anton -mb-16 text-Turquoise_pastel text-[120px] ">UV</p>
            <p class=" font-anton -mb-16 text-Turquoise_pastel text-[100px] ">RIR</p>
          </div>
        </div>

        <div class="hidden md:block">
          <p class=" font-anton -mb-12 md:mb-10 text-Turquoise_pastel text-[120px] 
          lg:text-[160px] xl:text-[180px] ">ME</p>
          <p class=" font-anton -mb-12 text-Turquoise_pastel text-[120px]  
          lg:text-[160px] xl:text-[180px]">DÉCOUVRIR</p>
        </div>
        
        <div class="mt-10 ">
          <img class="w-1/4 h-3/4 absolute" src="../../public/fond.jpg" alt=""/>
          <div class="flex flex-col items-center relative">
              <p class=" font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
            lg:text-[120px] xl:text-[130px] ">PROF</p>
            <p class=" font-anton -mb-14 lg:-mb-16  text-Noir text-[100px] md:text-[110px]
            lg:text-[120px] xl:text-[130px]">FESS</p>
            <p class=" font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
            lg:text-[120px] xl:text-[130px]">IONN</p>
            <p class=" font-anton -mb-14 lg:-mb-16 text-Noir text-[100px] md:text-[110px]
            lg:text-[120px] xl:text-[130px]">ELLE</p>
            <p class=" font-anton -mb-14 lg:-mb-16 text-Noir text-[80px] md:text-[90px]
            lg:text-[100px] xl:text-[110px]">MENT</p>
            </div> 
          </div>
      </div>
      <div class="hidden md:flex justify-center">
            <Fleche/>
      </div>

<!--INTRODUCTION-->

        <div class="mt-28 md:flex justify-center items-center">
          <div class="lg:flex">
            <div class="lg:w-1/2">
              <img class="hidden lg:block" src="../../public/traits/MoyenRose.jpg" alt="ligne de décoration"/>
            </div >
            <div class="">
              <img class=" xl:hidden w-full absolute  md:static " src="../../public/photo.jpg" alt="photo Julie Albini"/>
              <img class=" hidden xl:block w-full absolute  md:static " src="../../public/photozoom.jpg" alt="photo Julie Albini"/>
            </div>
          </div>
          <div class="">
            <div class="md:flex justify-center">
              <img class="hidden md:block" src="../../public/traits/GrandViolet.jpg" alt="ligne décorative"/>
              <!--<Trait couleur="#7879F1" hauteur="428px"/>-->
            </div>
            <div class="lg:flex items-center ">
              <div class="flex justify-end content-end  md:static relative">
                  <div class="w-3/4 h-max md:w-content p-3  bg-violet_pastel bg-opacity-50">
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

      <div class="xl:mx-28">
        <div class="mt-96 md:mt-28">
          <img class="w-max md:w-1/3 xl:w-1/3 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 font-anton text-black h2">RIGUEUR</p>
          </div> 
        </div>

        <div class="mt-10 flex flex-col items-end">
          <img class="w-max xl:w-1/3 absolute" src="../../public/TraitRose.jpg" alt=""/>
          <div class="flex relative">
              <p class="mr-5 mt-10 font-anton h2 text-black">TENACITÉ</p>
            </div> 
        </div>

        <div class="mt-10">
          <img class="w-max xl:w-1/3 absolute" src="../../public/TraitViolet.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black ">CRÉATIVITÉ</p>
          </div> 
        </div>
      </div>

<!--LE CONCEPT-->

      <div class="hidden md:flex justify-center mt-20">
        <div class="img">
          <div class="filtre"></div>
        </div>
      </div>
      <div class="md:hidden mt-28">
        <img class="w-full " src="../../public/photo_coupee_bleu.jpg"/>
      </div>

      <div class="mt-28 flex justify-center">
        <div class="flex items-center lg:w-1/2 ">
          <div class="">
            <img class="hidden lg:block" src="../../public/traits/GrandBleu.jpg" alt="ligne décorative"/>
            <div class="flex justify-center">
              <img class= "hidden lg:block" src="../../public/traits/PetitBleu.jpg" alt="ligne décorative"/>
            </div>
          </div>
          <img class="hidden lg:block" src="../../public/traits/MoyenBleu.jpg" alt="ligne décorative"/>
        </div>
        <div class="flex items-center">
          <div class="w-1/2 ">
            <img class="lg:hidden" src="../../public/traits/MoyenBleu.jpg" alt="ligne décorative"/>
          </div>
          <div class="flex w-1/2  md:justify-start lg:justify-end items-center ">
            <div class="w-[320px] p-5 h-[520px] flex flex-col justify-center  bg-rose_pastel bg-opacity-50 ">
              <h4 class="font-bold font-poppins  text-white h3">Le concept</h4>
              <p class="leading-relaxed xl:leading-normal font-bold texte font-poppins text-Gris_foncé">Ce site web a été créé dans le but 
                de vous permettre de me découvrir professionnellement, et de me donner l’opportunité 
                de mettre en avant les compétences que j’ai pu acquérir grâce aux projets que j’ai menés.</p>
            </div>
            <img class="hidden md:block" src="../../public/traits/PetitRose.jpg" alt="ligne décorative"/>
          </div>
        </div>
      </div>
        
<!--ME CONNAITRE-->
      <div class="hidden md:flex mt-28 ">
        <div class="imgDessous">
          <div class="filtreRose"></div>
          <div class="md:hidden">
            <img class="w-full " src="../../public/photo_coupee_bleu.jpg"/>
          </div>
        </div>
      </div>

      <div class="">
        <img class="mt-28 w-full md:hidden" src="../../public/photo_coupee_rose.jpg"/>
        <div class="flex md:justify-end">
          <div class="flex md:w-max md:py-3 md:px-20 justify-center w-1/2 bg-Turquoise_pastel bg-opacity-40">
            <h3 class="text-[40px] xl:text-[60px] text-white font-anton">Julie</h3>
          </div>
          <div class="flex md:w-max md:py-3 md:px-20 justify-center w-1/2 bg-Bleu_Ciel">
            <h3 class="h3 text-[40px] xl:text-[60px] text-white font-anton">Albini</h3>
          </div>
        </div>

        <div class="flex">
          <div class="w-1/2 h-full bg-Gris_foncé p-5">
            <p class="text-white font-poppins texte">Je suis actuellement étudiante en deuxième 
              année de BUT Métiers du Multimédia et de l’Internet et ai choisi de me spécialiser 
              en développement...</p>
          </div>
          <div class="w-1/2 h-1/2 py-12 flex justify-center items-center bg-violet_pastel bg-opacity-50">
              <router-link to="/meconnaitre">
                <Bouton class=" bg-Rose ">Me connaître</Bouton>
              </router-link>
          </div>
        </div>
      </div>
      
</template>

<script>
import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Fleche from "../components/icons/fleche.vue"
import Trait from "../components/trait.vue"
import Bouton from "../components/bouton.vue"

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
    Bouton
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

.img {
  width:600px;
  height:200px;
  background:url("../../public/photo_coupee.jpg") center;
  background-repeat: no-repeat;
  
}

.imgDessous {
  width:600px;
  height:200px;
  background:url("../../public/photo_coupee2.jpg") center;
  background-repeat: no-repeat;
  
}
</style>