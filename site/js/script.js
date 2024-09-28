//Encontrar um elemento HTML(Entrada)
/*var titulo = document.querySelector('#tituloPrincipal');

//console.log(document.querySelector('#tituloPrincipal'));
//Manipular / alterar (processamento)

titulo.textContent = 'teste';


//Apresentar o resultado (Saida)

console.log(titulo);

$(function(){
    var titulo2 = $('#tituloPrincipal');//entrada
//processamento, alteraçao de texto
    titulo2.text('texte2');

    //alteraçao HTML

    titulo2.html('olá <br> Mundo!');

    //alteraçao CSS
    //titulo2.css('background-color', 'red');

    //manipulaçao de atributos
    titulo2.addClass('fundoRosa');

    titulo2.attr('class','fundoLaranja');

    //titulo2.removeClass('fundoLaranja');
    titulo2.removeAttr('class');
    titulo2.remove();
    
//saida
    console.log(titulo2);


})*/

/*$(function () {

    function calcTabuada() {

        var valor = Number($('#tabuada').val());

        var resposta = $('#respostaTabuada');
        var coletora = `${valor}X ${1} = ${valor * 1} <br>`

        for (let i = 1; i <= 10; i++) {
            coletora += `${valor}X ${i} = ${valor * i} <br>`;

        }
        resposta.html(coletora);


    }

    var btnCalcular = $('#btnCalcular');

    btnCalcular.click(calcTabuada);


});*/

/*$(function () {

    var btnCalcular = $('#btnCalcular');
    var titulo = $('#tituloTabuada');

    btnCalcular.click(() => {
        titulo.fadeToggle(1000);

    })

    /*btnCalcular.dbClick(()=>{
     titulo.fadeIn();
    })*/





// Alterar Cor

/*/function alterarCor() {
    const cor = document.querySelector('#cor').value;
    const body = document.querySelector('body');

    body.style.backgroundColor = `${cor}`
};*/

/*$(function() {
    $('#cor').on('input', function() {
        const cor = $(this).val();
        $('body').css('background-color', cor);
    });
});

$(document).ready(function() {
    // Função para realizar a soma
    function soma() {
        // Obtém os valores dos inputs e os converte para número
        const valorA = parseFloat($('#valorA').val());
        const valorB = parseFloat($('#valorB').val());

        // Verifica se os valores são números válidos
        if (isNaN(valorA) || isNaN(valorB)) {
            $('#respostaSoma').text('Por favor, insira valores válidos.');
            return;
        }

        // Realiza a soma
        const resultado = valorA + valorB;

        // Exibe o resultado na div com o id 'respostaSoma'
        $('#respostaSoma').text('Resultado: ' + resultado);
    }

    // Associa a função soma ao clique do botão
    $('button').on('click', function(e) {
        e.preventDefault();  // Previne o comportamento padrão do botão
        soma();  // Chama a função para realizar a soma
    });
});*/


/*function mudarTema() {
    //Obtém o valor do select com jQuery
    
    const tema = $('#tema').val(); 

    // Seleciona o body com jQuery
    const $body = $('body');  

    // Seleciona todos os elementos com a classe 'container'com jQuery
    const $container = $('.container');  

    if (tema === 'Claro') {
        $body.css('background-color', 'rgb(252, 206, 173)');
        $container.css({
            'background-color': 'bisque',
            'color': 'rgb(241, 171, 121)'
        });
    } else if (tema === 'Escuro') {
        $body.css('background-color', 'rgb(87, 38, 2)');
        $container.css({
            'background-color': 'rgb(154, 67, 4)',
            'color': 'rgb(241, 171, 121)'
        });
    } else {
        $body.css('background-color', 'chocolate');
        $container.css({
            'background-color': 'bisque',
            'color': 'black'
        });
    }
}*/




$(document).ready(function () {

    var btnTema=$('#tema');
    // Função para alterar o tema
    function mudarTema() {
        const tema = $('#tema').val();  // Obtém o valor do tema selecionado
        const $body = $('body');  // Seleciona o body
        const $container = $('.container');  // Seleciona todos os elementos com a classe 'container'

        if (tema === 'Claro') {
            $body.css('background-color', 'rgb(252, 206, 173)');
            $container.css({
                'background-color': 'bisque',
                'color': 'rgb(241, 171, 121)'
            });
        } else if (tema === 'Escuro') {
            $body.css('background-color', 'rgb(87, 38, 2)');
            $container.css({
                'background-color': 'rgb(154, 67, 4)',
                'color': 'rgb(241, 171, 121)'
            });
        } else {
            $body.css('background-color', 'chocolate');
            $container.css({
                'background-color': 'bisque',
                'color': 'black'
            });
        }
    }

    // Associa a função ao clique do botão
    btnTema.click(mudarTema);
});


