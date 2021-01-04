var vercorreo = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);


var aceptar = document.getElementById("boton")
aceptar.addEventListener('click', () => {
    validarmail(), validarname(), validarlname(), validarpassword()
});


function validarname() {
    const name = document.getElementById("name");
    var nom = (/^(?!.* (?: |$))[A-Z][a-z ]+$/)
    valor = nom.test(name.value);
    const div1 = document.getElementById('icoerrorname')
    const div2 = document.getElementById('errorname');
    if (!valor) {
        div1.classList.remove("oculto");
        div2.classList.remove("oculto");
    } else {
        div1.classList.add("oculto")
        div2.classList.add("oculto")
    }
}

function validarlname() {
    var lastn = document.getElementById("lastn");
    var vlastn = (/^(?!.* (?: |$))[A-Z][a-z ]+$/)
    valorln = vlastn.test(lastn.value);
    const div1 = document.getElementById('icoerrorln')
    const div2 = document.getElementById('errorln');
    if (!valorln) {
        div1.classList.remove("oculto");
        div2.classList.remove("oculto");
    } else {
        div1.classList.add("oculto")
        div2.classList.add("oculto")
    }
}


function validarmail() {
    var email = document.getElementById("email");
    var vercorreo = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,3}\.){1,125}[A-Z]{2,63}$/i);
    valor = vercorreo.test(email.value);
    const div1 = document.getElementById('icoerroremail')
    const div2 = document.getElementById('erroremail');
    if (!valor) {
        div1.classList.remove("oculto");
        div2.classList.remove("oculto");
    } else {
        div1.classList.add("oculto")
        div2.classList.add("oculto")
    }
}

function validarpassword() {
    var pass = document.getElementById("password");
    var password = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
    valor = password.test(pass.value);
    const div1 = document.getElementById('icoerrorpass')
    const div2 = document.getElementById('errorpass');
    if (!valor) {
        div1.classList.remove("oculto");
        div2.classList.remove("oculto");
    } else {
        div1.classList.add("oculto")
        div2.classList.add("oculto")
    }
}