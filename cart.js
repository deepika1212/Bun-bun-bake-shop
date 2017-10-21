	$(document).ready(function(){
	loadCart();
		displayCart();

		function loadCart(){
			cart = JSON.parse(localStorage.getItem("shoppingCart"));
		}

		function saveCart(){
	localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

		function displayCart() {
			var output = " ";
			for (var i in cart) {
				output += "<li>" + cart[i].name + ", " +" Price: " + cart[i].price + ", "
				+ " Pack Size:  " + cart[i].size + ", "+ " Qunantity:  " + cart[i].quantity + ", "  
				+ " Flavours Chosen:  " + cart[i].flavors + "  "
				+ "<button class = 'delete-item'> X </button>" 
				+ "</li>";
			}
			$("#show-cart").html(output);
		}
		$ ("#show-cart").on("click", ".delete-item", function(){
			$(this).parent().remove();
			displayCart();
			saveCart();
			console.log("delete-item");

		});


			});