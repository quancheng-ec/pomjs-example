<template>
    <div id="wrapper">
        <item/>
        <div>this is template body</div>
    </div>
</template>
<script>
    import Item from '../../components/item/view.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'item':Item,
        }
    }
</script>
