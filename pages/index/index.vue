<template>
    <div>
		<w-table :columns='columns' :data="data"></w-table>
    </div>
</template>

<script>
import wTable from '../../components/table/table.vue'
export default {
	name: "app",
	data() {
		return {
			columns:[{
				name:'姓名',
				key:'name',
				headerClass:'',
				render:(elem,data)=>{
					return elem('div',data.name+1)
				}
			},{
				name:'年龄',
				key:'age',
				headerClass:'',
				// render:(elem,data)=>{
					
				// }
			}],
			data:[{
				name:'xiangzongliang',
				age:25,
				add:'shanxi'
			}]
		};
	},
	mounted(){

	},
	components:{
		wTable
	}
};
</script>

<style>
</style>
