var 
Autor = document.getElementById('Autor'),
	Autor1 = document.getElementById('Autor1')
overlineIniciar = document.getElementById('overlineIniciar'),
	overlineRegistro = document.getElementById('overlineRegistro'),
popupIniciar = document.getElementById('popupIniciar'),
	popupRegistro = document.getElementById('popupRegistro'),
btncerrarpopupIniciar = document.getElementById('btn-cerrar-popupIniciar'),
	btncerrarpopupRegistro = document.getElementById('btn-cerrar-popupRegistro');

Autor.addEventListener('click', function(){
	overlineIniciar.classList.add('active');
	popupIniciar.classList.add('active');
});

btncerrarpopupIniciar.addEventListener('click', function(){
	overlineIniciar.classList.remove('active');
	popupIniciar.classList.remove('active');
});

Autor1.addEventListener('click', function(){
	overlineRegistro.classList.add('active');
	popupRegistro.classList.add('active');
});

btncerrarpopupRegistro.addEventListener('click', function(){
	overlineRegistro.classList.remove('active');
	popupRegistro.classList.remove('active');
});