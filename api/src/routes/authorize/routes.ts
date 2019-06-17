import {Request, Response} from "express";
import * as SpotifyProvider from '../../providers/SpotifyProvider';

export default [
    {
        path: "/api/v1/authorize",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                const {code} = query;
                const response = await SpotifyProvider.getRefreshToken(code);

                res.send({code, response});
            }
        ]
    },{
        path: "/api/v1/authorize/client",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                const response = await SpotifyProvider.getClientCredentials();

                res.send(response);
            }
        ]
    },
    {
        path: "/api/v1/authorize/redirect",
        method: "get",
        handler: [
            async (req: Request, res: Response) => {
                const url = SpotifyProvider.getAuthRedirect();

                res.redirect(url);
            }
        ]
    }
];
