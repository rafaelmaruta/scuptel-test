const FormatPrice = {
	getSplit: function(price) {
		price = price.toFixed(2).toString().split('.');
		return {int: price[0], float: price[1]};
	}
};

export default FormatPrice;