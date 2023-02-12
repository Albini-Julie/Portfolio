<template>
    <div class="border-4  brillance bouton w-max h-max py-3 px-5 flex items-center drop-shadow-lg text-white font-poppins font-semibold rounded-lg ">
        <span class=""><slot/></span>
    </div>
</template>



<style>
.brillance {
  animation: slide infinite .75s linear;
  transform: scale(1);
  transition: 0.8s
}

.brillance:hover {
    transition: 0.8s;
    animation: tremblement .90s infinite
}

@keyframes slide {
  0%{
    border-color: none;
  }
  25%{
    border-color: white;
  }
  50%{
    border-color: none;
  }
  75%{
    border-color: white;
  }
  100%{
    border-color: none
  }
}

@keyframes tremblement {
  0%{
    transform: translateY(0%);
  }
  50%{
    transform: translateY(20%);
  }
  100%{
    transform: translateY(0%);
  }
}
</style>