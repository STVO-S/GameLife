var
 Resident = document.getElementById('Evil'),
	God = document.getElementById('God'),
	GTA = document.getElementById('GTA'),
	Need = document.getElementById('Need'),
	Street = document.getElementById('Street'),
	Halo = document.getElementById('Halo'),
overlineS = document.getElementById('overlineS'),
	overlineS1 = document.getElementById('overlineS1'),
	overlineS2 = document.getElementById('overlineS2'),
	overlineS3 = document.getElementById('overlineS3'),
	overlineS4 = document.getElementById('overlineS4'),
	overlineS5 = document.getElementById('overlineS5'),
popupS = document.getElementById('popupS'),
	popupS1 = document.getElementById('popupS1'),
	popupS2 = document.getElementById('popupS2'),
	popupS3 = document.getElementById('popupS3'),
	popupS4 = document.getElementById('popupS4'),
	popupS5 = document.getElementById('popupS5'),
btncerrarpopupS = document.getElementById('btn-cerrar-popupS');
	btncerrarpopupS1 = document.getElementById('btn-cerrar-popupS1');
	btncerrarpopupS2 = document.getElementById('btn-cerrar-popupS2');
	btncerrarpopupS3 = document.getElementById('btn-cerrar-popupS3');
	btncerrarpopupS4 = document.getElementById('btn-cerrar-popupS4');
	btncerrarpopupS5 = document.getElementById('btn-cerrar-popupS5');

Resident.addEventListener('click', function(){
	overlineS.classList.add('active');
	popupS.classList.add('active');
});

God.addEventListener('click', function(){
	overlineS1.classList.add('active');
	popupS1.classList.add('active');
});

GTA.addEventListener('click', function(){
	overlineS2.classList.add('active');
	popupS2.classList.add('active');
});

Need.addEventListener('click', function(){
	overlineS3.classList.add('active');
	popupS3.classList.add('active');
});

Street.addEventListener('click', function(){
	overlineS4.classList.add('active');
	popupS4.classList.add('active');
});

Halo.addEventListener('click', function(){
	overlineS5.classList.add('active');
	popupS5.classList.add('active');
});

Resident.addEventListener('click', function(){
	overline.classList.add('active');
	popup.classList.add('active');
});

Resident.addEventListener('click', function(){
	overline.classList.add('active');
	popup.classList.add('active');
});

btncerrarpopupS.addEventListener('click', function(){
	overlineS.classList.remove('active');
	popupS.classList.remove('active');
});

btncerrarpopupS1.addEventListener('click', function(){
	overlineS1.classList.remove('active');
	popupS1.classList.remove('active');
});

btncerrarpopupS2.addEventListener('click', function(){
	overlineS2.classList.remove('active');
	popupS2.classList.remove('active');
});

btncerrarpopupS3.addEventListener('click', function(){
	overlineS3.classList.remove('active');
	popupS3.classList.remove('active');
});

btncerrarpopupS4.addEventListener('click', function(){
	overlineS4.classList.remove('active');
	popuSp4.classList.remove('active');
});

btncerrarpopupS5.addEventListener('click', function(){
	overlineS5.classList.remove('active');
	popupS5.classList.remove('active');
});