import {
  addPostQuery,
  getPostsQuery,
  addLikeQuery,
} from "../models/queries.js";

const addPost = async (req, res) => {
  try {
    const { usuario, URL, descripcion } = req.body;
    const result = await addPostQuery(usuario, URL, descripcion);
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

const addLike = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await addLikeQuery(id);
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

const getPosts = async (req, res) => {
  try {
    const result = await getPostsQuery();
    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
  }
};

export { addPost, addLike, getPosts };
