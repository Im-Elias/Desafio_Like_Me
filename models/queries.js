import pool from "../config/db.config.js";

const addPostQuery = async (usuario, url, descripcion) => {
  try {
    const query = {
      text: "INSERT INTO posts (usuario, url, descripcion) VALUES ($1, $2, $3) RETURNING *",
      values: [usuario, url, descripcion],
    };
    const result = await pool.query(query);
    if (result.rowCount > 0) {
      console.log("Post añadido correctamente");
      return result;
    } else {
      console.log("Error al añadir post");
    }
  } catch (error) {
    console.log("Error: " + error.code + "/nMensaje: " + error.message);
  }
};

const addLikeQuery = async (id) => {
  try {
    const query = {
      text: "UPDATE posts SET likes = likes + 1 WHERE id = $1",
      values: [id],
    };
    const result = await pool.query(query);
    if (result.rowCount > 0) {
      console.log("Like añadido correctamente");
      return result;
    } else {
      console.log("Error al añadir like");
    }
  } catch (error) {
    console.log("Error: " + error.code + "/nMensaje: " + error.message);
  }
};

const getPostsQuery = async () => {
  try {
    const query = { text: "SELECT * FROM posts" };
    const result = await pool.query(query);
    if (result.rowCount > 0) {
      console.log("Posts obtenidos correctamente");
      return result;
    }
  } catch (error) {
    console.log("Error: " + error.code + "/nMensaje: " + error.message);
  }
};

export { addPostQuery, addLikeQuery, getPostsQuery };
