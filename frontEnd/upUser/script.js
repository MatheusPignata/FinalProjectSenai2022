window.onload = load();

let input = document.querySelector("#datalist");
let user_nome = document.querySelector("#user_nome");
let user_pw = document.querySelector("#user_pw");
let user_email = document.querySelector("#user_email");
let user_tel = document.querySelector("#tel");
let user_cpf = document.querySelector("#user_cpf");
let user_endereco = document.querySelector("#user_endereco");
let user_cargo = '';
let tempId = '';
let users = [];

function load(){
    fetch(url + 'listuser')
    .then(response => response.json())
    .then(data => {
        data.forEach(e=>{
            if(e.cargo == 'C'){
                let option = document.createElement("option");
                option.value = e.nome;
                option.innerHTML = e.nome;
                browsers.appendChild(option);
                users.push(e);
            }
        })
        coisinha();
    });
}

function atualizar(){
    let obj = {
        'nome': user_nome.value,
        'email': user_email.value,
        'telefone': user_tel.value,
        'endereco': user_endereco.value,
        'cargo': user_cargo
    }

    console.log(obj);
    fetch(url + 'alterar/' + tempId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
    }).then(res => {
        console.log(res.status);
        if(res.status == 200) { alert("Atualizado com sucesso!!")}
        location.reload();
    }).catch(err => {
        console.log(err);
    })
}

//tudo isso pra fazer o input ficar com o foco quando o usuario clicar no campo

input.onfocus = function () {
    browsers.style.display = 'block';
    input.style.borderRadius = "5px 5px 0 0";  
};

function coisinha(){
    for (let option of browsers.options) {
        option.onclick = function () {
            input.value = option.value;
            browsers.style.display = 'none';

            function getUser(user){
                return user.nome == input.value;
            }
            tempId = users.find(getUser).id;
            user_nome.value = users.find(getUser).nome;
            user_pw.value = '**********';
            user_email.value = users.find(getUser).email;
            user_tel.value = users.find(getUser).telefone;
            user_cpf.value = '**************';
            user_endereco.value = users.find(getUser).endereco;
            user_cargo = users.find(getUser).cargo;
        }
    };
    
}

input.onblur = function() {
    setTimeout(function() {
        browsers.style.display = 'none';
    }, 150);
    
};

input.oninput = function() {
    currentFocus = -1;
    var text = input.value.toUpperCase();
    for (let option of browsers.options) {
      if(option.value.toUpperCase().indexOf(text) > -1){
        option.style.display = "block";
    }else{
      option.style.display = "none";
      }
    };
};

var currentFocus = -1;

input.onkeydown = function(e) {
    console.log(currentFocus)
    if(e.keyCode == 40){
      currentFocus++
     addActive(browsers.options);
    }
    else if(e.keyCode == 38){
      currentFocus--
     addActive(browsers.options);
    }
    else if(e.keyCode == 13){
      e.preventDefault();
          if (currentFocus > -1) {
            if (browsers.options) browsers.options[currentFocus].click();
        }
    }
};
  
function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");

};

function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
};