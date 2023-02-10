<template>

    <!--PHOTO PROJET-->
    <div class="mt-10">
        <img class="md:hidden w-full" :src="image"/>
        <div class="hidden md:flex justify-center mt-20">
            <div class="img">
                <div class="filtre"></div>
            </div>
        </div>
    <!--DESCRIPTION-->
        <div class="flex">
            <div class="w-1/2 h-1/2">
                <div class="px-3 py-5 bg-violet_pastel bg-opacity-50">
                    <p class="font-poppins text-white bouton font-semibold">
                        {{description}}
                    </p>
                </div>
    <!--FILIERE-->
                <div class="bg-Turquoise flex justify-center">
                    <p class="font-anton text-white text-[50px] xl:text-[110px]">{{filiere}}</p>
                </div>
            </div>
    <!--TYPE-->
            <div class="w-1/2 flex flex-col justify-center gap-2">
                <div class="flex flex-col">
                    <div class="bg-Rose py-2 bg-opacity-50 flex justify-center">
                        <p class="font-anton text-white text-[25px] xl:text-[50px]">{{ type }}</p>
                    </div>
    <!--TRAIT ROSE-->
                    <div class="">
                        <img class="w-1/2 static rotate-90 " :src="trait1" alt="ligne décorative"/>
                    </div>
                </div>
    <!--BOUTON-->
            <div class="flex mt-10 justify-center">
                <router-link to="/mesprojets">
                    <Bouton class="bg-Rose">Découvrir</Bouton>
                </router-link>
            </div>

    <!--J'AIME-->
            <div class="flex justify-center items-center gap-5">
                <p class="text-[30px] xl:text-[50px] font-poppins font-bold">{{ jaime }}</p>
                <Coeur class="w-[41px] h-[33px] md:w-[51px] md:h-[43px] lg:w-[61px] lg:h-[53px] xl:w-[78px] xl:h-[64px]"/>
            </div>
    
    <!--TRAIT BLEU-->
            <div class="ml-10 w-max">
                        <img class=" rotate-90 " :src="trait2" alt="ligne décorative"/>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bouton from "../components/bouton.vue"
import Coeur from "../components/icons/coeur.vue"

export default {
    props:{
        type: String,
        image: String,
        filiere: String,
        description: String,
        jaime: String,
        trait1: String,
        trait2: String
    },
    components:{
        Bouton,
        Coeur
    },
}
</script>

<style>
.filtre {
  width:100%;
  height:100%;
  background:rgba(0, 223, 237, 0.4)
}

.img {
  width:550px;
  height:300px;
  background:url("../../public/MaquetteThe100.jpg") center;
  background-repeat: no-repeat;
}
</style>