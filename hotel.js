            let nomehtl = prompt('Qual nome do hotel?');

                alert ('O nome do hotel é ' +nomehtl);

            let user = prompt('Usuario:');

            validacao_senha();

        function validacao_senha(){

            let senha = Number(prompt('Senha:'));

            if(senha != 2678) {

                alert('Senha ou usuário incorreto, (TENTE NOVAMENTE)');
                validacao_senha()

            }else if(senha === 2678) {

                alert(`Seja bem vindo ao Hotel ${nomehtl}, ${user}`);
                inicio();
        }
        
    } 

        function erro(){

        alert ('ERRO \n Escolha uma opção valida.');
         }

        function inicio(){

            let opcoes = Number(prompt('Oque deseja; \n 1-)Reserva de quartos \n 2-)Cadastro de hóspedes \n 3-)Pesquisa de Hóspedes \n 4-) Eventos \n 5-)Reserva do Buffet \n 6-) Reserva de Auditório para eventos \n 7-) Reserva  Restaurante \n 8-)Abastecimento de Gasolina/Alcool \n 9-) Manutenção de Ar condicionado \n 10-) Sair'));

            while(opcoes != opcoes || opcoes <= 0 ){
                alert(`${user} Escolha um numero entre 1 e 10, Sendo 10 para sair`);
                inicio();
         }

            switch(opcoes){

                case 1:

                    reserva_quartos();
                    break;
                    

                case 2:

                    cadastro_hospedes();
                    break;
                

                case 3:

                    inicio_hospedes();
					break;
                    

                case 4:

                    eventos();
                    break;
                   

                case 5:

                    reserva_buffet();
                    break;
                    

                case 6:

                    reserva_auditorio();
                    break;
                  

                case 7:

                    reserva_restaurante();
                    break;


                case 8:

                    abastecimento();
                    break;
                    

                case 9:

                    manutencao_ar();
                    break;
        

                case 10:

                    sair();
                    break;

                default:

                    erro_processamento();
                    break;
            }

        } 

        function reserva_quartos(){

            let padrao_diaria = Number(prompt('Qual valor padrão da diria?'));
      
            while (padrao_diaria <= 0 || isNaN (padrao_diaria)){

                alert('Valor inválido - (TENTE NOVAMENTE). ' + user);
                reserva_quartos();

            }

            let numero_diarias = Number(prompt('Quantas diarias serão necesssarias?'));

            while (numero_diarias <= 0 || isNaN (numero_diarias)){

                alert ('Numero de diarias inválido - (TENTE NOVAMENTE)');
                reserva_quartos();
            }

            let valor_total1 = padrao_diaria * numero_diarias ;

                alert (`O valor de ${numero_diarias} diarias é de ${valor_total1}R$`);

            let nome_hospede1 = prompt('Qual nome do hóspede?');
            let confirmacao = prompt(`${user} você confirma a hospedagem para ${nome_hospede1}  por ${numero_diarias} Dias? S/N`);
            
            if(confirmacao === "S"){

                alert(`"${user}, reserva efetuada para ${nome_hospede1}. O valor total é de ${valor_total1}.`);
                inicio();
            }
            
            else{

                alert(`${user}, reserva não efetuada`);
                inicio();

            }

        }

        function cadastro_hospedes(){
            
            let valor_diaria = Number(prompt('Qual valor padrão da diaria?'));

            while (valor_diaria <= 0 || isNaN (valor_diaria)){

                alert('Valor invalido - (TENTE NOVAMENTE)');
                cadastro_hospedes();
            }
            
            let nome_hospede2 = prompt('Qual nome do hóspede?');
            let gratuidade = 0
            let meia = 0 
            let total_h = 0

            while(nome_hospede2 != "PARE"){

                idade = Number(prompt('Qual a idade do hóspede'));

                if(idade <= 0 || idade === isNaN){

                    alert('Valor invalido - Tente novamente')
                    cadastro_hospedes();
                }

                else if(idade <= 6){

                    alert(`${nome_hospede2} Cadastrado com sucesso, ${nome_hospede2} possui (GRATUIDADE)`);
                    gratuidade ++;

                }
                else if(idade >= 60){

                    alert(`${nome_hospede2} Cadastrado com sucesso, ${nome_hospede2} (PAGA MEIA)`);
                    meia ++;
                    total_h += valor_diaria /2;

                }

                else{

                    alert(`${nome_hospede2} Cadastrado com sucesso`);
                    total_h += valor_diaria;
                    

                }

                   nome_hospede2 = prompt('Qual nome do hóspede? (PARE) para sair');

                if(nome_hospede2 === "PARE"){

                    alert(`${user} O valor total das hospedagens é R$${total_h}; ${gratuidade} Gratuidade(s); ${meia} Meia`);
                    inicio();

                   }
            }
        }

			
        function inicio_hospedes() {		// menu com opções para inserir um hospede e guardar o dado em um array e depois buscar a informação com o mesmo  nome inserido.

                let hospedes = [];
              
               function inicio1 () {
                let opcao = Number(prompt("Escolha uma opção 1: cadastrar | 2: pesquisar | 3: sair"));
              
                switch(opcao) {
                   case 1:
                    cadastrar();
                    break
              
                    case 2:
                    pesquisar();
                    break
              
                    case 3:
                    sair();    
                }
              }
              
               inicio1();
                
                  function cadastrar () {
              
                    let opcao1 = 's';
              
                    while (hospedes.length < 15 && opcao1 == 's') {
                      let i = 0;
                      i++;
                      let nome = prompt("Qual nome do hospede");
                      hospedes.push(nome);
                      alert(`Hospede ${nome}  foi cadastrado com secesso!`);
                      
              
                      opcao1 = prompt("Gostaria de continuar digite S/N ");
              
                    }    
              
                     if(hospedes.length >= 5) {
                          alert(`nomes registrados\n ${hospedes}`);
                          inicio1(); 
                     }
                     else {
                      alert(`nomes registrados\n ${hospedes}`);
                      inicio1();
                     } 
                  }
              
              
                  function pesquisar(){
                        let pesquisar = prompt("Qual o nome do Hóspede?")
                     
                        if(hospedes.includes(pesquisar)) {
                           alert(`${pesquisar} foi encontrado!`);
                           inicio1();
                        }
                        else {
                          alert(`${pesquisar} não foi encontrado!`);
                          inicio1();
                        }
                  }
              
                  function sair(){
                      inicio();
                  }
              
                  
               
                  
              }
              
                            
            function eventos(){

                let duracao = Number(prompt('Qual a duração do evento em horas?'));
                let garcom = Number(prompt('Quantos garçons serão nescessarios?'));
                let valor_garcom = 10.50;

                let custo_total = valor_garcom * duracao * garcom;

                alert(`O custo total é: R$ ${custo_total}`);
                
                let confir = prompt('Gostaria de efetuar a reserva? S/N');

                if(confir === "S"){

                    alert(`${user}, Reserva confirmada`);
                    inicio();

                }
                
                else{
                    alert(`${user}, Reserva não foi efetuada.`);
                    inicio();
                }
            }

                function reserva_buffet(){
                    
                    let aguap = 0.2;
                    let cafep = 0.5;
                    let salgadosp = 7;
                    let agua = 0.40;
                    let cafe = 0.80;

                    let numero_conv = Number(prompt('Qual numero de convidados?'));

                    let res1 = numero_conv * aguap;
                    let res2 = numero_conv * cafep;
                    let res3 = numero_conv * salgadosp;
                    let res4 = res1 * agua;
                    let res5 = res2 * cafe;
                    let res6 = (res3 / 100) * 34;
                    let total_buffet = res4 + res5 + res6;

                    if(numero_conv > 350){
                        alert('Quantidade de convidados superior à capacidade máxima.')
                        reserva_buffet();
                    }

                    else if(numero_conv > 0 && numero_conv <=350 ){
                        alert(`O evento precisara de ${res1} litros de água ${res2} litros de café ${res3} salgados, O custo total do evento será de R$${total_buffet.toFixed(2)}`)
                    }
                        let confir_reserva = prompt('Gostaria de efetuar a reserva? Digite (S)para confirmar ou (N)para cancelar.');

                    if(confir_reserva === "S"){
                        alert(`${user} A reserva foi efetuada com sucesso.`);
                        inicio();

                    }else{
                        alert(`${user} A reserva não foi confirmada.`);
                        inicio();
                    }
                }

                function reserva_auditorio(){

                    let auditório1 = Number(prompt('Qual o número de convidados para o seu evento?'));
                    let cadeiras_adicionais = auditório1 - 150;
                    
                    if(auditório1 <= 0 || auditório1 > 350){
                        alert('Quantidade de convidados superior à capacidade máxima ou Valor invalido');
                        reserva_auditorio();
                        
                    }else if(auditório1 <= 150){
                        alert(`${user} Use o auditório Laranja`);
            
                    }else if(auditório1 > 150 && auditório1 < 220){
                        alert(`${user} Use o auditório Laranja (inclua mais ${cadeiras_adicionais} cadeiras)`);
                   
                    }else if (auditório1 > 220 && auditório1 <= 350){
                        alert(`${user} Use o auditório Colorado`);
                    }
                        
                    let confirm = prompt('Gostaria de efetuar a reserva? S/N');

                    if(confirm === "S"){
                        alert(`${user} reserva efetuada com sucesso.`);
                        inicio();

                    }else if(confirm === "N"){
                        alert(`${user} reserva não foi efetuada.`);
                        inicio();
                    }

                }

                function reserva_restaurante(){

                    let reservas = prompt('Qual o dia do seu evento? \n Segunda \n Terça\n Quarta\n Quinta\n Sexta\n Sabado\n Domingo');
                    
                    switch(reservas.toLowerCase()){//retorna o valor da string que foi chamada para minusculo.

                    case "segunda":
                        segunda();
                        break;

				    case "terca":
                        terca();
                        break;

				    case "quarta":
                        quarta();
                        break;

				    case "quinta":
                        quinta();
                        break;

			        case "sexta":
                        sexta();
                        break;

				    case "sabado":
                        sabado();
                        break;

                    case "domingo":
                        domingo();
                        break;

				    default:
                        erroRestaurante();
                        break;

			}   

                function segunda(){

                    let hora =Number(prompt('Qual a hora do seu evento?'))

                    if (hora >= 7 && hora <= 23) {

                        let empresa = prompt('Informe o nome da empresa:');

                        alert(`Restaurante reservado para ${empresa}, ${reservas} às ${hora}h.`);
                        inicio();
                    }
                    else {
                        alert ('Restaurante indisponível.');
                        reserva_restaurante();
                    }
                }

                function terca(){

                    let hora = Number(prompt('Qual a hora do seu evento?'))

                    if (hora >= 7 && hora <= 23) {

                        let empresa = prompt('Informe o nome da empresa:');

                        alert(`Restaurante reservado para ${empresa}, ${reservas} às ${hora}h.`);
                        inicio();
                    }
                    else {
                        alert('Restaurante indisponível.');
                        reserva_restaurante();
                    }
                }

                function quinta(){

                    let hora =Number(prompt('Qual a hora do seu evento?'))

                    if (hora >= 7 && hora <= 23) {

                        let empresa = prompt('Informe o nome da empresa:');

                        alert(`Restaurante reservado para ${empresa}, ${reservas} às ${hora}h.`);
                        inicio();
                    }
                    else {
                        alert('Restaurante indisponível.');
                        reserva_restaurante();
                    }
                }
                function quarta(){

                    let hora = Number(prompt('Qual a hora do seu evento?'))

                    if (hora >= 7 && hora <= 23) {

                        let empresa = prompt('Informe o nome da empresa:');

                        alert(`Restaurante reservado para ${empresa}, ${reservas} às ${hora}h.`);
                        inicio();
                    }
                    else {
                        alert ('Restaurante indisponível.');
                        reserva_restaurante();
                    }
                }
                function sexta(){

                    let hora =Number(prompt('Qual a hora do seu evento?'))

                    if (hora >= 7 && hora <= 23) {

                        let empresa = prompt('Informe o nome da empresa:');

                        alert(`Restaurante reservado para ${empresa}, ${reservas} às ${hora}h.`);
                        inicio();
                    }
                    else {
                        alert = ('Restaurante indisponível.');
                        reserva_restaurante();
                    }
                }

                function sabado(){

                    let hora =Number(prompt('Qual a hora do seu evento?'))

                    if (hora >= 7 && hora <= 15) {

                        let empresa = prompt('Informe o nome da empresa:');

                        alert (`Restaurante reservado para ${empresa}, ${reservas} às ${hora}h.`);
                        inicio();
                    }
                    else {
                        alert('Restaurante indisponível.');
                        reserva_restaurante();
                    }
                }

                function domingo(){

                    let hora =Number(prompt('Qual a hora do seu evento?'))

                    if (hora >= 7 && hora <= 15) {

                        let empresa = prompt('Informe o nome da empresa:');

                        alert (`Restaurante reservado para ${empresa}, ${reservas} às ${hora}h.`);
                        inicio();
                    }
                    else {
                        alert('Restaurante indisponível.');
                        reserva_restaurante();
                    }
                }

            }

            function abastecimento(){

                let Alcool_wayne = Number(prompt('Qual o valor do álcool no posto Wayne Oil?'));
                let gasolina_Wayne = Number(prompt('Qual o valor da gasolina no posto Wayne Oil?'));
                let Alcool_stark = Number(prompt('Qual o valor do álcool no posto Stark Petrol?'));
                let gasolina_stark = Number(prompt('Qual o valor da gasolina no posto Stark Petrol?'));

                let calc_alcool_W = (Alcool_wayne * 100) / gasolina_Wayne;
                let porcent_alcool_wayne = 100 - calc_alcool_W;//Pega a porcentagem
                let calc_alcool_S = (Alcool_stark * 100) / gasolina_stark;
                let porcent_alcool_stark = 100 - calc_alcool_S;
                
                if(Alcool_wayne <= Alcool_stark && porcent_alcool_wayne >= 30){
                    alert(`${user}, é mais barato abastecer com alcool no posto wayne Oil. ${Alcool_wayne}`);
                    inicio();
                    
                }else if(Alcool_stark <= Alcool_stark && porcent_alcool_stark >= 30){
                    alert(`${user}, é mais barato abastecer com alcool no posto stark. ${Alcool_stark}`);
                    inicio();
                }


                else if(gasolina_Wayne <= gasolina_stark && porcent_alcool_wayne <= 30){
                        alert(`${user}, é mais barato abastecer com gasolina no posto wayne Oil. ${gasolina_Wayne}`);
                        inicio();
                }

                else if(gasolina_stark <= gasolina_Wayne && porcent_alcool_stark <= 30){
                            alert(`${user}, é mais barato abastecer com gasolina no posto stark. ${gasolina_stark}`);
                            inicio();
                }

		}

        function manutencao_ar(){

            let menor_valor_base = 19888867900;   // variável base para começar a atribuição de menor valor no If
			let nome_empresa_menor = [];		// Array para armmazenar o nome da empresa de menor valor
			let menor_valor = [];			// Array para armmazenar o menor valor de serviço da empresa.

			do {
				let nome_Empresa = prompt("Qual o nome da empresa?");
				let valor_Aparelhos = Number(prompt("Qual o valor por aparelho?"));
				let quant_Aparelho = Number(prompt("Qual a quantidade de aparelhos?"));
				let porcentagem_desc = Number(prompt("Qual a porcentagem de desconto?"));
				let minimo_Aparelhos = Number(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
				let total_Manutencao = valor_Aparelhos * quant_Aparelho;

				if (minimo_Aparelhos <= quant_Aparelho) {
					total_Manutencao -= total_Manutencao * (porcentagem_desc / 100);
				}

				alert(`O serviço da ${nome_Empresa} custará R$${total_Manutencao}`);  // informar o valor do serviço e nome da empresa inserida

				// atribuição de menor valor de serviço
				if (total_Manutencao < menor_valor_base) {
					menor_valor_base = total_Manutencao; 		
					nome_empresa_menor.push(nome_Empresa);		// insere dados no array
					menor_valor.push(total_Manutencao);			
				}
				// FLAG - ponto de encerramento ou repetição do código
				let novo_Cadastro = prompt(`Deseja informar novos dados, ${nameUser}? (S/N)`);


				if (novo_Cadastro.toUpperCase() == "N") {
					alert("O orçamento de menor valor é o " + nome_empresa_menor.slice(-1)[0] + " por " + menor_valor.slice(-1)[0]); // pegar o último valor do array. 
					inicio();
				}
				else if (novo_Cadastro == Number || novo_Cadastro == "") {
					novo_Cadastro = prompt("Valor inválido. Insira 'S' para continuar ou 'N' para encerrar: ");
				}
			} while (novo_Cadastro.toUpperCase() == "S") {			// repetir o código se a resposta for "S"

			}

		}

		function erro() {	
			alert('Por favor, informe um número entre 1 e 9');
			inicio();
		}
		function erro1() {
			alert('Por favor, informe um número entre 1 e 3');
			inicio();
		}
		function erroRestaurante() {
			alert('Por favor, informe um dia da semana válido');
			inicio();
		}
		function sair() {
			let confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(`Muito obrigado e até logo, ${nameUser}.`);
				close();
			} else {
				inicio();
			}
		}


            


            
