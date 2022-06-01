function cadastrar() {
    let nome = document.querySelector("#user_name").value;
    let pw = document.querySelector("#user_pw").value;
    let email = document.querySelector("#user_email").value;
    let tel = document.querySelector("#tel").value;
    let cpf = document.querySelector("#user_cpf").value;
    let endereco = document.querySelector("#user_endereco").value;
    let cargo = document.querySelector('input[name="cargo"]:checked').value;
    let url = 'http://localhost:8080/us/log/true';

    let obj = {
        'nome': nome,
        'senha': pw,
        'email': email,
        'telefone': tel,
        'cpf': cpf,
        'endereco': endereco,
        'cargo': cargo
    }

    console.log(obj);
    
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(obj),
        // }).then(res => {
        //     console.log(res); 
        //     return res.json();
        // }).then(data => {
        //     console.log(data);

        // }).catch(err => {
        //     console.log(err);
        // })

        document.querySelector("#user_name").value = "";
        document.querySelector("#user_pw").value = "";
        document.querySelector("#user_email").value = "";
        document.querySelector("#tel").value = "";
        document.querySelector("#user_cpf").value = "";
        document.querySelector("#user_endereco").value = "";
        document.querySelector("#user_cargo").checked = false;
}