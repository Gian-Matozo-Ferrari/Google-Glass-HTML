function mudaFoto(foto){
    document.getElementById("icone").src = foto;
}
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } //end if.
    else {
        var myModal = new bootstrap.Modal(document.getElementById('myModalnotfound'), {
            keyboard: false
        })
        myModal.show();
        //CEP não Encontrado.
        limpa_formulário_cep();
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {
            document.getElementById('cep').value = cep.substring(0,5)
            +"-"
            +cep.substring(5);

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            var myModal = new bootstrap.Modal(document.getElementById('myModalinvalid'), {
                keyboard: false
            })
            myModal.show();
            limpa_formulário_cep();

        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

function calcTotal(){
    var quant = parseInt(document.getElementById('quantidade').value);
    if(quant >= 0 && quant != null){
        var total = quant * 7510.43;
        var totalReais = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById('precoTotal').value = totalReais;
    }
}