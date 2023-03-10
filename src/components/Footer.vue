<template>
    <div class="flex justify-evenly gap-10">
        <a href="https://www.instagram.com/juliiie_19/">
            <Instagram class="RS lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
        </a>
        <a href="https://www.linkedin.com/in/juliealbini/">
            <Linkedin class="RS lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
        </a>
        <router-link to="/contact">
            <Mail class="RS lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]"/>
        </router-link>
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

<style>
.RS:hover {
    transition: 0.5s;
    scale: 1.2;
}
</style>