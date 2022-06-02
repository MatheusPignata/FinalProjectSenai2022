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
            order.querySelector(".chamado").innerHTML = c.id;
            order.querySelector(".prod").innerHTML = c.produto;
            order.querySelector(".status").innerHTML = c.status;
            order.querySelector(".tec").innerHTML = c.funcionario.nome;
            list.appendChild(order);
        })
    }).catch(err =>[
        console.log(err)
    ])
}