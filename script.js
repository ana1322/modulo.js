import {calculaAreaCirculo, calculaPerimetroCirculo, nomeCirculo} from "./circulo.js"
import {calculaAreaQuadrado, calculaPerimetroQuadrado, nomeQuadrado} from "./quadrado.js"

const botaoCalcular = document.getElementById("calcular-btn")
const campoLado1 = document.getElementById("lado1")
const campoRaio1 = document.getElementById("raio1")
const paragrafoResultado1 = document.getElementById("resultado1")
const paragrafoResultado2 = document.getElementById("resultado2")

botaoCalcular.addEventListener("click",()=>{
    const lado1 = parseFloat(campoLado1.value);
    const raio1 = parseFloat(campoRaio1.value);
    alert(`lado ${lado1} e raio: ${raio1}`)

    //calculo quadrado
    const perimetroQuadrado = calculaPerimetroQuadrado(lado1).toFixed(2)
    const areaQuadrado = calculaAreaQuadrado(lado1).toFixed(2)
    paragrafoResultado1.innerText = `o ${nomeQuadrado} tem aproximadamente perimetro igual a: ${perimetroQuadrado} e área igual a ${areaQuadrado}`

    //calculo circulo
    const perimetroCirculo = calculaPerimetroCirculo(raio1).toFixed(2)
    const areaCirculo = calculaAreaCirculo(raio1).toFixed(2)
    paragrafoResultado2.innerText = `o ${nomeCirculo} tem aproximadamente perimetro igual a: ${perimetroCirculo} e área igual a ${areaCirculo}`
})


