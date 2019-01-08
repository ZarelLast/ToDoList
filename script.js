const postDom	= document.getElementById('post-txt');
const inputDom	= document.getElementById('input-txt');
let listDom	= document.getElementById('posted');
let html		= localStorage.getItem('html');
listDom.innerHTML = html;
let nama = localStorage.getItem('nama')

if(!nama){
	nama = prompt('Masukan Nama : ');
	localStorage.setItem('nama',nama);
}

postDom.addEventListener('click', function(){
	const post = inputDom.value;
	console.log('post');
	listDom.innerHTML = listDom.innerHTML + "<li class='list'>"+"<strong>Hei "+nama+" ! </strong>"+post+"</li>";
	inputDom.value = '';
	localStorage.setItem('html', listDom.innerHTML);
}); 

function showTime(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var session =" AM";
	if(h==0){
		h=12;
	}
	if(h>12){
		h=h-12;
		session = " PM";
	}
	h = (h<10)? "0" + h :h;
	m = (m<10)? "0" + m :m;
	s = (s<10)? "0" + s :s;
	
	var time = h + ":" + m + ":" + s + session;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	setTimeout(showTime, 1000);
	}	
	showTime();