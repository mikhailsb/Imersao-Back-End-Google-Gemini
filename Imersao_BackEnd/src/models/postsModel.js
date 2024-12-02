import "dotenv/config";
import MongoClient from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// **Conecta-se ao banco de dados utilizando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO.**
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// **Função assíncrona que retorna todos os posts de uma coleção específica do banco de dados.**
export async function getTodosPosts(){
    // **Obtém o banco de dados 'imersao_instabytes' e a coleção 'posts'.**
    const db = conexao.db("imersao_instabytes");
    const colecao = db.collection("posts");
    // **Executa a consulta e retorna um array com todos os documentos da coleção.**
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao_instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost){
    const db = conexao.db("imersao_instabytes");
    const colecao = db.collection("posts");
    
    try{
        
        //console.log(id);
        const objId = MongoClient.ObjectId.createFromHexString(id);
        //console.log(objId);
        return colecao.updateOne({_id: new MongoClient.ObjectId(objId)}, {$set:novoPost});
    } catch(error){
        console.error("Erro na função atualizarPost: " + error.message);
    }
}
