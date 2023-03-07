<template>
<div class="dark:bg-black">
    <!--HEADER-->
        <div class="flex justify-between items-center">
            <h2 class="dark:bg-none bg-[url('/RondNoir.jpg')] bg-contain neon pl-16 md:26 bg-no-repeat text-rose_pastel font-anton h1">TIK TAK</h2>
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
                <p class="font-anton text-[90px] xl:text-[80px] text-white">NOTE 18</p>
            </div>
            <div class="bg-Rose py-5">
                <a href="http://sae301.albini.fr/">
                    <p class="font-anton text-center text-white bouton underline">Le site</p>
                </a>
                <a href="https://docs.google.com/document/d/1-wqaw1iETTG0XxBBQax5mo8JWRJz134sx23MrL-WOsI/edit?usp=sharing">
                    <p class="mt-5 font-anton text-center text-white bouton underline">Les objectifs de communication</p>
                </a>
            </div>
        </div>
    </div>

    <img class="my-20 md:hidden w-full" src="../../public/TIkTak/TikTak.jpg"/>

    <!--LA DEMANDE-->
    <div class="flex mt-28  xl:mt-10 justify-between">
        <div class="w-3/4 h-3/4 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="ml-5 mt-10 h2 font-anton dark:text-white text-black transDroit">LA DEMANDE</p>
          </div> 
        </div>
        <div class="hidden md:h-1/2 xl:h-max md:flex w-1/4 h-1/4 justify-start">
            <img class="rotate-90" src="../../public/traits/MoyenRose.jpg" alt="ligne décorative"/>
        </div>
    </div>

    <div class="md:flex md:gap-5 xl:gap-20 items-center xl:ml-32 ">
        <div class="md:flex flex-col items-center">
            <!--PHOTO-->
            <img class="xl:mt-10 hidden md:block" src="../../public/TIkTak/TikTak.jpg"/>
            <!--TEXTE-->
            <p class="dark:text-white mt-5 font-poppins texte xl:mt-10 mx-10 lg:mx-10 md:mx-20">Il nous a été demandé lors d’une SAE de créer un site web d’une 
                marque de montre avec toute l’identité de cette marque et sa communication. 
            Nous avions juste le nom de l’entreprise qui nous était donnée ainsi que l’ambiance de la marque ("sophistiquée'').
             Nous devions donc coder l’ensemble du site ainsi que toutes les fonctionnalités nécessaires pour que l’utilisateur 
            puisse personnaliser sa chaussure. Il était également imposé la réalisation d’une base de données pour le site, 
            permettant à l’utilisateur de se connecter et d’avoir accès aux montres qu’il avait créées précédemment.</p>
        </div>
        <!--SOPHISTIQUE + PERSONNALISER-->
        <div class="flex mt-10 xl:mr-10">
            <div class="w-1/2 md:hidden xl:block flex flex-col items-center justify-center bg-Rose leading-none bg-opacity-50">
                <h3 class="dark:text-white text-[120px] lg:text-[140px]  xl:text-[140px] font-anton">SOP</h3>
                <h3 class="dark:text-white text-[120px] lg:text-[140px] xl:text-[140px] font-anton">HIST</h3>
                <h3 class="dark:text-white text-[120px] lg:text-[140px] xl:text-[140px] font-anton">IQUÉ</h3>
            </div>
            <div class="w-1/2">
                <div class=" flex md:hidden lg:block flex-col items-center justify-center leading-none bg-violet_pastel bg-opacity-50">
                    <h3 class="dark:text-white flex justify-center text-[100px] lg:text-[110px] xl:text-[140px] font-anton">PER</h3>
                    <h3 class="dark:text-white flex justify-center text-[100px] lg:text-[110px] xl:text-[140px] font-anton">SON</h3>
                    <h3 class="dark:text-white flex justify-center text-[100px] lg:text-[110px] xl:text-[140px] font-anton">NAL</h3>
                    <h3 class="dark:text-white flex justify-center text-[100px] lg:text-[120px] xl:text-[140px] font-anton">ISÉ</h3>
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
              <p class="ml-5 mt-10 h2 font-anton dark:text-white text-black transDroit">LA RÉPONSE</p>
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
            <p class="dark:text-white text-center md:text-left ml-10 xl:ml-28 mx-10 lg:mx-10 md:mx-20 mt-14 font-poppins texte">Premièrement, j’ai créé un logo et l’harmonie colorée du site. J’ai 
                également dû définir les objectifs de communication de la marque.</p>
        </div>
        <div class="lg:w-1/2">/
            <img class="absolute flex ml-28 lg:ml-80" src="../../public/CarreViolet.jpg" alt="carre décoratif"/>
            <p class="dark:text-white relative font-poppins font-bold text-[20px] md:mx-10 md:text-[25px] xl:text-[30px] text-center">Le site se décompose en 3 différentes pages.</p>
        </div>
    </div>

    <!--EXPLICATIONS 2---->
    <div class="lg:flex items-center mt-32">
        <div class="lg:w-1/2">
            <img class="w-full mx-auto xl:imageXL relative" src="../../public/TIkTak/TikTak.jpg" alt="image du site Tik Tak"/>
        </div>
        <div class="lg:w-1/2 mt-10 mx-10 lg:mt-0">
            <img class="absolute ml-40 w-1/2 md:w-max" src="../../public/FondRose.jpg" alt="décor"/>
            <h4 class="dark:text-white relative lg:mx-10 md:mx-20 h4 font-anton">La page d'accueil</h4>
            <p class="dark:text-white relative lg:mx-10 md:mx-20 font-poppins texte">Elle présente la marque, ses valeurs, et donne des avis 
                de clients à propos des services proposées par l’entreprise. L’objectif de cette page 
                d’accueil est de donné confiance à l’utilisateur en la marque, et lui donner envie de 
                continuer sur le site jusqu’à la commande de ses chaussures personnalisées.</p>
        </div>
    </div>
    <div class="lg:flex items-center mt-32">
        <div class="lg:w-1/2 md:mt-10 lg:mt-0">
            <img class="absolute hidden lg:block ml-20 rotate-90" src="../../public/FondBleu.jpg" alt="décor"/>
            <p class="dark:text-white mx-10 lg:mx-10 md:mx-20 xl:mx-40 relative font-poppins texte">L’utilisateur a également la possibilité d’accéder 
                sur cette page d’accueil aux montres qu’il a déjà créées et peut également les modifier 
                lorsqu’il est connecté.</p>
        </div>
        <div class="lg:w-1/2">
            <img class="w-full mt-16 lg:mt-0 mx-auto xl:imageXL relative" src="../../public/TIkTak/Montres.jpg" alt="image du site Tik Tak - valeurs"/>
        </div>
    </div>

    <!--EXPLICATIONS 3-->
    <img class=" relative mt-20 mx-auto border-2" src="../../public/TIkTak/PageConnexion.jpg" alt="image de la page Connexion du site web Tik Tak"/>
    <div class="xl:mx-96 mt-20">
        <div class="flex justify-end">
            <img class="md:w-1/3 w-1/2 absolute" src="../../public/FondViolet.jpg" alt ="fond décoratif"/>
        </div>
        <h4 class="dark:text-white xl:ml-0 relative font-anton mx-10 lg:mx-10 md:mx-20 h4">La page connexion</h4>
        <p class="dark:text-white mx-10 xl:ml-0 relative font-poppins texte lg:mx-10 md:mx-20">Justement, l’utilisateur a à sa disposition une page connexion sur laquelle 
            il peut se connecter ou s’inscrire.</p>
        <p class="dark:text-white mx-10 lg:mx-10 md:mx-20 xl:ml-0 relative font-poppins texte">Au niveau de la connexion, plusieurs possibilité d’offre à lui : il peut se 
            connecter grâce à Google, grâce à Facebook, ou via son adresse mail et le mot de passe qu’il a enregistré 
            sur notre site. </p>
        <p class="dark:text-white mx-10 lg:mx-10 md:mx-20 xl:ml-0 relative font-poppins texte mt-10">Toutes les données du site web sont enregistrées dans une base de données Supabase. 
            On retrouve dans cette dernière les comptes users inscrits sur le site, ainsi que les montres créées par les 
            utilisateurs. C’est d’ailleurs ce qui permet de faire apparaître les montres créées par l’utilisateur connecté et 
            seulement lorsqu’il est connecté.</p>
        <div class="flex mx-10 md:mx-0 md:mr-10 justify-center md:justify-end gap-12 mt-10">
            <Google class="relative lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
            <Facebook class="relative lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
            <Mail class="relative lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
        </div>
    </div>

    <!--EXPLICATIONS 4-->
    <div class="lg:flex items-center mt-20">
        <div class="lg:w-1/2">
            <div class="flex items-center">
                <img class=" w-full mx-auto xl:imageXL relative" src="../../public/TIkTak/BaseDonnees.jpg" alt="image du site Tik Tak"/>
            </div>
        </div>
        <div class="lg:w-1/2  mt-10 lg:mt-0">
            <img class="absolute ml-40 lg:hidden w-1/2 md:w-max rotate-90" src="../../public/FondRose.jpg" alt="décor"/>
            <h4 class="dark:text-white mx-10 lg:mx-10 md:mx-20 relative h4 font-anton">La page personnalisation</h4>
            <p class="dark:text-white mx-10 lg:mx-10 md:mx-20 relative font-poppins texte">Enfin, l’utilisateur peut personnaliser sa montre 
                Tik Tak sur la page Personnalisation. Pour cela, il doit choisir la couleur et le matériaux de 3 pièces 
                différentes sur la montre : le bracelet, le contour de l’écran, et l’écran.Justement, l’utilisateur a à 
                sa disposition une page connexion sur laquelle 
                il peut se connecter ou s’inscrire.</p>
        </div>
    </div>

    <!--PERSONNALISER-->
    <div class="lg:flex mt-10 lg:mt-20 items-center">
        <div class="lg:w-1/2 my-10 lg:my-0 leading-none md:ml-10 lg:ml-0 flex flex-col items-center">
            <p class="relative font-anton text-[65px] md:text-[90px] text-violet_pastel">PERSONNALISER</p>
            <p class="relative font-anton text-[65px] md:text-[90px] text-violet_pastel">PERSONNALISER</p>
            <p class="relative font-anton text-[65px] md:text-[90px] text-violet_pastel">PERSONNALISER</p>
        </div>
        <div class="lg:w-1/2">
            <img class="absolute w-1/3 h-1/3 xl:w-1/6 xl:ml-96 rotate-90" src="../../public/FondBleu.jpg" alt="décor"/>
            <p class="dark:text-white relative mx-10 lg:mx-10 md:mx-20 texte font-poppins">Pour indiquer quelle partie de la montre l’utilisateur va retoucher, la partie 
                en question est en noir. L’utilisateur a le choix entre différentes couleurs, et peut également donner un 
                nom à sa montre. Une fois que l’utilisateur a terminé sa personnalisation, il peut appuyer sur “Enregistré” 
                et c’est alors que toutes les données concernant la montre qu’il vient de créer sont envoyées sur la base de 
                données.</p>
        </div>
    </div>

    <!--EXPLICATION 5-->
    <div class="lg:mx-10 mt-10 md:mt-32">
        <img class="absolute ml-20 lg:ml-0 w-1/2 h-1/2" src="../../public/FondRose.jpg" alt="fond de décor"/>
        <div class="lg:flex lg:mx-10 lg:gap-10 pt-10 items-center">
            <div class="lg:w-1/2">
                <div class="flex justify-center ">
                    <img class="relative" src="../../public/TIkTak/Personnalisation.jpg" alt="image personnalisation"/>
                </div>
            </div>
            <div class="lg:w-1/2">
                <p class="dark:text-white mx-10 md:mx-20 lg:mx-0 relative mt-14 font-poppins texte">Il peut ensuite la retrouver sur la page d’accueil dans la section réservées 
                    à ses créations. Par la suite, il peut modifier sa montre et la retoucher comme bon lui semble. Cependant, 
                    une fois que l’utilisateur a cliquer sur le bouton commander, la fonctionnalité de modification ne devient 
                    plus disponible : en effet, il l’a acheté et son style est donc verrouillé.</p>
            </div>
        </div>
    </div>

    <!--EXPLICATIONS-->
    <div class="lg:mt-40">
        <img class="absolute w-6/7 md:w-1/2 xl:w-1/4 lg:w-1/3  xl:mt-20" src="../../public/FondViolet.jpg" alt="fond décoratif"/>
        <div class="lg:flex items-center mt-16">
            <div class="lg:w-1/2 my-10 xl:mt-28 leading-none md:ml-10 lg:ml-0 flex flex-col items-center">
                    <p class="dark:text-white relative font-anton text-[65px] md:text-[90px] text-Noir">ORIGINALITÉ</p>
                    <p class="dark:text-white relative font-anton text-[65px] md:text-[90px] text-Noir">ORIGINIALITÉ</p>
                    <p class="dark:text-white relative font-anton text-[65px] md:text-[90px] text-Noir">ORIGINIALITÉ</p>
            </div>
            <div class="lg:w-1/2 flex flex-col items-center">
                <img class=" relative lg:w-3/4" src="../../public/TIkTak/User.jpg"/>
                <p class="dark:text-white font-poppins mt-10 relative texte mx-10 lg:mx-10 md:mx-20">Ainsi, ce site est totalement <strong>opérationnel</strong> : il répond aux 
                    <strong>objectifs de communication</strong> fixés avec des biais cognitifs, il donne la possibilité à 
                    l’utilisateur de <strong>se connecter</strong>, de <strong>personnaliser</strong> des montres, de voir 
                    les montres qu’il a déjà configurées, et de les <strong>modifier</strong>. Il a même la possibilité de 
                    commander son produit : bien entendu cette fonction ne marche pas réellement, mais elle permet de mettre 
                    à True la variable <strong>commander</strong> dans la base de données, de d'empêcher l'utilisateur d’éditer 
                    la montre qu’il a commandée.
    </p>
            </div>
        </div>
    </div>

    <!--COMPETENCES-->
    <div class="flex mt-20 justify-between">
        <div class="w-3/4 xl:mb-10 xl:mt-36">
          <img class="w-max xl:w-1/4 absolute" src="../../public/TraitTurquoise.jpg" alt=""/>
          <div class="flex relative">
              <p class="dark:text-white ml-5 mt-10 h2 font-anton text-black transDroit">COMPÉTENCES</p>
          </div> 
        </div>
        <div class="hidden md:flex w-1/4 justify-start">
            <img class="rotate-90" src="../../public/traits/MoyenViolet.jpg" alt="ligne décorative"/>
        </div>
    </div>

    <!--CRÉATIVITÉ-->
    <div class="bg-Rose w-full mt-10 md:mt-0 xl:mt-14">
        <p class="text-[50px] tracking-widest items-center justify-center flex font-anton md:text-[65px] xl:text-[80px]">CRÉATIVITÉ</p>
    </div>
    <!--NOTIONS FIGMA-->
    <div class="bg-Turquoise mt-5 bg-opacity-40 w-full ">
        <p class="text-[50px] tracking-widest items-center justify-center flex font-anton md:text-[65px] xl:text-[80px]">NOTIONS FIGMA</p>
    </div>
    <!--CODAGE VUE-->
    <div class="bg-violet_pastel mt-5 w-full ">
        <p class="text-[50px] tracking-widest items-center justify-center flex font-anton md:text-[65px] xl:text-[80px]">CODAGE VUE</p>
    </div>
    <!--CODAGE VUE-->
    <div class="bg-Rose bg-opacity-50 mt-5 w-full ">
        <p class="text-[50px] tracking-widest items-center justify-center flex font-anton md:text-[65px] xl:text-[80px]">RÉDACTION WEB</p>
    </div>
    <!--ANALYSE-->
    <div class="bg-Turquoise mt-5 w-full ">
        <p class="text-[50px] tracking-widest items-center justify-center flex font-anton md:text-[65px] xl:text-[80px]">ANALYSE</p>
    </div>
    <!--RÉFLÉXION-->
    <div class="bg-violet_pastel bg-opacity-50 mt-5 w-full ">
        <p class="text-[50px] tracking-widest items-center justify-center flex font-anton md:text-[65px] xl:text-[80px]">RÉFLÉXION</p>
    </div>

    <div class="mt-20 w-full gap-10 md:flex justify-center">
    
    <!--BOUTON JAIME-->
            <Bouton @submit.prevent="Vote" class="mx-auto md:mx-0 py-5 BoutonRose bg-Rose">J'aime ce projet</Bouton>

    <!--BOUTON AUTRE PROJET-->
    
        <router-link to="/unifiedchampions">
            <Bouton class="mt-10 md:mt-0 md:mx-0 py-5 BoutonViolet m-auto bg-violet_pastel">Voir un autre projet</Bouton>
        </router-link>
    </div>

    <!--FOOTER-->
    <Footer class="mt-36 mb-16 dark:mb-0"/>
</div>

</template>



<script>


import Header from "../components/Header.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue"
import Google from "../components/icons/google.vue"
import Facebook from "../components/icons/facebook.vue"
import Mail from "../components/icons/Mail2.vue"
import Bouton from "../components/bouton.vue"

export default {
  data: function () {
    return {
      menuOuvert: false,
      listeProjets: [],
    };
  },
  components: {
    Header,
    HeaderOrdi,
    Footer,
    Google,
    Facebook,
    Mail,
    Bouton,
  }
  
}

</script>

<style>

</style>