<template>
    <div>
        <tab-body v-for="(item,index) in data" :key="index" :columns="columns" :rowData="item"></tab-body>
    </div>
</template>

<script>
import tabHead from './tab-head.vue'
import tabBody from './tab-body.vue'
import tabFixed from './tab-fixed.vue'
export default {
    props:{
        columns:{
            type:Array,
            default(){
                return []
            },
            required:true,
        },
        data:{
            type:Array,
            default(){
                return []
            },
            required:true
        }
    },
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{

    },
    components:{
        tabBody
    }
    
}
</script>
<style lang="stylus" scoped>
.tableA
    width 100px
</style>



