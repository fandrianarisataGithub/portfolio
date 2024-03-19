<template>
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
        <div class="hero-container" data-aos="fade-in">
        <h1>Sata Fenitriniaina</h1>
        <p>Hello! <i class="bi bi-emoji-smile"></i> <span class="typed" ref="typingContainer"></span></p>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return {
            text : `I'm a Symfony / Vue.js developer.`,
            typingSpeed : 150,
            indexTyping : 0
        }
    },
    methods : {
        type() {
            if (this.indexTyping < this.text.length) {
                this.$refs.typingContainer.textContent += this.text.charAt(this.indexTyping);
                this.indexTyping++;
                setTimeout(this.type, this.typingSpeed);
            }else{
                setTimeout(() => {
                    this.$refs.typingContainer.textContent = "";
                    this.indexTyping = 0;
                    this.type();
                }, 2000); 
            }
        }
    },
    mounted(){
        this.type();
        //console.log(__APP_ENV__)
    }
}
</script>