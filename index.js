const carouselItems = document.querySelectorAll('.carousel-item');
// Seleciona todos od slides da classe "carousel-item"
const carouselDots = document.querySelectorAll('.carousel-dot');
// Seleciona todas as bolinhas de navegação
let currentItem = 0;
// Variável que armazena o índice do slide atual (inicia em 0)

function showSlide(index) {
    // Função para exibir o slide correspondente ao índice 
    carouselItems. forEach ((item, i) => {
    item.classList.toggle('active', i === index);
});
// Ativa apenas o slide do índice fornecido, desativando os outros.
//"carouselItems" é uma variável (constante) que comtém um Nodelist, uma coleção de 
//elementos HTML selecionados usando document.querySelectorAll('. carousel-item').
// o método forEach é uma função nativa de arrays ( e coleção como NodeList- slide1 está
// atribuído ba bolinha 1) em javascript. Ele repete sobre cada elemento da coleção 
//carouselItems, executando uma função para cada item.
//(item, i) => { ... }Esta é uma arrow function (função de seta) usada  como argumento do 
//forEach. Ela é chanada para cada elemento da coleção e recebe dois parâmetros:
//item: o elemento HTML atual (um slide, ou seja, um <div class="carousel-item">) sendo
// procesando na iteração.
//i: o índice elemento atual na coleção (0 para o primeiro slide,
//  1 para o segundo, 2 para p terceiro, etc.).
// Propósito: Usado aqui para manipular a classe active do slide, que controla sua 
// visibilidade (no CSS, .carousel-item.active tem opacity:1, enquanto .carousel-item
//sem active tem opacity: 0).

carouselDots.forEach((dot, i) => {
dot.classList.toggle('active', i === index);

});

// Ativea bolinha correspodente ao slide atual 
// carouselDots é uma variável que contém um Nodelist, uma coleção de elemento HTML
// selecionandos usando document.querySelectoALL('.carousel-dot'). Cada elemento desta
// coleção é uma bolinha de navegação do carrossel ( um <span> com a classe carousel-dot).
// O método forEach é uma função bativa de arrays
//  ( e coleções como Nodelist - slide1 está atríbuida na bolinha 1)em javascript. 
// Ele repete spbre cada elemento da coleção carouselDots, executando uma função para bolinha.
// (dot, i) => { ... } - Esta é uma arrow funcion (função de seta)usando coomo 
// argumento do forEach . Ela é chamada para cada elemento da coleçaõ e recebe dois 
//parâmentros:
// dot: O elemento HTML atual (uma bolinha, ou seja um <span class=" carousel-dot">)
//sendo processo na iteração.
// i: O índice do elemento atual na coleção (0 para primeira bolinha, 1 para a segunda, 2 para a teceira, etc.).

// dot.classList - classList é uma propriedade do objeto dot (um elemento HTML) que
// fornece acesso ás classes CSS associadas a esse elemento. É um objeto que permite 
// manipular classes de forma prática (adicionar, remover, verificar, etc.).
//Propósito: Usando aqui para manipular a classe active da bolinha, que conrola sua 
// aparância visual (no CSS, .carousel-dot.active tem backgraund-color:
//  #FF6F61 e transform: scale (1.3), destacando a bolinha ativa).
// .toggle('active' , i === index) - (=== sinal de comparação) - O método toggle do 
// Object classList adiciona ou remove uma class do elemneto com base em uma condição.
//Ele aceita dois argumentos:
/* 'active' : A class CSS que será adicionada ou removida da bolinha.
// i === index: Uma expressão booleando(Falso ou Verdadeiro) que determina se a class
deve ser adicionada (true) ou removida (false).

i: O índice da bolinha atual na iteração (0,1 ou 2 no exemplo com três bolinhas).

index: O índice do slide que deve ser exibido, 
passado como argumento para a função shawSlide(index).*/
}
function goToSlide(index) {

  // Função para navegar diretamente para um slide específico
  /* function gaToSlide(index)- Define uma função javaScript chamada goToSlide que 
  aceita uma parâmetro chamada index.
  - O parâmetro index é um número inteiro que representa o índice do slide que deve ser 
  exibido (por exemplo, 0  para o primeiro slide, 1 para o segundo, 2 para o terceiro, etc.).*/

  /*Proposíto: Permite que o carrossel exibe um slide específico com base índice 
  fornecido, geralmente chamado quando o usuário clica em uma bolinha de navegação.*/

currentItem = index;

  //Atualiza o índice do slide atual
  /*currentItem é uma variável global definida no ínicio do arquivo slide.js:*/
  /*Por exexmplo, se o usuario clicar na bolinha (índice 1), currentItem será
  definido como 1.*/

showSlide(currentItem);
  // Exibe o slide correspondente 

  /*Chama a função showSlide, passando o valor atual de currebtItem como argumento:
  A função showSlide(index) (definida anteriomente no código) é responsavel por:

  Exiber o slide correspondente ao índice fornecido, adicionando a classe active ao
  elemento <div class="carousel-item"> com esse índice e removendo-a dos outros slides.
  Desrtacar a bolinha de navegação corespondente , adicionando a classe active ao elemento
  <span class="carousel-dot" com o mesmo índice e removendo-a das outras bolinhas.*/


}
function nextSlide()  {
   // Função para avançar ao próximo slide
   // *Define uma função javascript chamada nextSlide.

//Propósito: Avança o carrossel para o próximo slide, atualizando o slide ativo e a bolinha
// de navegação correspondente. É usada pricipalmente para  a transição automática dos 
// slide, mais também pode ser chamada em outras interações.*/


currentItem = (currentItem + 1) % carouselItems.length;
    // Incremento p índice, voltado ao início se ultrapassar o última slide
    /*Esta linha atualiza a variável global curretItem, que armazena o índice do slide
    atualmente ativo (inicializada como let currentItem = 0; no início do slide.js).*/

   /*currentItem: O ínicio do slide atual (por exemplo, 0 para o primeiro slide, 1 para o
   segundo, etc.).
   currentItem + 1: Incremento o índice atual para apontar para o próximo slide.
   carousellitems: Um Nodelist contendo todos os slides so carrossel, abtido com document.
   querySelectorALL('.carousel-item'). No exemplo, há três de, então carouselItems.
   length é 3.

   //carouselItems.lebgth: O operador módulo (%) garante que o índice permaneça dentro dos 
   limites da quantidade de slides. Se currentItem + 1 ultrapassar o número total de slide,
   o módulo retorna o índice ao lado8*/

showSlide(currentItem);
   // Exibir o novo slide 
   /* chama a função showSlide, passando o valor atualizando de currentItem como argumento.
   A função showSlide(index) (definida anteriormente no código) é resposável por:
   Adicionando a classe active ao slide com o índice fornecido (<div class="carousel-item">),
   tornando-o visível (opacity: 1 no CSS).
   Remover a clase active dos outros slide, tornando-os invisíveis( opacity: 0).
   Adiconar a classe active á bolinha de navegação correspoindente (<span class="carousel-dot">),
   destacando-a (cor #FF6F61 e escala 1.3 no CSS).
   Remover a classe active das outras bolinhas, retornando-as ao estado padrão (cor #FFD1CC).*/

}
showSlide(currentItem);
//Exibe o primeiro slide ao carregar a página

setInterval(nextSlide, 5000);
// Configure a alternância automáica de slide a cada 5 segundos






 

