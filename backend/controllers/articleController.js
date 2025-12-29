import Article from "../models/Article";

export const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error fetching articles:", error);
    }
}

export const createArticle = async (req, res) => {
    try {
        const article = await Article.create(req.body);
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error("Error creating article:", error);
    }
}