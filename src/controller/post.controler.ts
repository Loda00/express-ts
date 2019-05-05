import { Request, Response } from 'express'
import { connect } from '../connection'
import { Post } from '../interface/post.interface'

export const getPosts = async (req: Request, res: Response): Promise<Response> => {
  const con = await connect()
  const data = await con.query('select * from posts')
  if (!data) {
    return res.status(403).json({
      ok: false,
      error: data,
    })
  }
  
  return res.status(200).json({
    ok: true,
    data: data[0],
  })
}

export const createPost = async (req: Request, res: Response) => {
  const body: Post = req.body
  const con = await connect()
  con.query('insert into posts SET ?', [body])
  if (!body) {
    return res.status(403).json({
      ok: false,
      error: body,
    })
  }
  res.status(200).json({
    ok: true,
    result: 'Post created'
  })
}

export const getPost = async (req: Request, res: Response) => {
  const id = req.params.id
  const con = await connect()
  const data = await con.query(`select * from posts where id = ${id}`)
  res.json({
    ok: true,
    data: data[0]
  })
}

export async function deletePost(req: Request, res: Response) {
  const id = req.params.id;
  const conn = await connect();
  await conn.query('DELETE FROM posts WHERE id = ?', [id]);
  res.json({
      message: 'Post deleted'
  });
}

export async function updatePost(req: Request, res: Response) {
  const id = req.params.id;
  const updatePost: Post = req.body;
  const conn = await connect();
  await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
  res.json({
      message: 'Post Updated'
  });
}