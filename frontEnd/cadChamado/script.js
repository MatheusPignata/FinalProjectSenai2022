var cli = [];
load()

document.querySelector("#func").addEventListener("focus", () => {
    document.querySelector("#func").style.color = "black";
})

document.querySelector("#opt").addEventListener("focus", () => {
    document.querySelector("#opt").style.color = "black";
})

function load(){
    let select = document.getElementById("func");

    fetch(url + 'listuser')
    .then(response => response.json())
    .then(data => {
        data.forEach(e=>{
            if(e.cargo == 'F'){
                let option = document.createElement("option");
                option.value = e.id;
                option.innerHTML = e.nome;
                select.appendChild(option);
            }else{
                cli.push(e);
            }
        })
    });
}

function cadastrar(){
    let produto = document.querySelector("#produto").value;
    let marca = document.querySelector("#marca").value;
    let sn  = document.querySelector("#sn").value;
    let tecnico = document.querySelector("#func").value;
    let cor = document.querySelector("#cor").value;
    let tel = document.querySelector("#tel").value;
    let status = document.querySelector("#opt").value;
    let orcamento = document.querySelector("#orcamento").value;
    let descricao = document.querySelector("#descricao").value;
    let idChamado;

    cli.forEach(e=>{
        if(e.telefone == tel){
            tel = e.id;
        }
    })

    let obj = {
        'produto': produto,
        'marca': marca,
        'serial': sn,
        'funcionario': Number(tecnico),
        'cor': cor,
        'cliente': tel,
        'status': status,
        'orcamento': Number(orcamento),
        'descricao': descricao
    }
    
        fetch(url + 'criarchamado', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj),
        }).then(res => {
            if(res.status == 200){
                alert("Chamado criado com sucesso!");
            }else{
                alert("Erro ao criar chamado");
            }
            return res.json();
        }).then(data => {
            makeCode(data.id);
        }).catch(err => {
        })

        document.querySelector("#produto").value = "";
        document.querySelector("#marca").value = "";
        document.querySelector("#sn").value = "";
        document.querySelector("#func").value = "0";
        document.querySelector("#cor").value = "";
        document.querySelector("#tel").value = "";
        document.querySelector("#opt").value = "0";
        document.querySelector("#orcamento").value = "";
        document.querySelector("#descricao").value = "";
        document.querySelector("#func").style.color = "#0000007e";
        document.querySelector("#opt").style.color = "#0000007e";
}

var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 300,
	height : 300,
    colorDark : "#8f5cd0",
    colorLight : "#fff",
});

function makeCode (id) {		
	qrcode.makeCode(id);
    modal.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";
}

var modal = document.getElementById('myModal');
var body = document.getElementsByTagName('body');
var container = document.querySelector('.myContainer');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
}