<?php


    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $nomeCompleto = $_POST['nomeCompleto'];
    $dataNascimento = $_POST['dataNascimento'];
    $sexo = $_POST['sexo'];
    $cep = $_POST['cep'];
    $rua = $_POST['rua'];
    $numero = $_POST['numero'];
    $bairro = $_POST['bairro'];
    $cidade = $_POST['cidade'];
    $uf = $_POST['uf'];
    $comentario = $_POST['comentario'];
    $confirmaCompra = $_POST['confirmaCompra'];
    $prioridade = $_POST['prioridade'];
    $corEscolhida = $_POST['corEscolhida'];
    $quantidade = $_POST['quantidade'];
    $precoTotal = $_POST['precoTotal'];
 

$erro = 0;
if(empty($nomeCompleto) && empty($email) && empty($senha) && empty($cep) && empty($dataNascimento)){
    $erro = 1;
    $msg = "Por Favor digite o nome do proprietario.";
}
if($erro){
    echo "<html><body>";
    echo "<p style='text-align:center'>" .$msg. "</p>";
    echo "<p style='text-align: center'><a href='index.php' >VOLTAR </a></p>";
    echo "</body></html>";
}else{
    $servidor = "127.0.0.1"; 
    $usuario = "root";
    $senha = "";
    $db = "formulario-glass";

    $link = mysqli_connect($servidor, $usuario, $senha, $db);
    if (mysqli_connect_errno()){
        echo "Erro ao conectar ao banco" . mysqli_connect_error();
        exit();
    }
    if(!mysqli_query($link, "INSERT INTO cadastro_interesse (ID, Email, Senha, Nome, Nascimento, Sexo, CEP, Rua, Numero, Bairro, Cidade, UF, Comentario, ConfirmaCompra, Prioridade, CorEscolhida, Quantidade, PrecoTotal)
     VALUES (NULL, '" .$email. "', '" .$senha. "', '" .$nomeCompleto. "', '" .$dataNascimento. "', '" .$sexo. "', '" .$cep. "', '" .$rua. "', '" .$numero. "', '" .$bairro. "', '" .$cidade. "', '" .$uf. "', '" .$comentario. "', '" .$confirmaCompra. "', '" .$prioridade. "', '" .$corEscolhida. "', '" .$quantidade. "', '" .$precoTotal. "')")){
         echo ("Descricao do erro: " .mysqli_error($link));
     }
}

?>