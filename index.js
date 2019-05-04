var app = new Vue({
	el: '#app',
	data: {
		ok: 1,
		list: [
			{
				id: 1,
				name: 'iphoneX',
				price: 8888,
				count: 1,
				checked: false,
			},
			{
				id: 2,
				name: 'iPad Pro',
				price: 5888,
				count: 1,
				checked: false,
			},
			{
				id: 3,
				name: 'MacBook Pro',
				price: 21888,
				count: 1,
				checked: false,
			}
			],
		//listIds: [],//初始化被选中的
		isCheckedAll: false,//初始化全选按钮, 默认不选
		displayMoney: false,

	},
	computed: {
		totalPrice: function(){
			var total = 0;
			var proList = this.list.filter(function(val){return val.checked});
			for(var i = 0;i < proList.length;i++)
			{
				total += proList[i].price*proList[i].count;
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
		// 	totalPrice: function(){
		// 	var total = 0; 
		// 	for (var i = 0; i < this.listIds.length;i++){
		// 		var itemId = this.listIds[i]-1;
		// 		var item = this.list[itemId];
		// 		total += item.price*item.count;
		// 	}
		// 	//顺便将结果转换为带有千位分隔符号的数字
		// 	return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		// },用这个方法的时候删除会有问题。

	},
	methods: {
		handleReduce: function(index){
			if(this.list[index].count === 1)return;
			this.list[index].count--;
		},
		handleAdd: function(index){
			this.list[index].count++;
		},
		handleRemove: function(index){
			this.list.splice(index,1);
		},
		// checkedOne: function(index){//点击的当前那条数据的checkbox传进来这条数据的id
		// 	let idIndex = this.listIds.indexOf(this.list[index].id);//取出来的是当前点击的商品在选中数组中的下标位置
		// 	if(idIndex >= 0){
		// 		//如果已经包含了该id，则去除（单选按钮由选中变为非选中状态）
		// 		this.listIds.splice(idIndex,1)
		// 	}else{
		// 		this.listIds.push(this.list[index].id)//选中该checkbox
		// 	}
		// },
		checkedAll: function(){
			if(this.isCheckedAll==false){//全选
				for(var i = 0;i < this.list.length;i++)
				{
					var item = this.list[i];
					item.checked = true;
				}
			}
			//取消全选
			else{
				for(var i = 0;i < this.list.length;i++)
				{
					var item = this.list[i];
					item.checked = false;
				}
				this.isCheckedAll = !this.isCheckedAll;
			}
			// this.isCheckedAll = !this.isCheckedAll;
			// if (this.isCheckedAll) {
			// 	//全选时
			// 	this.listIds=[];
			// 	this.list.forEach(function(item){
			// 		this.listIds.push(item.id)
			// 	},this);
			// }else
			// {
			// 	this.listIds=[];
			// }
		},

	}

})