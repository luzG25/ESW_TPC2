const fs = require('fs')
const path = require('path')
const caminhoApp = require('../util/path')
const todosProdutos = []

const ficheiroDados = path.join(caminhoApp, 'data', 'products.json')

module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        todosProdutos.push(this)
        fs, fs.writeFileSync(ficheiroDados, JSON.stringify(todosProdutos), erro => {
            //o que fazer em caso de erro
            console.log("Deu shit")
            console.log(erro)
        })
        console.log('produto guardado')
    }

    static fetchAll(mostrarView) {
        console.log('retrive lista de produtos')
        fs.readFile(ficheiroDados, (erro, conteudoFicheiro) => {
            if (erro) {
                //deu erro não há dados
                mostrarView([])
            }else {
                try{
                    mostrarView(JSON.parse(conteudoFicheiro))
                } catch (erro) {
                    console.log(erro)
                    mostrarView([])
                }
                
            }

        })
    }
}