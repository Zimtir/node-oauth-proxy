import { Request, Response, Application } from 'express'

import { TARGET } from '../utils/environment'
import { proxify } from '../utils/proxy'
import { isAuth, isValid } from './middlewares/user'
import { Routers } from './types'

export const root = (request: Request, response: Response): void => proxify(request, response, TARGET)

export const initRootRoute = (router: Application): void => {
  router.use(Routers.root, isAuth, isValid, root)
}
