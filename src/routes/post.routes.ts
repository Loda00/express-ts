import { Router } from 'express'
const router = Router()

import { getPosts, createPost, getPost, updatePost, deletePost } from '../controller/post.controler'

router.route('/')
  .get(getPosts)
  .post(createPost)

router
  .route('/:id')
  .get(getPost)
  .put(updatePost)
  .delete(deletePost)

export default router