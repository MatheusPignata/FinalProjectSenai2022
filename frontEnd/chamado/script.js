let idChamado = localStorage.getItem('idChamado');

let produto = document.querySelector('#produto');
let marca = document.querySelector('#marca');
let serial = document.querySelector('#sn');
let tecnico = document.querySelector('#tecnico');
let cor = document.querySelector('#cor');
let stats = document.querySelector('#status');
let orcamento = document.querySelector('#orcamento');
let descricao = document.querySelector('#problem');
let idCliente;
let idTecnico;

fetch(url + 'listchamado/' + idChamado)
.then(res => {
    return res.json();
}).then(data =>{
    idCliente =  data.cliente.id;
    idTecnico = data.funcionario.id;
    produto.value = data.produto;
    marca.value = data.marca;
    serial.value = data.serial;
    tecnico.value = data.funcionario.nome;
    cor.value = data.cor;
    stats.value = data.status;
    orcamento.value = (data.orcamento).toFixed(2);
    descricao.value = data.descricao;
}).catch(err =>{
    console.log(err)
})

function atualizar(){
    let obj = {
        'produto': produto.value,
        'marca': marca.value,
        'serial': serial.value,
        'funcionario': idTecnico,
        'cor': cor.value,
        'status': stats.value,
        'orcamento': orcamento.value,
        'descricao': descricao.value,
        'cliente': idCliente
    }

    fetch(url + 'alterarchamado/' + idChamado, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
    }).then(res => {
        if(res.status == 200) { alert("Atualizado com sucesso!!")}
        location.reload();
    }).catch(err => {
        console.log(err);
    })
}

var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 300,
	height : 300,
    colorDark : "#8f5cd0",
    colorLight : "#fff",
});

function makeCode () {		
	qrcode.makeCode(idChamado);
}

var modal = document.getElementById('myModal');
var body = document.getElementsByTagName('body');
var container = document.querySelector('.myContainer');
var btnOpen = document.getElementById("myBtn");

btnOpen.onclick = function() {
    modal.className = "Modal is-visuallyHidden";
    setTimeout(function() {
      container.className = "MainContainer is-blurred";
      modal.className = "Modal";
    }, 100);
    container.parentElement.className = "ModalOpen";

    makeCode();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "Modal is-hidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
}