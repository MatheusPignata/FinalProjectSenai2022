function cadastrar() {
    let nome = document.querySelector("#user_name").value;
    let pw = document.querySelector("#user_pw").value;
    let email = document.querySelector("#user_email").value;
    let tel = document.querySelector("#tel").value;
    let cpf = document.querySelector("#user_cpf").value;
    let endereco = document.querySelector("#user_endereco").value;
    let cargo = document.querySelector('input[name="cargo"]:checked').value;

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
    
        fetch(url + 'cadastrar', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj),
        }).then(res => {
            if (res.status == 200) {
                alert("Cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar!");
            }
            return res.json();
        }).then(data => {
        }).catch(err => {
        })

        document.querySelector("#user_name").value = "";
        document.querySelector("#user_pw").value = "";
        document.querySelector("#user_email").value = "";
        document.querySelector("#tel").value = "";
        document.querySelector("#user_cpf").value = "";
        document.querySelector("#user_endereco").value = "";
        document.querySelectorAll("#user_cargo")[0].checked = false;
        document.querySelectorAll("#user_cargo")[1].checked = false;
}