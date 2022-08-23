function ir(){

    var c = 1234;
    var u = "nacho";

    if( document.forms.password.value == c && document.forms.usario.value == u){
    alert ("bienvenido al sistema");
    window.location = "index.html";}
    else{
    alert ("ingrese un usuario o contraseña correcta");
}
}