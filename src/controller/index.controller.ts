import { Request, Response } from 'express'

export const Index = (req: Request, res: Response): Response => {
    return res.status(200).send('Welcome to Typescript with node')
}
