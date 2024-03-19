<template>
    <div ref="titleSection" class="element-subtitle">
        <h2 :class="{'animation-on' : isAnimated}">{{ title }}</h2>
        <p v-html="paragraph"></p>
    </div>
</template>
<script>
export default{
        props : {
            title : {
                type : String,
                default : 'Titre section',
                required : true
            },
            paragraph : {
                type : String
            },
            observerOption : {
                type : Object,
                default : {
                    root : null,
                    threshold : "0"
                }
            }
        },
        data(){
            return {
                observer : null,
                isAnimated : false
            }
        },
        mounted(){
            this.observer = new IntersectionObserver(entries=> {
                    this.handleIntersect(entries[0]);
                },
                this.options
            );
            this.observer.observe(this.$refs.titleSection);
        },
        unmounted(){
            this.observer.disconnect();
        },
        methods: {
            handleIntersect(entry){
                if (entry.isIntersecting) {
                    //console.log(this.$refs.titleSection)
                    this.isAnimated = true
                }
                else {
                    this.isAnimated = false
                }
            }
        }
    }
</script>