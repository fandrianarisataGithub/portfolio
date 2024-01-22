<template>
    <header id="header" :class="{'active-navbar' : activeNavbar}">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="/img/fenitra-pdp-square.png" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.html">Fenitriniaina (Feni)</a></h1>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><router-link to="/" @click="closeNavbar" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></router-link></li>
          <li><a href="#about" @click="closeNavbar" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" @click="closeNavbar" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" @click="closeNavbar" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" @click="closeNavbar" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" @click="closeNavbar" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    props : {
      activeNavbar : {
        type : Boolean
      }
    },
    methods : {
      closeNavbar(){
        //this.activeNavbar = false;
        //console.log(this.activeNavbar)
        var that = this;
        setTimeout(function(){
          that.$emit('hide-navbar')
        }, 1000)
      }
    }
}
</script>