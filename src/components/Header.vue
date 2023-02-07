<template>
    <button class="flex items-start z-50" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
          :class="[menuOuvert ? 'hidden' : '',]">
            <Menu class="" />
            <span class="sr-only">Menu</span>
        </button> 

      <div class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
    :class="['bg-Noir  text-white', menuOuvert ? 'translate-x-0' : '',]">
    <div class="flex justify-center items-center">
      <ul class=" " @click="menuOuvert = !menuOuvert ">
  
        <div class="flex justify-center mt-10 gap-8">
          <router-link to="/">
            <h2 class="font-anton flex content-end text-white text-[79px] lg:text-[86px]">ACCUEIL</h2>
          </router-link>
          <button class="relative flex content-start z-50 mt-5" aria-controls="menu" :aria-expanded="menuOuvert" 
              :class="[menuOuvert ? '' : 'hidden',]">
              <Croix class="" />
              <span class="sr-only">Menu</span>
          </button> 
        </div>

        <router-link to="/projets">
          <div class="mt-10  z-30">
            <img class="w-max absolute" src="../../public/TraitBleu.jpg" alt=""/>
            <div class="flex relative">
                <p class="ml-5 mt-10 font-anton text-white text-[65px] lg:text-[86px]">MES PROJETS</p>
          </div> 
        </div>
      </router-link>

      <router-link to="/meconnaitre">
          <div class="mt-10  z-30 flex flex-col items-end">
            <img class="w-max absolute" src="../../public/TraitSaumon.jpg" alt=""/>
            <div class="flex relative">
                <p class="mr-5 mt-10 font-anton text-white text-[65px] lg:text-[86px]">ME CONNAITRE</p>
          </div> 
        </div>
      </router-link>

      <router-link to="/mentionslegales">
          <div class="mt-10  z-30 ">
            <img class="w-max absolute" src="../../public/TraitViolet2.jpg" alt=""/>
            <div class="flex relative">
                <p class="ml-5 mt-10 font-anton text-white text-[65px] lg:text-[86px]">LÉGAL</p>
          </div> 
        </div>
      </router-link>

      </ul>
    </div>
      </div>

      <Suspense>
    <router-view class="" />
  </Suspense>

     
</template>

<script >
import Menu from "../components/icons/menu.vue";
import Croix from "../components/icons/croix.vue"

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    Menu,
    Croix
  }
}
  </script>