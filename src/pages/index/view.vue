<template>
    <div id="wrapper">
        Hello {{ message }}

    </div>

</template>

<script>

    export default{

        data(){
            return {
                //result:{email: "", pwd: ""}
            }
        },
        created(){

        },
        mounted(){
         if(console&&this.result.message){
                console.log('login error:',this.result.message);
           }
        },
        methods: {

        }

    }



</script>

<style scoped>

</style>