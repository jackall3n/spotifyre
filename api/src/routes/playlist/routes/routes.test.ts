import express, {Router} from "express";
import request from "supertest";
import {applyMiddleware, applyRoutes} from "../../../utils";
import middleware from "../../../middleware";
import errorHandlers from "../../../middleware/errorHandlers";
import routes from "./routes";

import axios from 'axios';
import MockAxiosAdapter from 'axios-mock-adapter';

const AxiosMock = new MockAxiosAdapter(axios);

describe("Playlists", () => {
    let router: Router;

    beforeEach(() => {
        router = express();

        applyMiddleware(middleware, router);
        applyRoutes(routes, router);
        applyMiddleware(errorHandlers, router);
    });

    AxiosMock.onPost('/token').reply(200, {
        access_token: 1
    });

    test("should require a valid string query", async () => {
        const playlistId = 'test';

        AxiosMock.onGet(`/playlists/${playlistId}`).reply(200, {});

        const response = await request(router).get(`/api/v1/playlist?id=${playlistId}`);

        expect(response.status).toEqual(200);
    });

    test("handle a non-existing api method", async () => {
        const response = await request(router).get("/api/v11/search");
        expect(response.status).toEqual(404);
    });

    test("handle an empty id string", async () => {
        const response = await request(router).get("/api/v1/playlist?id=");
        expect(response.status).toEqual(400);
    });

    test("should normalize the data", async () => {
        const id = 'test';

        AxiosMock.onGet(`/playlists/${id}`).reply(200, {
            id,
            tracks: {
                items: [{
                    track: {
                        id: 'track-id',
                        album: {
                            id: 'album-id'
                        },
                    }
                }]
            },
            owner: {
                id: 'owner-id'
            }
        });

        const response = await request(router).get(`/api/v1/playlist?id=${id}`);

        expect(response.body).toEqual({
            playlist: {
                id,
                owner: "owner-id",
                tracks: {
                    items: [{
                        track: 'track-id'
                    }]
                }
            },
            albums: {
                'album-id': {
                    id: 'album-id'
                }

            },
            tracks: {
                'track-id': {
                    id: 'track-id',
                    album: 'album-id'
                }
            },
            users: {
                'owner-id': {
                    id: 'owner-id'
                }
            }
        });
    });
});
