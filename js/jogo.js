var rodada = 1
var matriz = Array(3);

matriz['a'] = Array(3);
matriz['b'] = Array(3);
matriz['c'] = Array(3);

matriz['a'][1] = 0;
matriz['a'][2] = 0;
matriz['a'][3] = 0;

matriz['b'][1] = 0;
matriz['b'][2] = 0;
matriz['b'][3] = 0;

matriz['c'][1] = 0;
matriz['c'][2] = 0;
matriz['c'][3] = 0;
 
$(document).ready(function(){
    $('#iniciar').click(function(){
        if($('#nome1').val() == ''||$('#nome2').val() == ''){
            alert('O campo dos nomes deve ser preenchido.');
            return false;
        }
        $('#jogador1').html($('#nome1').val());
        $('#jogador2').html($('#nome2').val());
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    })
    $('.jogada').click(function(){
        var camp_click = this.id;
        $('#' + camp_click).off();
        jogada(camp_click);
    })
    function jogada(id){
        var icone = '';
        var ponto = 0;
        if((rodada % 2)==1){
            //icone = 'url("../learning_jquery/img/marcacao_1.png")';
            icone = 'url("../img/marcacao_1.png")';
            ponto = -1;
        }
        else{
            //icone = 'url("../learning_jquery/img/marcacao_2.png")';
            icone = 'url("../img/marcacao_2.png")';
            ponto = 1;
        }
        rodada++
        $('#' + id).css('background-image', icone)
        var linha_coluna = id.split('-')
        
        matriz[linha_coluna[0]][linha_coluna[1]] = ponto;

        verificaCombinacao() 

    }

     function verificaCombinacao(){
        var pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos += matriz['a'][i];
        }
        ganhador(pontos);
       
        pontos = 0
        for(var i = 1; i <= 3; i++){
            pontos = pontos += matriz['b'][i];
        }
        ganhador(pontos);

        pontos = 0
        for(var i = 1; i <= 3; ++i){
            pontos = pontos += matriz['c'][i];
        }
        ganhador(pontos);

        
        for(var l = 1; l <= 3; l++){
            pontos = 0
            pontos += matriz['a'][l];
            pontos += matriz['b'][l];
            pontos += matriz['c'][l];

            ganhador(pontos);
        } 
        pontos = 0;
        pontos = matriz['a'][1] + matriz['b'][2] + matriz['c'][3];      
        ganhador(pontos)

        pontos = 0;
        pontos = matriz['a'][3] + matriz['b'][2] + matriz['c'][1];
        ganhador(pontos); 
    }
    function ganhador(pontos){
        console.log(pontos)
        if(pontos == -3){
            var jogada_1 = $('#nome1').val();
            alert(jogada_1 +' é o vencedor(a)')
            $('.jogada').off();
        }
        else if(pontos == 3){
            var jogada_2 = $('#nome1').val();
            alert(jogada_2 +' é o vencedor(a)')
            $('.jogada').off();
        }
    } 
})