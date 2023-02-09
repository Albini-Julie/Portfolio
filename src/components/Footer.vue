<template>
    <div class="flex justify-evenly gap-10">
        <a href="https://www.instagram.com/juliiie_19/">
            <Instagram class="lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
        </a>
        <a href="https://www.linkedin.com/in/juliealbini/">
            <Linkedin class="lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
        </a>
        <a HREF="mailto:julie-albini@orange.fr">
            <Mail class="lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
        </a>
    </div>


</template>

<script>
import Instagram from "../components/icons/Instagram.vue";
import Linkedin from "../components/icons/LinkedinF.vue"
import Mail from "../components/icons/Mail.vue"

export default {
  components: {
    Instagram,
    Linkedin,
    Mail
  }
}

</script>