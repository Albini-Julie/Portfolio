<template>
    <!--HEADER-->
        <div class="flex justify-between items-center">
            <h2 class="bg-[url('/RondNoir.jpg')] bg-contain neon pl-16 md:26 bg-no-repeat text-rose_pastel font-anton 
             text-[50px] md:text-[75px] lg:text-[90px] xl:text-[70px] 2xl:text-[90px]">SUP'ANALYSE</h2>
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
            <div class="bg-Rose  flex justify-center xl:justify-center bg-opacity-50 w-full ">
                <p class="font-anton text-[90px] xl:text-[80px] text-white">NOTE 18</p>
            </div>
            <div class="bg-violet_pastel py-5">
                <a href="https://www.figma.com/file/v6c2hg30cCWfdpC2tzU1e2/Maquette-SAE-303?node-id=0%3A1&t=Hp7ClcVnxdAKQmHg-0">
                    <p class="font-anton text-center text-white bouton underline">La maquette Figma</p>
                </a>
                <a href="https://sae303juliealbini.albini.fr/">
                    <p class="mt-5 font-anton text-center text-white bouton underline">Le site</p>
                </a>
            </div>
        </div>
    </div>

    <!--LA DEMANDE-->
    <div class="flex mt-28  xl:mt-10 justify-between">
        <div class="w-3/4 h-3/4 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black transDroit">LA DEMANDE</p>
          </div> 
        </div>
        <div class="hidden md:h-1/2 xl:h-max md:flex w-1/4 h-1/4 justify-start">
            <img class="rotate-90" src="../../public/traits/MoyenRose.jpg" alt="ligne décorative"/>
        </div>
    </div>

    <!--EXPLICATION 1-->
    <div class="lg:flex justify-evenly items-center">
        <div class="xl:w-1/3 lg:w-1/2 mt-10 md:mt-0 mx-6 md:mx-20">
            <p class="font-poppins texte">Ce travail a été réalisé lors d’une SAE. Nous avions donc un total de temps restreint 
                pour le faire. Ici nous disposions de 2 jours et demi.</p>
            <p class="font-poppins mt-5 texte">
                Il nous a été demandé d’intégrer un site web responsive contenant plusieurs API sous la forme de 4 graphiques et 2 cartes OSM, 
                ainsi que des composants et des composables. Les 4 graphiques devait être des représentations différentes, et nous avions l’obligation 
                de réaliser une un graphe avec une table de données permettant le filtrage.</p>

            <div class="flex lg:hidden flex-col items-end my-10 leading-none">
                <p class="font-anton text-Rose text-[65px] md:text-[75px] lg:text-[90px]">ANALYSER</p>
                <p class="font-anton text-Rose text-[65px] md:text-[75px] lg:text-[90px]">ANALYSER</p>
                <p class="font-anton text-Rose text-[65px] md:text-[75px] lg:text-[90px]">ANALYSER</p>
            </div>
            
            <div class="flex justify-end">
                <img class="absolute w-1/2 h-1/4 md:w-1/3 mr-20 lg:hidden" src="../../public/FondViolet.jpg" alt="fond décoratif"/>
            </div>
            <p class="relative font-poppins texte">Nous devions créer ce site web à l’aide de 2 API : une que nous choisissions et une autre qui 
                nous était imposée : l’API géographique. </p>
            <p class="relative font-poppins mt-5 texte">Nous avions donc à notre disposition plusieurs API en libre accès. Bien entendu, 
                notre site devait contextualiser ces graphiques. </p>
        </div>
        <div class="hidden lg:flex xl:w-1/3 lg:w-1/2 gap-20 flex-col items-center ">
            <div class="flex flex-col items-center leading-none">
                <p class="font-anton text-Rose text-[65px] md:text-[75px] lg:text-[90px]">ANALYSER</p>
                <p class="font-anton text-Rose text-[65px] md:text-[75px] lg:text-[90px]">ANALYSER</p>
                <p class="font-anton text-Rose text-[65px] md:text-[75px] lg:text-[90px]">ANALYSER</p>
            </div>
            <img src="../../public/traits/HoriVioletFonce.jpg" alt="trait décoratif"/>
        </div>
    </div>

     <!--LA REPONSE-->
    <div class="flex mt-28  xl:mt-10 justify-between">
        <div class="w-3/4 h-3/4 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton text-black transDroit">LA RÉPONSE</p>
          </div> 
        </div>
        <div class="hidden md:h-1/2 xl:h-max md:flex w-1/4 h-1/4 justify-start">
            <img class="rotate-90" src="../../public/traits/MoyenBleu.jpg" alt="ligne décorative"/>
        </div>
    </div>

    <!--EXPLICATION 2-->
    <div class="hidden lg:flex justify-end">
        <img class="absolute mr-40 w-1/3 h-1/3 mt-20" src="../../public/FondRose.jpg" alt="fond décoratif"/>
    </div>
    <div class="flex justify-around items-center">
        <div class="lg:block hidden xl:w-1/3 lg:w-1/2">
            <div class="flex flex-col items-center leading-none">
                <p class="font-anton text-violet_pastel opacity-50 text-[65px] md:text-[75px] lg:text-[90px]">SUP'ANALYSE</p>
                <p class="font-anton text-violet_pastel text-[65px] md:text-[75px] lg:text-[90px]">SUP'ANALYSE</p>
                <p class="font-anton text-Noir text-[65px] md:text-[75px] lg:text-[90px]">SUP'ANALYSE</p>
            </div>
        </div>
        <div class="xl:w-1/3 lg:w-1/2 mx-6 mt-10 lg:mt-0 md:mx-20">
            <p class="relative font-poppins texte">Ainsi, pour mon site web, j’ai choisi l’API sur l’enseignement supérieur pour créer 
                mes graphiques. En effet, j’avais plusieurs idées d’articles sur ce thème, qui disposait de nombreuses API et 
                qui me fournissait donc des données riches et variées.</p>
            <p class="relative font-poppins texte">J’ai aussi trouvé le nom de mon site web : Sup’analyse. Ce nom met bien en avant le 
                fait que je vais analyser l’enseignement supérieur.</p>

            <div class="relative flex flex-col items-center leading-none my-10 lg:hidden">
                <p class="font-anton text-violet_pastel opacity-50 text-[65px] md:text-[75px] lg:text-[90px]">SUP'ANALYSE</p>
                <p class="font-anton text-violet_pastel text-[65px] md:text-[75px] lg:text-[90px]">SUP'ANALYSE</p>
                <p class="font-anton text-Noir text-[65px] md:text-[75px] lg:text-[90px]">SUP'ANALYSE</p>
            </div>

            <div class="flex lg:hidden justify-start">
                <img class="absolute ml-40 w-1/2 h-1/4 md:w-1/3 md:h-1/5 mt-10" src="../../public/FondRose.jpg" alt="fond décoratif"/>
            </div>
            <p class="relative font-poppins texte mt-5 ">Dans un premier temps, j’ai imaginé sur un Google Doc les sujets que je pourrais 
                explorés sur le thème de l’enseignement supérieur d’après les données qui m’étaient fournies dans les API, et 
                surtout j’ai assimilé chaque article à un ou plusieurs type de graphique qui serait approprié pour le sujet que 
                je voulais traiter.</p>
            <p class="relative font-poppins texte mt-5">Une fois ce travail réalisé, j’ai créer un guide de style ainsi que la maquette 
                de mon site sur Figma.</p>
        </div>
    </div>

    <!--EXPLICATION 3-->
    <div class="lg:flex justify-around items-center mt-28">
        <div class="lg:hidden xl:w-1/2 lg:w-1/2 mt-10 lg:mt-0">
            <img class="border-2" src="../../public/CharteGraphiqueSupanalyse.jpg" alt="image charte graphique du site Supanalyse"/>
        </div>
        <div class="xl:w-1/3 lg:w-1/2 mx-6 mt-10 lg:mt-0 md:mx-20">
            <img class="absolute mt-10 w-2/3  h-1/6 lg:w-1/4 lg:h-1/4 " src="../../public/FondBleu.jpg" alt="fond décoratif"/>
            <p class="relative mb-5 font-poppins texte">J’ai tout d’abord choisi des couleurs douces et modernes, qui rappellent les couleurs 
                habituellement utilisées sur les sites concernant les études.</p>
            <p class="relative font-poppins texte">Au niveau des typographies, j’ai privilégié des typographies sans empattement, qui 
                rendent le site plus moderne.</p>
        </div>
        <div class="hidden lg:block xl:w-1/2 lg:w-1/2 mt-10 lg:mt-0">
            <img class="border-2" src="../../public/CharteGraphiqueSupanalyse.jpg" alt="image charte graphique du site Supanalyse"/>
        </div>
    </div>

    <!--EXPLICATION 4-->
    <div class="lg:w-1/2 flex mx-auto mt-20 lg:mt-28">
        <p class="relative mx-6 md:mx-20 lg:mx-0 font-poppins texte font-semibold text-center">J’ai donc repris ce guide de style pour créer ma maquette qui se compose de 5 
        pages : 1 pour l’accueil et 4 autres pour les articles.</p>
    </div>

    <div class="flex flex-col justify-center items-center mt-28">
        <img class="absolute h-1/4 w-full" src="../../public/FondViolet.jpg" alt="fond décoratif"/>
        <img class="relative mx-auto md:w-1/2 lg:w-1/3" src="../../public/MaquetteSupanalyse.jpg" alt="image maquette Supanalyse"/>
    </div>

    <!--L'INTEGRATION DU SITE WEB-->
    <div class="mt-20 lg:mt-28">
        <p class="mx-6 md:ml-20 xl:ml-40 relative font-anton h4 font-bold text-center md:text-left">L'intégration du site web</p>
    </div>

    <img class="hidden lg:block absolute w-1/4 h-1/2 mt-56" src="../../public/FondBleu.jpg" alt="fond décoratif">
    <div class="flex justify-around items-center lg:mx-10 gap-10 mt-20 lg:mt-28">
        <div class="lg:w-1/2">
            <p class="relative mx-6 md:mx-20 lg:mx-0 font-poppins texte">Pour intégrer mon site web, j’ai utilisé le framework VueJS, et pour les graphiques, 
                j’ai utilisé le framework ChartJS. </p>
            <p class="relative mx-6 md:mx-20 lg:mx-0 font-poppins texte">De plus, pour le style, j’ai servi la bibliothèque Tailwind.</p>
            <p class="relative mx-6 md:mx-20 lg:mx-0 font-poppins texte">Précisons que les couleurs des graphiques sont toutes choisies aléatoirement 
                à chaque chargement de page.</p>

            <div class="lg:hidden my-10 flex items-center justify-center gap-10 lg:justify-between">
                <TailwindRose class=" md:w-[120px] md:h-[60px] w-[110px] h-[50px]"/>
                <ChartjsRose class=" md:w-[120px] md:h-[100px] w-[100px] h-[80px]"/>
                <VueRose class=" md:w-[120px] md:h-[100px] w-[100px] h-[80px]"/>
            </div>
            <div>
                <img class="lg:hidden border-2 my-10 mx-auto" src="../../public/AccueilSupanalyse.jpg" alt="image accueil du site Supanalyse"/>
            </div>
            
            <img class="lg:hidden absolute w-1/2 h-1/3 md:w-1/3 md:h-1/4" src="../../public/FondBleu.jpg" alt="fond décoratif">
            <p class="relative mx-6 md:mx-20 lg:mx-0 lg:mt-20 texte font-poppins">Tout d’abord, la navigation est géré par un menu en destock et un menu 
                hamburger en mobile. </p>
            <p class="relative mx-6 md:mx-20 lg:mx-0 mt-10 texte font-poppins">Sur la page d’accueil, on retrouve une petite introduction sur le thème 
                du site, et une invitation à le découvrir.</p>
            <p class="relative mx-6 md:mx-20 lg:mx-0 texte font-poppins mt-10">On retrouve également une carte sur laquelle il est possible de choisir 
                une région pour avoir accès à toutes les localisations et les noms des écoles dans cette région sous la 
                forme de ping.</p>
        </div>
        <div class="hidden lg:w-1/2 lg:flex flex-col gap-28">
            <div class="flex items-center justify-around">
                <TailwindRose class="w-[130px] h-[70px] xl:w-[150px] xl:h-[90px]"/>
                <ChartjsRose class="w-[130px] h-[110px] xl:w-[150px] xl:h-[130px]"/>
                <VueRose class="w-[130px] h-[110px] xl:w-[150px] xl:h-[130px]"/>
            </div>
            <div>
                <img class="border-2 mx-auto" src="../../public/AccueilSupanalyse.jpg" alt="image accueil du site Supanalyse"/>
            </div>
        </div>
    </div>

    <!--IMAGES CARTES-->
    <div class="xl:flex justify-around items-center mt-28">
        <img class="mx-auto" src="../../public/MapSupanalyse.jpg" alt="Image map Supanalyse"/>
        <img class="mx-auto" src="../../public/MapSupanalysePing.jpg" alt="Image map Supanalyse avec ping"/>
    </div>

    <div class="flex justify-around items-center">
        <div class="">
            <img src="../../public/Statistiques1.jpg" alt="image graphique site Supanalyse"/>
        </div>
    </div>

</template>


<script>
import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue"
import TailwindRose from "../components/icons/Icons_Supanalyse/TailwindRose.vue"
import ChartjsRose from "../components/icons/Icons_Supanalyse/ChartjsRose.vue"
import VueRose from "../components/icons/Icons_Supanalyse/VueRose.vue"

export default {
  data: function () {
    return {
    };
  },
  components: {
    Header,
    HeaderOrdi,
    Footer,
    TailwindRose,
    ChartjsRose,
    VueRose,
  }
  
}
</script>