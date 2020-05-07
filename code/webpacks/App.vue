<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
export default {
    name:"App",
    data(){
        return {
           msg:'hello App.vue' 
        }
    }
}
</script>
<style scoped>
   div{
       background-color: red;
   }

</style>