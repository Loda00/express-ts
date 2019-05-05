import { Router} from 'express'
const router = Router()

import { Index } from '../controller/index.controller'

router.route('/').get(Index)

export default router
