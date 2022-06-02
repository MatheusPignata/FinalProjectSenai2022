setTimeout(() => {
    document.querySelector('.loader-wrapper').classList.add('hidden');
}, 1500)

function login() {
    let cpf = document.querySelector("#user_cpf").value;
    let pw = document.querySelector("#user_pw").value;
    // let pw = md5(document.querySelector("#user_pw").value);

    let data = {
        "cpf" : cpf,
        "senha" : pw
    }
    
    fetch(url + 'login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            console.log(res);
            if(res.status == 400){
                alert("Usuário ou senha inválidos!");
                return;
            }else{
                return res.json();
            }
        }).then(data => { 
            console.log(data);
            if(data.cargo == 'C'){

            }else{
                localStorage.setItem('user', JSON.stringify(data.id));
                window.location.href = "../menu/index.html";
            }
        }).catch(err => {
            console.log(err);
        });
}