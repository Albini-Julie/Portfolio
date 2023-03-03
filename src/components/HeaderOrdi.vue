<template>
    <div class="flex gap-10">
        <div>
            <router-link to="/">
                <div class=" mt-10 z-30 ">
                    <img class="w-max absolute" src="../../public/TraitBleu.jpg" alt=""/>
                    <div class="flex relative">
                        <p class="anim ml-5 xl:mt-12 font-anton text-black dark:text-white xl:text-[40px]">ACCUEIL</p>
                </div> 
                </div>
            </router-link>
      </div>

      <div>
        <router-link to="/projets">
            <div class="mt-10  z-30">
                <img class=" absolute" src="../../public/TraitRose.jpg" alt=""/>
                <div class="flex relative">
                    <p class="anim ml-5 xl:mt-12 font-anton text-black dark:text-white xl:text-[40px]">MES PROJETS</p>
            </div> 
            </div>
        </router-link>
      </div>

      <div>
        <router-link to="/meconnaitre">
            <div class="mt-10  z-30">
                <img class="w-max absolute" src="../../public/TraitViolet2.jpg" alt=""/>
                <div class="flex relative">
                    <p class="anim ml-5 xl:mt-12 font-anton text-black dark:text-white xl:text-[40px]">ME CONNAITRE</p>
            </div> 
            </div>
        </router-link>
      </div>

      <div>
        <router-link to="/legal">
            <div class="mt-10 z-30">
                <img class="w-[171px] h-[79px] absolute" src="../../public/TraitSaumon.jpg" alt=""/>
                <div class="flex relative">
                    <p class="anim ml-5 xl:mt-12 font-anton text-black dark:text-white xl:text-[40px]">LÉGAL</p>
            </div> 
            </div>
        </router-link>
      </div>
    </div>
</template>

<style>

.anim:hover {
    transition: 0.5s;
    transform: scale(1.1);
}

.anim {
    transition: 0.5s;
    transform: scale(1);
}

</style>