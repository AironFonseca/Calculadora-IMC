function calcularIMC() {
  const alturaInput = document.getElementById('altura');
  const pesoInput = document.getElementById('peso');
  const resultadoDiv = document.getElementById('resultado');

  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);

  // Limpa classes de erro e de cor anteriores na div de resultado e nos inputs
  alturaInput.classList.remove('input-error');
  pesoInput.classList.remove('input-error');
  resultadoDiv.classList.remove('azul', 'verde', 'amarelo', 'laranja', 'vermelho'); // Remove todas as classes de cor possíveis
  resultadoDiv.classList.add('resultado-caixa'); // Adiciona a classe base para estilização da caixa

  // Validação mais específica e feedback visual
  if (isNaN(altura) || altura <= 0) {
    resultadoDiv.innerHTML = `<p class="erro">Por favor, insira uma altura válida (ex: 1.75).</p>`;
    alturaInput.classList.add('input-error');
    resultadoDiv.classList.remove('resultado-caixa');
    return;
  }

  if (isNaN(peso) || peso <= 0) {
    resultadoDiv.innerHTML = `<p class="erro">Por favor, insira um peso válido (ex: 70.5).</p>`;
    pesoInput.classList.add('input-error');
    resultadoDiv.classList.remove('resultado-caixa');
    return;
  }

  const imc = peso / (altura * altura);
  const imcFormatado = imc.toFixed(1);
  let descricao = '';
  let corClasse = '';
  let emoji = '';

  if (imc < 18.5) {
    descricao = 'Você está Abaixo do peso!';
    corClasse = 'azul';
    emoji = '⚠️';
  } else if (imc < 25) {
    descricao = 'Você está no Peso normal!';
    corClasse = 'verde';
    emoji = '✅';
  } else if (imc < 30) {
    descricao = 'Você está Acima do peso!';
    corClasse = 'amarelo';
    emoji = '⚠️';
  } else if (imc < 35) {
    descricao = 'Você está Obeso!';
    corClasse = 'laranja';
    emoji = '❌';
  } else {
    descricao = 'Obesidade Mórbida!';
    corClasse = 'vermelho';
    emoji = '❌';
  }

  // Adiciona a classe de cor à div de resultado
  resultadoDiv.classList.add(corClasse);

  resultadoDiv.innerHTML = `
    <p>IMC: <span class="imc-valor ${corClasse}">${imcFormatado}</span></p>
    <p class="descricao">Classificação: ${emoji} ${descricao}</p>
  `;
}