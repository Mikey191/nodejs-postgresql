const db = require("../db");

class PostController {
  async createPost(req, res) {
    const { title, content, user_id } = req.body;
    const newPost = await db.query(
      "insert into post (title, content, user_id) values ($1, $2, $3) returning *",
      [title, content, user_id]
    );
    res.json(newPost.rows[0]);
  }
  async getPostByUser(req, res) {
    const id = req.params.id;
    const postsById = await db.query("select * from post where user_id = $1", [id]);
    res.json(postsById.rows);
  }
}

module.exports = new PostController();
