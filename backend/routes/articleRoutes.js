import express from 'express';
import { createArticle } from '../controllers/articleController';
import { getAllArticles } from '../controllers/articleController';

const articleRouter = express.Router();

//Get all articles route
articleRouter.get('/', getAllArticles);


//post article route
articleRouter.post('/', createArticle);

export default articleRouter;

