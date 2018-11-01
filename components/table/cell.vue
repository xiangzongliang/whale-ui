<template>
    <div>
        <div v-if="!colItem.render">{{ rowData[colItem.key] }}</div>
        <tab-expand v-if="colItem.render" :col="rowData" :row="colItem" :render="colItem.render"/>
    </div>
</template>
<script>
import tabExpand from './expand'
export default {
    props:['colItem','rowData'],
    components:{
        tabExpand
    }
}
</script>

