$(document).ready(function() {

		var equipo1 = 0;
		var equipo2 = 0;
		var puntos = 0;
		var puntosE1 = $('#puntosE1');
		var puntosE2 = $('#puntosE2');
		
		$('#iniciar').on('click', function() { cambiarPantalla(); } );
		$('#fin').on('click', function() { resetearPantalla(); } );

		$('input[type="name"]').on('keydown, keyup', function() { nombrarEquipos(); } );
		$('#a24, #a30').on('click', function() { seleccionarPuntos(); } );

		$('#sumarE1').on('click', function() { sumarEquipo1( equipo1 += 1 ); } );
		$('#restarE1').on('click', function() { restarEquipo1( equipo1 -= 1); } );

		$('#sumarE2').on('click', function() { sumarEquipo2( equipo2 += 1 ); } );
		$('#restarE2').on('click', function() { restarEquipo2( equipo2 -= 1 ); } );

		$('#sumarE1, #sumarE2').on('click', function() { dibujarFosforos(1); } );
		$('#sumarE1, #sumarE2').on('click', function() { dibujarFosforos(2); } );
		$('#sumarE1, #sumarE2').on('click', function() { dibujarFosforos(3); } );
		$('#sumarE1, #sumarE2').on('click', function() { dibujarFosforos(4); } );
		$('#sumarE1, #sumarE2').on('click', function() { dibujarFosforos(5); } );
		$('#sumarE1, #sumarE2').on('click', function() { dibujarFosforos(6); } );

		$('#restarE1, #restarE2').on('click', function() { dibujarFosforos(1); } );


		function cambiarPantalla() {
//Muestra para ingresar los datos y se esconde para mostrar el anotador
			$("#pantalla1").toggleClass("oculto").toggleClass("visible");
			$("#pantalla2").toggleClass("visible").toggleClass("oculto");
		}

		function nombrarEquipos() {
//Toma los valores del input.
			var e1 = $('#equipo1').val();
		    var e2 = $('#equipo2').val();
//Muestra el texto de los valores del input.
		    $('#p1').text(e1);
		    $('#p2').text(e2);
		};

		function seleccionarPuntos() {
//Seleccionar si el juego es a 24 o 30 puntos.
			
			puntos = $(':checked').val();

			$('#puntos').text('a' + puntos);
		};

		function sumarEquipo1() {
//Al tocar en el signo "+", sube el puntaje del Equipo 1.
			setInterval(function(){ puntosE1.html(equipo1) });
			nombre = $('#equipo1').val();

			puntos = $(':checked').val();

			if (equipo1 >= puntos) {
				alert(nombre + ' ha ganado!');
			}

		}

		function restarEquipo1() {
//Al tocar en el signo "-", baja el puntaje del Equipo 1.
			setInterval(function(){ puntosE1.html(equipo1) });			
		}

		function dibujarFosforos() {

		    console.log(equipo1);
		    for (i = 0; i <= equipo1; i++) {
		        if (i <= 5) {
		            $("#fosforo1").attr("src", i +".png");
		        }
		        if (i >= 5 && i <= 10) {
		            $("#fosforo2").attr("src", (i - 5) +".png");
		        }
		        if (puntos == 30) {
		            if (i >= 10 && i <= 15) {
		                $("#fosforo3").attr("src", (i - 10) +".png");
		            }
		            if (i >= 15 && i <= 20) {
		                $("#fosforo4").attr("src", (i - 15) +".png");
		            }
		            if (i >= 20 && i <= 25) {
		                $("#fosforo5").attr("src", (i - 20) +".png");
		            }
		            if (i >= 25 && i <= 30) {
		                $("#fosforo6").attr("src", (i - 25) +".png");
		            }    
		        } else {
		            if (i >= 10 && i <= 15) {
		                $("#fosforo3").attr("src", (i - 10) +".png");
		            }
		            if (i >= 15 && i <= 20) {
		                $("#fosforo4").attr("src", (i - 15) +".png");
		            }
		            if (i >= 20 && i <= 24) {
		                $("#fosforo5").attr("src", (i - 20) +".png");
		            }
		        }
		    }

		    console.log(equipo2);
		    for (i = 0; i <= equipo2; i++) {
		        if (i <= 5) {
		            $("#fosforo7").attr("src", i +".png");
		        }
		        if (i >= 5 && i <= 10) {
		            $("#fosforo8").attr("src", (i - 5) +".png");
		        }
		        if (puntos == 30) {
		            if (i >= 10 && i <= 15) {
		                $("#fosforo9").attr("src", (i - 10) +".png");
		            }
		            if (i >= 15 && i <= 20) {
		                $("#fosforo10").attr("src", (i - 15) +".png");
		            }
		            if (i >= 20 && i <= 25) {
		                $("#fosforo11").attr("src", (i - 20) +".png");
		            }
		            if (i >= 25 && i <= 30) {
		                $("#fosforo12").attr("src", (i - 25) +".png");
		            }    
		        } else {
		            if (i >= 10 && i <= 15) {
		                $("#fosforo9").attr("src", (i - 10) +".png");
		            }
		            if (i >= 15 && i <= 20) {
		                $("#fosforo10").attr("src", (i - 15) +".png");
		            }
		            if (i >= 20 && i <= 24) {
		                $("#fosforo11").attr("src", (i - 20) +".png");
		            }
		        }
		    }
		}

		function sumarEquipo2() {

			setInterval(function(){ puntosE2.html(equipo2) });
			nombre = $('#equipo2').val();

			puntos = $(':checked').val();

			if (equipo2 >= puntos) {
				alert(nombre + ' ha ganado!');
			}		
		}

		function restarEquipo2() {

			setInterval(function(){ puntosE2.html(equipo2) });		
		}

		function resetearPantalla() {
//Resetea toda la información del programa y vueleve al inicio.

			equipo1 = 0;
			equipo2 = 0;
			$("#pantalla1").toggleClass("oculto").toggleClass("visible");
			$("#pantalla2").toggleClass("visible").toggleClass("oculto");
	        $("img").attr("src", "0.png");
	        $("form")[0].reset();
	        $("p").text("");
	        $("#equipo1").html(equipo1, equipo2);
		}

        
	});