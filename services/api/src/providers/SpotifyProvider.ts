import axios, {AxiosRequestConfig} from "axios";
import dotenv from "dotenv";
import queryString from 'query-string';

dotenv.config();

const SPOTIFY_ACCOUNTS_BASE_URL = 'https://accounts.spotify.com';
const SPOTIFY_ACCOUNTS_AUTH_URL = `${SPOTIFY_ACCOUNTS_BASE_URL}/authorize`;
const SPOTIFY_ACCOUNTS_API_URL = `${SPOTIFY_ACCOUNTS_BASE_URL}/api`;

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';
const SPOTIFY_TRACKS_URL = `${SPOTIFY_API_BASE_URL}/tracks`;
const SPOTIFY_PLAYLISTS_URL = `${SPOTIFY_API_BASE_URL}/playlists`;

const REDIRECT_URI = `http://localhost:3000/api/v1/authorize`;

export const getTrack = async (trackId: string) => {
    const {access_token} = await getClientCredentials();
    const response = await axios.get(SPOTIFY_TRACKS_URL + '/' + trackId, {
        headers: {
            Authorization: `Bearer ${access_token}`
        },
    });

    return response.data;
};

export const getPlaylist = async (playlistId: string) => {
    const {access_token} = await getClientCredentials();

    const {data} = await axios({
        method: "GET",
        baseURL: SPOTIFY_API_BASE_URL,
        url: `/playlists/${playlistId}`,
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    return data;
};

export const getAuthRedirect = () => {
    const query = queryString.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        redirect_uri: REDIRECT_URI
    });

    return `${SPOTIFY_ACCOUNTS_AUTH_URL}?${query}`;
};

export const getRefreshToken = async (code: string) => {
    const body = {
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code
    };

    const url = `${SPOTIFY_ACCOUNTS_API_URL}/token`;

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    const response = await axios.post(url, queryString.stringify(body), {
        auth: {
            username: clientId!,
            password: clientSecret!
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    });

    return response.data;
};

export const getClientCredentials = async () => {
    const clientId = process.env.SPOTIFY_CLIENT_ID!;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;

    const configuration: AxiosRequestConfig = {
        method: 'POST',
        url: '/token',
        baseURL: SPOTIFY_ACCOUNTS_API_URL,
        auth: {
            username: clientId,
            password: clientSecret
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: queryString.stringify({
            grant_type: 'client_credentials'
        })
    };

    try {
        const {data} = await axios(configuration);

        return data;
    } catch (e) {
        console.log(e.response.data);
    }

    return {
        success: false
    };
};
