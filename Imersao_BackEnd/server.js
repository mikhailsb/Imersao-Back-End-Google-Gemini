import express from "express";
import routes from "./src/routes/postsRoutes.js";

// **Array de posts utilizado para fins de demonstração (substituído pela consulta ao banco de dados).**
// const posts = [
//     {id: 1,descricao: "Uma foto 1",imagem: "https://placecats.com/millie/300/150"},
//     {id: 2,descricao: "Uma foto 2",imagem: "https://placecats.com/300/150"},
//     {id: 3,descricao: "Uma foto 3",imagem: "https://placecats.com/millie/300/150"},
//     {id: 4,descricao: "descricao: "Uma foto 4",imagem: "https://placecats.com/millie/300/150"},
//     {id: 5, descricao: "Uma foto 5", imagem: "https://placecats.com/millie/300/150"}
// ]

// **Cria uma instância do Express**
const app = express();
app.use(express.static("uploads"));
routes(app);

// **Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.**
app.listen(3000, () => {
    console.log("Servidor escutando...");
});


// function buscarPostPorID(Id){
//     return posts.findIndex((post) => {
//         return post.id === Number(Id);
//     });
// }
// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id);
//     res.status(200).json(posts[index]);
// });
