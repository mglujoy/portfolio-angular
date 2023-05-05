Final project for Argentina Programa 4.0

Front-End: Angular
Back-End: Spring Boot, 
	Spring Security, 
	JSON Web Token,
	Brute Force Attack Stopper: 
		AuthenticationFailureListener,
		LoginAttemptService
Back-End 2: CRUD, 
	Full CRUD in "resume", 
	All the content can be edited, with valid credentials.
	"Reach" public form to leave messages on the DataBase.
DataBase: MySQL

Credentials:
    "email": "guest@argentinaprograma.inti.gob.ar",
    "password": "Argentina*Programa4"

Observaciones: el proyecto cuenta con 2 backends que funcionan perfectamente en localhost, y con la DB en remoto, pero después de unos 50 intentos fallidos de levantarlos en Render, decidí hardcodear el FrontEnd y subirla así para poder presentarse. Adjunto links con videos del funcionamiento del proyecto en localhost y con los logs de error de los Backends en los intentos fallidos de deployment. 
	Link Angular: https://github.com/mglujoy/portfolio-angular.git
Ambos links de los Backends:
	CRUD: https://github.com/mglujoy/crud-backend.git // https://crud-hmt6.onrender.com
	JWT: https://github.com/mglujoy/jwt.git // https://jwt-arp6.onrender.com
Las ramas "main" de los repositorios de github son las que quedaron funcionando en localhost, las ramas "deploy" de los backends cuentan con código roto que falla en el Clean and Build por motivos que no logré encontrar y las ramas "dep" cuentan con configuraciones que inician el servico pero luego fallan y se encuentran en modo DEBUG para mostrar los errores.
La rama "main" del FrontEnd cuenta con todo el código para trabajar con el JWT y el CRUD, pero la rama implementada en el FireBase "hc" se encuentra hardcodeada ya que sino era imposible presentar el proyecto como tal.

# PortfolioAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
