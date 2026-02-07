// Classe que representa o Parquímetro
// Ela é responsável apenas pelas regras de negócio:
// receber um valor, calcular o tempo e o troco
class Parquimetro{

    // O constructor é chamado quando criamos um novo Parquimetro
    // Ele recebe o valor informado pelo usuário
    constructor(valor){
        // Armazena o valor no objeto
        this.valor = valor;
    }

    // Método responsável por calcular o tempo e o troco
    // Retorna uma mensagem pronta para ser exibida na tela
    calcular(){
        if (this.valor < 1.00) {
            this.mensagem = ("Valor insuficiente!");
            return this.mensagem;
        }

        // Caso o valor seja igual ou maior que R$3,00
        // o usuário recebe o tempo máximo permitido (120 minutos)
        if (this.valor >= 3.00) {
            this.troco = this.valor - 3.00;
            this.mensagem = (`Tempo máximo (120 minutos) | Troco: R$ ${this.troco.toFixed(2)}`);
            return this.mensagem;

        // Caso o valor seja igual ou maior que R$1,75
        // o usuário recebe 60 minutos
        } else if (this.valor >= 1.75) {
            this.troco = this.valor - 1.75;
            this.mensagem = (`60 minutos | Troco: R$ ${this.troco.toFixed(2)}`);
            return this.mensagem;

        // Caso o valor esteja entre R$1,00 e R$1,74
        // o usuário recebe 30 minutos
        } else {
            this.troco = this.valor - 1.00;
            this.mensagem = (`30 minutos | Troco: R$ ${this.troco.toFixed(2)}`);
            return this.mensagem;
        }
    }
}

// Captura o clique no botão "Calcular"
document.getElementById("calcular").addEventListener("click", function(){
    // Obtém o valor digitado no input
    // parseFloat converte o valor de string para número
    const valor = parseFloat(document.getElementById("valor").value);

    // Cria um novo objeto Parquimetro passando o valor informado
    const parquimetro = new Parquimetro(valor);

    // Chama o método calcular() e exibe o retorno na tela
    document.getElementById("mensagem").innerText = parquimetro.calcular();
});
