import {NextFunction, Request, RequestHandler, Response, Router} from "express";

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (
    middlewareWrappers: Wrapper[],
    router: Router
) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};

type Route = {
    path: string;
    method: string;
    handler: RequestHandler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
    for (const route of routes) {
        const {method, path, handler: handlers} = route;

        (router as any)[method](path, handlers.map(handler => {
            return (request: Request, response: Response, next: NextFunction) => {
                Promise.resolve(handler(request, response, next)).catch(next);
            }
        }));
    }
};
