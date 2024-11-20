import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto 1",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Uma foto 2",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Uma foto 3",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Uma foto 4",
        imagem: "https://placecats.com/millie/300/150"
    },
    {id: 5, descricao: "Uma foto 5", imagem: "https://placecats.com/millie/300/150"}
]

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(Id){
    return posts.findIndex((post) => {
        return post.id === Number(Id);
    });
}
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});
