import {Request, Response} from "express";
import {getPlaylistById} from "../controllers/PlaylistController";
import {checkIdParam} from "../../../middleware/check";

export default [
    {
        path: "/api/v1/playlist",
        method: "get",
        handler: [
            checkIdParam,
            async ({query}: Request, res: Response) => {
                const result = await getPlaylistById(query.id);

                res.status(200).send(result);
            }
        ]
    }
];
