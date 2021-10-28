
"use strict";

import { crearFormularioLogin, handleLogin } from "./funciones.js";

window.isLoged = false


crearFormularioLogin()


document.querySelector('#btnLogin').addEventListener('click',handleLogin)
