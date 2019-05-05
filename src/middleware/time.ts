import { Request, Response, NextFunction } from 'express'

export const time = (req: Request, res: Response, next: NextFunction) => {
  console.log(new Date().toLocaleTimeString())
  next()
}

