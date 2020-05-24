//var 후보군 =Array(45); //로또추첨기
//console.log('후보군',후보군);
//var 필=후보군.fill();
////mapping ,맵
//console.log('필',필);

var 후보군=Array(45)
		 .fill()
		 .map(function(요소,인덱스){
			 return 인덱스+1;
		 });
console.log(후보군);

num = [];
var number = [];
for(var i=0;i<7;i++){
num[i] = prompt('본인의 로또번호를 입력해주세요');
number[i] = Number(num[i]);
}
console.log('정답',number);
var 셔플 = [];
while(후보군.length > 0){
	//실제 로또에서는 random쓰면 안됌
	var 이동값 = 후보군.splice(Math.floor(Math.random()*후보군.length),1)[0];
	셔플.push(이동값);
}
console.log(셔플);

var 보너스 = 셔플[셔플.length-1];
var 당첨숫자들 = 셔플
	.splice(0,6)
	.sort(function(p,c){return p - c;});
console.log('당첨숫자들',당첨숫자들.sort(function(p,c){return p - c;}),'보너스',보너스);

var 결과창 = document.querySelector('#결과창');
var 결과 = document.querySelector('.결과');


function 공색칠하기(숫자,결과창){
	var 공 = document.createElement('div');
	공.textContent = 숫자;
	공.style.display ='inline-block';
	공.style.border = '1px solid black';
	공.style.borderRadius = '10px';
	공.style.width = '20px';
	공.style.height ='20px';
	공.style.textAlign ='center';
	공.style.marginRight ='18px';
	공.style.fontSize = '12px';
	공.className = '공아이디'+숫자;
	var 배경색;
	if(숫자<=10){
		배경색 = 'red';
	}else if(숫자<=20){
		배경색 = 'orange';
	}else if(숫자<=30){
		배경색 = 'yellow';
	}else if(숫자<=40){
		배경색 = 'blue';
	}else{
		배경색 = 'green';
	}
	공.style.background = 배경색;
	결과창.appendChild(공);
}




//반복문 클로저 문제 발생 !
	setTimeout(function 비동기콜백함수() {
		공색칠하기(당첨숫자들[0],결과창);
	},1000); //밀리초
	setTimeout(function 비동기콜백함수() {
		공색칠하기(당첨숫자들[1],결과창);
	},2000); //밀리초
	setTimeout(function 비동기콜백함수() {
		공색칠하기(당첨숫자들[2],결과창);
	},3000); //밀리초
	setTimeout(function 비동기콜백함수() {
		공색칠하기(당첨숫자들[3],결과창);
	},4000); //밀리초
	setTimeout(function 비동기콜백함수() {
		공색칠하기(당첨숫자들[4],결과창);
	},5000); //밀리초
	setTimeout(function 비동기콜백함수() {
		공색칠하기(당첨숫자들[5],결과창);
	},6000); //밀리초
	setTimeout(function 비동기콜백함수() {
		var 칸 = document.querySelector('.보너스');
		공색칠하기(보너스,칸);
	},7000); //밀리초
	var 횟수=0;
	for(var i=0;i<7;i++){
	if(당첨숫자들.indexOf(number[i])> -1){
		횟수 +=1;
			
	}
	}

	setTimeout(function 비동기콜백함수() {
	if(횟수===0){
		결과.textContent='꽝입니다.';
	}else if(횟수===1){
		결과.textContent='1개밖에 못맞췄어요 ㅜㅜ';
	}else if(횟수===2){
		결과.textContent='2개밖에 못맞춰어요 ㅜㅜ';
	}else if(횟수===3){
		결과.textContent='축하 5등입니다!';
	}else if(횟수===4){
		결과.textContent='축하 4등입니다!';
	}else if(횟수===3){
		결과.textContent='축하 3등입니다!';
	}else if(횟수===2){
		결과.textContent='축하 2등입니다!';
	}else if(횟수===1){
		결과.textContent='대박 1등입니다!';
	}
	},8000); 
