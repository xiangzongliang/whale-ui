
<template>
<!-- // 代表表格的一行数据 -->
    <div>
        <cell v-for="(colItem,index) in columns" :key="index" :colItem="colItem" :rowData="rowData"/>
    </div>
</template>
<script>
import tabExpand from './expand';
import cell from './cell.vue'
export default {
    props:{
        columns:{
            type:Array,
            default(){
                return []
            },
            required:true,
        },
        rowData:{
            type:[Object,String]
        }
    },
    data(){
        return{
            clone_Column:''
        }
    },
    mounted(){
    },
    methods:{
        makeColumnID(columns){
            // let callbackArr = []
            // columns.map((item,index)=>{
            //     console.log(item,index)
            // })
            // return callbackArr
        }
    },
    components:{
        cell
        // tabExpand
    }
}
</script>

