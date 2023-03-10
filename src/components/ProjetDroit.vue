<template>

    <!--PHOTO PROJET-->
    <div class="mt-10">
        <div class="md:flex items-end justify-around xl:justify-evenly md:mb-10 gap-5">
            <div class="lg:flex items-center">
                <img class="md:flex justify-center md:w-[566px] md:h-[312px] mt-20 w-full" :src="Image"/>
                <img class="hidden lg:block rotate-90 opacity-30" :src="trait3" alt="Ligne décorative"/>
            </div>
        <!--TYPE-->
            <div class="hidden md:block w-1/2 h-1/2 md:w-max  ">
                <div class="flex flex-col">
                    <div class="bg-Rose hover:bg-opacity-100 md:px-3 py-2 bg-opacity-50 flex justify-center">
                        <p class="font-anton text-white text-[25px] lg:text-[40px] xl:text-[50px]">{{ Type }}</p>
                    </div>
                </div>
            </div>
        </div>
    <!--DESCRIPTION-->
        
        <div class="flex md:justify-around xl:justify-evenly md:items-center">
    <!--FILIERE LG-->
                <div class="hidden md:w-max md:h-max md:flex w-1/2 bg-Turquoise hover:bg-opacity-50 items-center justify-center">
                    <p class="font-anton text-white text-[31px] xl:text-[50px]">{{Filiere}}</p>
                </div>

                <!--TYPE-->
            <div class=" w-1/2 h-1/2 md:w-max flex flex-col ">
                <div class="flex flex-col">
                    <div class="md:hidden bg-Rose md:px-3 py-2 bg-opacity-50 flex justify-center">
                        <p class="font-anton text-white text-[25px] xl:text-[50px]">{{ Type }}</p>
                    </div>
                </div>
                
    <!--BOUTON-->
            <div class="flex mt-10 justify-center">
                    <Bouton class="BoutonRose bg-Rose">Découvrir</Bouton>
            </div>

    <!--J'AIME-->
            <div class="mt-5 flex  justify-center items-center gap-5">
                <p class="text-[30px] dark:text-white xl:text-[50px] font-poppins font-bold">{{ Jaime }}</p>
                <Coeur class="w-[46px] h-[38px] md:w-[51px] md:h-[43px] xl:w-[61px] xl:h-[53px]"/>
            </div>
            </div>
                
            <!--<div class="xl:flex xl:items-center">-->
                <div class="w-1/2 h-1/2 lg:w-1/3 flex justify-center xl:w-1/4 ">
                    <div class="px-3 py-5 xl:py-10 bg-violet_pastel hover:bg-opacity-100 bg-opacity-50">
                        <p class="font-poppins text-[20px] xl:text-[22px] text-white font-semibold">
                            {{Description}}
                        </p>
                    </div>
                </div>
                <!--
                    <div class="">
                        <img class="hidden xl:block" src="../../public/traits/PetitViolet.jpg" alt="ligne décorative"/>
                    </div>
                -->
        </div>
    </div>

    <div class="flex justify-end md:hidden">
        
    <!--TRAIT BLEU-->
            <div class="ml-10 md-hidden w-max">
                <img class=" rotate-90 " :src="trait2" alt="ligne décorative"/>
            </div>
    <!--FILIERE-->
        <div class="w-1/2 bg-Turquoise hover:bg-opacity-50 flex items-center justify-center">
            <p class="font-anton text-white text-[31px] xl:text-[50px]">{{Filiere}}</p>
        </div>
    </div>    

</template>

<script>
import Bouton from "../components/bouton.vue"
import Coeur from "../components/icons/coeur.vue"

export default {
    props:{
        Type: String,
        Image: String,
        Filiere: String,
        Description: String,
        Jaime: String,
        trait1: String,
        trait2: String,
        trait3: String,
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

.BoutonRose:hover {
    transition: 0.8s;
    background-color: white;
    border-color: #FF8FA3;
    color: #FF8FA3;
    box-shadow: 12px 12px 2px 1px rgba(255, 143, 163);
}
</style>