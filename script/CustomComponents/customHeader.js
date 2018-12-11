const rootPath001 = "./";
const rootPath002 = "../";
const rootPath003 = "../../";


function createSocial() {
	var socialElement = `
	<div class='container'> 
		<div class='row'> 
			<div class='col-sm-12 overflow'> 
				<div class='social-icons pull-right'> 
					<ul class='nav nav-pills'> 
						<li><a href=''><i class='fa fa-facebook'></i></a></li> 
						<li><a href=''><i class='fa fa-twitter'></i></a></li> 
						<li><a href=''><i class='fa fa-linkedin'></i></a></li> 
					</ul> 
				</div> 
			</div> 
		</div> 
	</div> <!-- div#ray-title.container -->
	`;

	return socialElement;
}

function createNavbar(rootIndex) {
	var rootPathAux = rootPath001;

	if (rootIndex == 1 || rootIndex == 20) {
		rootPathAux = rootPath002;
	} else if (rootIndex == 2) {
		rootPathAux = rootPath003;
	}	


	var customNavbarTem = `
	<div id="cifp_navbar" class="navbar navbar-inverse" role="banner">
		<div class="container">

			<div class="navbar-header">
				<!-- Menú tipo botón expandible para la versión móvil -->
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<!-- Logo y enlace a la página de inicio -->
				<a class="navbar-brand" href="${rootPathAux}index.html">
					<h1><img id="CIFP-LOGO" src="${rootPathAux}resources/image/logo.png" alt="logo"></h1>
				</a>
			</div>

			<!-- Barra de navegación -->
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li class="active"><a href="${rootPathAux}index.html">Inicio</a></li>

					<li class="dropdown"><a href="${rootPathAux}pages/teoria.html">Teoría <i class="fa fa-angle-down"></i></a>
						<ul role="menu" class="sub-menu">
							<!--<li><a href="${rootPathAux}pages/teoria/tema001.html">Tema 1</a></li>-->
							<li><a href="${rootPathAux}pages/proximamente.html">Tema 1</a></li>
						</ul>
					</li>

					<li class="dropdown"><a href="${rootPathAux}pages/practicas.html">Prácticas <i class="fa fa-angle-down"></i></a>
						<ul role="menu" class="sub-menu">
							<li><a href="${rootPathAux}pages/ejercicios/ejercicio001.html">El primer terreno</a></li>
							<li><a href="${rootPathAux}pages/ejercicios/ejercicio002.html">Añadiendo interfaces de usuario</a></li>
							<li><a href="${rootPathAux}pages/ejercicios/ejercicio003.html">El circuito y el tiempo</a></li>
							<li><a href="${rootPathAux}pages/ejercicios/ejercicio004.html">Animando nuestros modelos</a></li>
							<li><a href="${rootPathAux}pages/ejercicios/ejercicio005.html">Menús de configuración</a></li>
							<li><a href="${rootPathAux}pages/ejercicios/ejercicio006.html">Evaluación demo SpeedRun</a></li>
							<hr>
							<li><a href="${rootPathAux}pages/proximamente.html">Primera máquina de estados</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html">Minijuegos por zonas</a></li>
							<hr>
							<li><a href="${rootPathAux}pages/proximamente.html">Proyecto grupal</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html">Evaluación Demo final</a></li>
						</ul>
					</li>

					<li class="dropdown"><a href="${rootPathAux}pages/recursos.html">Unity(C#)<i class="fa fa-angle-down"></i></a>
						<ul role="menu" class="sub-menu">

							<li><a href="${rootPathAux}pages/proximamente.html ">Introducción a Unity</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Espacio Tridimensional</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Espacio Bidimensional</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Espacíficos</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Avanzados</a></li>

							<!--<li><a href="${rootPathAux}pages/proximamente.html ">Interfaz de usuario</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">La primera escena</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Terreno</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Controlador tercera persona</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Interfaces de usuario 2D</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Primitivas y colisionadores</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Animaciones y sus controladores</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Fuentes de sonido y mezcladores</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Configuración de controles</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Emisores de partículas</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html ">Compilación</a></li>-->
							<hr>
							<li><a href="${rootPathAux}pages/proximamente.html">Introducción a C#</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html">Prog. orientada a objetos</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html">Flujo ejecución de Unity</a></li>
							<li><a href="${rootPathAux}pages/proximamente.html">La API de Unity</a></li>

						</ul>
					</li>
				</ul>
			</div>
			<div class="search">
				<form role="form">
					<i class="fa fa-search"></i>
					<div class="field-toggle">
						<input type="text" class="search-form" autocomplete="off" placeholder="Search">
					</div>
				</form>
			</div>
		</div>
	</div> <!-- div#ray-navbar.navbar.navbar-inverse -->
	`;

	return customNavbarTem;
}





//=======================================================

function LoadCustomHeader (rootIndex) {
	var customHeaderTem = `
	<header id="header">
		${createSocial()}
		${createNavbar(rootIndex)}
	</header>
	`;

	$( "#custom-header" ).append(customHeaderTem);
}





