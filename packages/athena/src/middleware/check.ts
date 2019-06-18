import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkIdParam = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.id) {
        throw new HTTP400Error("Missing id parameter");
    } else {
        next();
    }
};
