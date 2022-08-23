function valida_form (){
    if(document.getElementById("name").value.length < 3){
    alert('Por favor, preencha o campo nome');
    document.getElementById("name").focus();
    return false
    }
    if(document.getElementById("user").value.length < 3){
    alert('Por favor, preencha o campo usuario');
    document.getElementById("user").focus();
    return false
    }
    if(document.getElementById("email").value.length < 3){
    alert('Por favor, preencha o campo e-mail');
    document.getElementById("email").focus();
    return false
    }
    if(document.getElementById("password").value.length < 3){
    alert('Por favor, preencha o campo senha');
    document.getElementById("password").focus();
    return false
    }
    }