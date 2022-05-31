setTimeout(() => {
    document.querySelector('.loader-wrapper').classList.add('hidden');
}, 1500)

function login() {
    let cpf = document.querySelector("#user_cpf").value;
    let pw = md5(document.querySelector("#user_pw").value);
    let url = 'http://localhost:3000/login';

    let data = {
        "cpf" : cpf,
        "senha" : pw
    }
    
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            console.log(res);
            return res.json();
        }).then(data => { 
            if (data.length != 0) {
               
            }else {
                alert('CPF ou senha incorreto')
            }
        }).catch(err => {
            console.log(err);
        });
}

// url false