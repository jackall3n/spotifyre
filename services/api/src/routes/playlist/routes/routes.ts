import {Request, Response} from "express";
import {getPlaylistById} from "../controllers/PlaylistController";
import {checkIdParam} from "../../../middleware/check";

export default [
    {
        path: "/api/v1/playlist/:id",
        method: "get",
        handler: [
            async ({params}: Request, res: Response) => {
                const result = await getPlaylistById(params.id);

                res.status(200).send(result);
            }
        ]
    }
];
