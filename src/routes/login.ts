import { Request, Router, Response, NextFunction } from "express";
import passport from "passport";

import { Strategy } from "../strategies/types";
import { Routers } from "./types";
import { getAuthCallbackRoute, getAuthRoute } from "./utils";

export const loginCallback = (_request: Request, response: Response) =>
  response.redirect(Routers.root);

export const getLoginMiddleware = (strategy: Strategy) => (
  request: Request,
  response: Response,
  next: NextFunction
) =>
  passport.authenticate(strategy.name, strategy.scopeContainer)(
    request,
    response,
    next
  );

export const initLoginCallbackRoute = (router: Router, strategy: Strategy) => {
  const route = getAuthCallbackRoute(strategy.name);
  const passportMiddleware = passport.authenticate(strategy.name);

  router.get(route, passportMiddleware, loginCallback);
};

export const initLoginRoute = (router: Router, strategy: Strategy) => {
  const loginMiddleware = getLoginMiddleware(strategy);
  const route = getAuthRoute(strategy.name);

  router.get(route, loginMiddleware);
};
