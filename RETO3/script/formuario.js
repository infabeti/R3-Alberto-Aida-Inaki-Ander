

function validar()
{

if (document.formulario.nombre.value.length==0)
{
    alert("Debe escribir su puntuación, gracias.")
    document.formulario.nombre.focus()
    return 0;
}
	alert("Gracias por enviar su opinión.");
	document.formulario.submit();
	window.open("index.html");
}

