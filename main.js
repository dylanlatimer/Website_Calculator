var makeNumber = [];
var numbers = [];
var answer = document.getElementById("answer");
var clicked = 0;
var ran = 0;
var from = [];
var to = [];
var ran_stage = 1;
var x = 0;
function rand(){
	if (x == 1) {
		ran_stage = 2;
	} else if (x == 2) {
		ran_stage = 3;
	}
	if (ran_stage == 1) {
		makeNumber = [];
		numbers = [];
		clicked = 0;
		ran = 1;
		from = [];
		to = [];
		answer.innerHTML="FROM: ";
		x++;
	} else if (ran_stage == 2) {
		answer.innerHTML="";
		answer.innerHTML="TO: ";
		x++;
	} else if (ran_stage == 3) {
		x = 0;
		ran_stage = 1;
		ran = 0;
		let temp = "";
		for(let i=0;i<from.length;i++){
			temp+=from[i];
		}
		let temp2 = "";
		for(let i=0;i<to.length;i++){
			temp2+=to[i];
		}
		temp=parseInt(temp);
		temp2=parseInt(temp2);
		var ran_answer = Math.floor(Math.random()*((temp2+1)-temp))+temp;
		var string_ran_answer = ran_answer.toString();
		var split_ran_answer = string_ran_answer.split("");
		for (let i=0;i<split_ran_answer.length;i++){
			makeNumber.push(split_ran_answer[i]);
		}
		answer.innerHTML="";
		answer.innerHTML=ran_answer;
	}
}
function clear(){
	answer.innerHTML="";
}
function check(){
	if (answer.innerHTML=="+"||answer.innerHTML=="-"||answer.innerHTML=="x"||answer.innerHTML=="/"){
		clear();
	}
}
function a1(){
	if (ran == 0) {
		makeNumber.push("1");check();
		answer.innerHTML+=1;
	} else {
		if (ran_stage == 1) {
			from.push("1");
		} else if (ran_stage == 2) {
			to.push("1");
		}
		answer.innerHTML+="1";
	}
}
function a2(){
	if (ran == 0) {
		makeNumber.push("2");check();
		answer.innerHTML+=2;
	} else {
		if (ran_stage == 1) {
			from.push("2");
		} else if (ran_stage == 2) {
			to.push("2");
		}
		answer.innerHTML+="2";
	}
}
function a3(){
	if (ran == 0) {
		makeNumber.push("3");check();
		answer.innerHTML+=3;
	} else {
		if (ran_stage == 1) {
			from.push("3");
		} else if (ran_stage == 2) {
			to.push("3");
		}
		answer.innerHTML+="3";
	}
}
function a4(){
	if (ran == 0) {
		makeNumber.push("4");check();
		answer.innerHTML+=4;
	} else {
		if (ran_stage == 1) {
			from.push("4");
		} else if (ran_stage == 2) {
			to.push("1");
		}
		answer.innerHTML+="4";
	}
}
function a5(){
	if (ran == 0) {
		makeNumber.push("5");check();
		answer.innerHTML+=5;
	} else {
		if (ran_stage == 1) {
			from.push("5");
		} else if (ran_stage == 2) {
			to.push("5");
		}
		answer.innerHTML+="5";
	}
}
function a6(){
	if (ran == 0) {
		makeNumber.push("6");check();
		answer.innerHTML+=6;
	} else {
		if (ran_stage == 1) {
			from.push("6");
		} else if (ran_stage == 2) {
			to.push("6");
		}
		answer.innerHTML+="6";
	}
}
function a7(){
	if (ran == 0) {
		makeNumber.push("7");check();
		answer.innerHTML+=7;
	} else {
		if (ran_stage == 1) {
			from.push("7");
		} else if (ran_stage == 2) {
			to.push("7");
		}
		answer.innerHTML+="7";
	}
}
function a8(){
	if (ran == 0) {
		makeNumber.push("8");check();
		answer.innerHTML+=8;
	} else {
		if (ran_stage == 1) {
			from.push("8");
		} else if (ran_stage == 2) {
			to.push("8");
		}
		answer.innerHTML+="8";
	}
}
function a9(){
	if (ran == 0) {
		makeNumber.push("9");check();
		answer.innerHTML+=9;
	} else {
		if (ran_stage == 1) {
			from.push("9");
		} else if (ran_stage == 2) {
			to.push("9");
		}
		answer.innerHTML+="9";
	}
}
function a0(){
	if (ran == 0) {
		makeNumber.push("0");check();
		answer.innerHTML+=0;
	} else {
		if (ran_stage == 1) {
			from.push("0");
		} else if (ran_stage == 2) {
			to.push("0");
		}
		answer.innerHTML+="0";
	}
}
function ca() {
	makeNumber = [];
	numbers = [];
	clicked = 0;
	ran = 0;
	ran_stage = 1;
	from = [];
	to = [];
	x = 0;
	answer.innerHTML = "";
}
function del() {
	makeNumber.splice(makeNumber.length-1,1);
	answer.innerHTML = answer.innerHTML.slice(0,-1);
}
function minus() {
	if (ran == 0) {
		let temp = "";
		for(var i=0;i < makeNumber.length;i++) {
			temp+=makeNumber[i];
		}
		numbers.push(temp);
		numbers.push("-");
		temp = "";
		makeNumber = [];
		clear();
		answer.innerHTML="-";
	}
}
function add() {
	if (ran == 0) {
		let temp = "";
		for(var i=0;i < makeNumber.length;i++) {
			temp+=makeNumber[i];
		}
		numbers.push(temp);
		numbers.push("+");
		temp = "";
		makeNumber = [];
		clear();
		answer.innerHTML="+";
	}
}
function multiply() {
	if (ran == 0) {
		let temp = "";
		for(var i=0;i < makeNumber.length;i++) {
			temp+=makeNumber[i];
		}
		numbers.push(temp);
		numbers.push("*");
		temp = "";
		makeNumber = [];
		clear();
		answer.innerHTML="x";
	}
}
function divide() {
	if (ran == 0) {
		let temp = "";
		for(var i=0;i < makeNumber.length;i++) {
			temp+=makeNumber[i];
		}
		numbers.push(temp);
		numbers.push("/");
		temp = "";
		makeNumber = [];
		clear();
		answer.innerHTML="/";
	}
}
function equals() {
	if (ran == 0) {
		let temp = "";
		for(var i=0;i < makeNumber.length;i++) {
			temp+=makeNumber[i];
		}
		numbers.push(temp);
		temp = "";
		makeNumber = [];

		if (clicked == 1) {
			numbers.splice(0,1);
		}

		let x = 0;
		while (x == 0) {
			if (numbers.indexOf("")==-1){
				x = 1;
			} else if (numbers.indexOf("")!==-1) {
				numbers[numbers.indexOf("")] = "0";
			}
		}
		var dm = 0;
		while (dm == 0) {
			var d = 0;
			var m = 0;
			if (numbers.indexOf("*")>numbers.indexOf("/") && numbers.indexOf("/")!==-1) {
				d = 1;
			} else if (numbers.indexOf("*")<numbers.indexOf("/") && numbers.indexOf("*")!==-1) {
				m = 1;
			}
			if (numbers.indexOf("*")!==-1 && numbers.indexOf("/")==-1) {
				m = 1
			}
			if (numbers.indexOf("*")==-1 && numbers.indexOf("/")!==-1) {
				d = 1;
			}
			if (d == 1) {
				let index = numbers.indexOf("/");
				let n1 = numbers[index-1];
				let n2 = numbers[index+1];
				n1 = parseInt(n1);
				n2 = parseInt(n2);
				let ans = n1/n2;
				numbers[index] = ans.toString();
				numbers.splice(index - 1, 1);
				numbers.splice(index++, 1);
			} else if (m == 1) {
				let index = numbers.indexOf("*");
				let n1 = numbers[index-1];
				let n2 = numbers[index+1];
				n1 = parseInt(n1);
				n2 = parseInt(n2);
				let ans = n1*n2;
				numbers[index] = ans.toString();
				numbers.splice(index - 1, 1);
				numbers.splice(index++, 1);
			}
			if (numbers.indexOf("*")==-1&&numbers.indexOf("/")==-1){
				dm = 1;
			}
		}
		var as = 0;
		while (as == 0) {
			var a = 0;
			var s = 0;
			if (numbers.indexOf("-")>numbers.indexOf("+") && numbers.indexOf("+")!==-1) {
				a = 1;
			} else if (numbers.indexOf("-")<numbers.indexOf("+") && numbers.indexOf("-")!==-1) {
				s = 1;
			}
			if (numbers.indexOf("-")!==-1 && numbers.indexOf("+")==-1) {
				s = 1
			}
			if (numbers.indexOf("-")==-1 && numbers.indexOf("+")!==-1) {
				a = 1;
			}
			if (a == 1) {
				let index = numbers.indexOf("+");
				let n1 = numbers[index-1];
				let n2 = numbers[index+1];
				n1 = parseInt(n1);
				n2 = parseInt(n2);
				let ans = n1+n2;
				numbers[index] = ans.toString();
				numbers.splice(index - 1, 1);
				numbers.splice(index++, 1);
			} else if (s == 1) {
				let index = numbers.indexOf("-");
				let n1 = numbers[index-1];
				let n2 = numbers[index+1];
				n1 = parseInt(n1);
				n2 = parseInt(n2);
				let ans = n1-n2;
				numbers[index] = ans.toString();
				numbers.splice(index - 1, 1);
				numbers.splice(index++, 1);
			}
			if (numbers.indexOf("-")==-1&&numbers.indexOf("+")==-1){
				as = 1;
			}
		}
		var Canswer = numbers[0];
		for (let i = 0; i < Canswer.length; i++) {
			let t = Array.from(Canswer[i]);
			makeNumber.push(t);
		}
		Canswer = parseInt(Canswer);
		clear();
		answer.innerHTML=Canswer;
		clicked = 1;
	}
}