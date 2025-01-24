/**
 * Slide show
 * @author Thiago Nascimento
 */

// array(vetor) de imagens 
//                 [0]           [1]           [2]        
let slides = ["banner1.jpg","banner2.jpg","banner3.jpg"]
let intervalo = 3000 //(3000ms = 3s (1s por imagem))
let indice = 0 //apoio a logíca (indice do array)

console.log(typeof(slides))
//função para a troca de imagens 
function show() {
   // capturar o id do banner
   const slide =document.getElementById('slide')

   //Efeito de entrada
   // A Estrutura abaixo verifica se foi atribuida a classe (.slideOut) ao identificar #slide
   if (slide.classList.contains('slideOut')) {
      slide.classList.remove('slideOut')
   }
   slide.classList.add('slideIn')

   //troca de imagem
   //temporizador (nativo do JS)
   setTimeout(() => {
      //soma 1 ao indice do vetor
      indice++
      // se o ultimo slide do vetor for atingido, voltar para o 0
      if(indice >= slides.length) {
         indice = 0
      }
      //substituir a imagem no documento html pela proxima imagem do vetor (img/slides[0]   img/slides[1]     img/slides[2])
      slide.src = `img/${slides[indice]}`
      
   }, 1000) //ajuste (sincronizar com o css)
   
   //efeito de saida 
   
   if(slide.classList.contains('slideIn')){
      slide.classList.remove('slideIn')
    }
    slide.classList.add('slideOut ') 

    // Intervalo para a proxima execução (loop infinito)
    setTimeout(show, intervalo)
   
}

//executar a função ao iniciar o documento js 
show()