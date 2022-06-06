var list = document.querySelector(".list");

load()

function load() {

    fetch(url + 'listchamado')
    .then(res => {
        return res.json();
    }).then(data =>{
        data.forEach(c => {
            let order = document.querySelector(".order").cloneNode(true);

            order.classList.remove("model");
            order.addEventListener("click", () => {window.location.href = '../chamado/index.html?id=' + c.id});
            order.querySelector(".chamado").innerHTML = c.id;
            order.querySelector(".prod").innerHTML = c.produto;
            order.querySelector(".sn").innerHTML = c.serial;
            order.querySelector(".tec").innerHTML = c.funcionario.nome;
            order.querySelector(".status").innerHTML = c.status;
            list.appendChild(order);
        })
    }).catch(err =>[
        console.log(err)
    ])
}

function buscar() {
    let val = document.querySelector("#busca").value.toLowerCase();

    let rows = document.querySelectorAll("tr");
    

    for(let i = 2; i < rows.length; i++){
        console.log(rows[i].innerHTML)
        if (rows[i].innerHTML.toLowerCase().includes(val)){
            rows[i].style.display = "table-row";
        }else{
            rows[i].style.display = "none";
        }
    }
}