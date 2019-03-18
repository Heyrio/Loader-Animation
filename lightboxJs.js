var boxOne = document.getElementById("bx1");
var boxTwo = document.getElementById("bx2");
var boxThree = document.getElementById("bx3");
var boxFour = document.getElementById("bx4");
var boxFive = document.getElementById("bx5");
var boxSix = document.getElementById("bx6");
var boxSeven = document.getElementById("bx7");
var boxEight = document.getElementById("bx8");
var boxNine = document.getElementById("bx9");

var arr = [boxOne, boxTwo, boxThree, boxFour,
		boxFive, boxSix, boxSeven, boxEight, boxNine];

function color(item){
  item.classList.add("light");

  	setTimeout(function(){
		item.classList.remove("light");

  	}, 150);	

}

function logicUp(i){
	
	setTimeout(function(){
		if(i < 9){
			color(arr[i]);
			i = i + 1;
			logicUp(i);

		}else{
			 i = 0;
			logicUp(i);
		}

  },150);

}

logicUp(0);

