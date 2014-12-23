
var totalsArr=[],
currentTotal;

var budgetMaker = {

	init: function () {
			var newBudget = document.getElementById('newBudget');

			newBudget.addEventListener('click',budgetMaker.getInfo());
	},

	getInfo: function() {
			var	budgetName = prompt("What is this budget for?", "Clothing"),
			budgetAmount = prompt("How much can you spend this year?",2000.00);

			document.getElementById('appWrap').innerHTML = budgetMaker.createTemplate(budgetName,budgetAmount);
	},

	createTemplate: function(budgetName,budgetAmount) { // Create a new Budget
			var template = "<div id='budgetName.toLowerCase()' class='budgetWrap'>"
			+"<h2>"+budgetName+": "+"$"+budgetAmount+"</h2>"
			+"<input id='expense' type='text' placeholder='0.00'>"
			+"<button id='addItemBtn' class='btn submit'>Add Item</button>"
			+"<ol id='itemList'></ol><span id='totalSpend'></span></div>";

			return template;
	},

	addItem: function() { // Add a new item to the budget
			var expense = document.getElementById('expense'),
			expenseVal = parseFloat(expense.value),
			expenseValToFixed = expenseVal.toFixed(2);
			newItem = document.createElement("li");

			if(isNaN(expenseVal)) {
				alert("This budget needs numbers");
			}else{
				newItem.innerHTML = expenseValToFixed;
				totalsArr.push(expenseVal);
				itemList.appendChild(newItem);
			}

			expense.value = "";
			budgetMaker.updateBudget();
	},

	updateBudget: function() { // Generate total spend
			var	total = 0;
			for (var i = 0; i < totalsArr.length; i++) {
				total+=totalsArr[i];
			}
			getElementById('totalSpend').innerHTML = total.toFixed(2);
	}
};