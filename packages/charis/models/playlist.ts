export interface IPlaylistImage {
    url: string;
}

export interface IPlaylistTrack<TTrack = string> {
    track: TTrack;
}

export interface IPlaylistTracks<TTrack = string> {
    items: IPlaylistTrack<TTrack>[]
}

export interface IPlaylist<TTrack = string> {
    name: string;
    description: string;
    images: IPlaylistImage[];
    tracks: IPlaylistTracks<TTrack>;
    owner: string;
}
