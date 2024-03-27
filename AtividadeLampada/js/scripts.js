let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const Ligar = () => {};

const gerarfigura = () => {
  let qtdfigura = document.getElementById("ixabxjsbc").value;

  console.log(bchdbcjd);

  document.getElementById("canvas")
    .innerHTML`<img class "imagem" srt= https://www.google.com/url?sa=i&url
  =https%3A%2F%2Fwww.facebook.com%2Fsenaigrafica%2F%3Flocale%3Dpt_BR&psig=AOvVaw330a4ugHSFBufja55VmYms&ust
  =1711561823870000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiE2ua-koUDFQAAAAAdAAAAABAE`;
};

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //valor informado pelo usuario

  console.log(qtdImagem);
  let Canvas = document.getElementById("canvas");
  Canvas.innerHTML = "";
  for (let i = 1; i <= qtdImagem; i++) {
    Canvas.innerHTML += `<img class="imagens" src="img/acesa.jpg" alt="imagem">`;
  }
};

const calcular = () => {
  let inValorPedido = document.getElementById("inValorPedido");
  let inPercDesc = document.getElementById("inPercDesc");
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  if (inValorPedido.value >= 2000) {
    inPercDesc.value = 1.5;
    inValDesc.value = (inValorPedido.value * 1.5) / 100;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 1500) {
    inPercDesc.value = 1;
    inValDesc.value = (inValorPedido.value * 1) / 100;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 1000) {
    inPercDesc.value = 0.8;
    inValDesc.value = (inValorPedido.value * 0.8) / 100;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 500) {
    inPercDesc.value = 0.5;
    inValDesc.value = (inValorPedido.value * 0.5) / 100;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  }
  console.log(inValorPedido.value);
};

document.getElementById("mensagem-erro").style.display = "none";
const validaForm = () => {
  // captura dos dados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  // validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
  inCli.length < 3 &&
    (msgErro.innerHTML += "Nome do cliente com tamanho inválido! <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválida <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail inválida <br>");
  inMail.length < 6 && (msgErro.innerHTML += "E-mail inválida <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválida <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Produto inválida <br>");
  inQtd == "" && (msgErro.innerHTML += "Qtde inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Qtde negativa! <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválida <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo! <br>");

  // mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : ((msgErro.style.display = "block"), msgErro.classList.remove("verde"));

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add("verde"));
};
