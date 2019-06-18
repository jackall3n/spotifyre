import React, {useEffect, useState} from 'react';
import Helmet from 'react-helmet';
import {
    EditButton,
    FollowButton,
    PlaylistArtwork,
    PlaylistBackground,
    PlaylistContainer,
    PlaylistControls,
    PlaylistDescription,
    PlaylistHeader,
    PlaylistMain,
    PlaylistOverview,
    PlaylistOwner,
    PlaylistTitle,
    Track,
    TrackArtists,
    Tracks,
    TrackTitle
} from "./styled";
import {NavigationConsumer} from "../../components/providers/navigation-provider";
import {IArtist, IPlaylist, ITrack, IUser} from "@spotifyre/charis/models";

interface IPlaylistState {
    playlist: IPlaylist;
    tracks: { [key: string]: ITrack };
    users: { [key: string]: IUser };
    artists: { [key: string]: IArtist };
}

export const Playlist: React.FunctionComponent = ({match}: any) => {
    const { id } = match.params;
    const [state, setState] = useState<IPlaylistState>();
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        if (!id) {
            return;
        }

        fetch(`http://localhost:3001/api/v1/playlist/${id}`).then(
            async response => {
                if (!response.ok) {
                    return
                }

                const playlist_data = await response.json();
                setState(playlist_data);
                setReady(true);
            }
        )
    }, [id]);

    if (!ready || !state) {
        return <div/>;
    }

    const {playlist, tracks, users, artists} = state;

    return (
        <PlaylistContainer>
            <Helmet>
                <title>{playlist.name} - Spotifyre</title>
            </Helmet>

            <PlaylistBackground image={playlist.images[0].url}/>

            <PlaylistHeader>
                <PlaylistArtwork src={playlist.images[0].url}/>
                <PlaylistOverview>
                    <PlaylistTitle>{playlist.name}</PlaylistTitle>
                    <PlaylistOwner>By {users[playlist.owner].display_name}</PlaylistOwner>
                    <PlaylistDescription>{playlist.description}</PlaylistDescription>
                    <PlaylistControls>
                        <FollowButton>ADD</FollowButton>
                        <EditButton>EDIT</EditButton>
                    </PlaylistControls>
                </PlaylistOverview>
            </PlaylistHeader>
            <PlaylistMain>
                <Tracks>
                    {playlist.tracks.items.map(trackItem => {
                        const track = tracks[trackItem.track];
                        const trackArtists = track.artists.map((artist: string) => artists[artist]);
                        const artistsName = trackArtists.map((a: any) => a.name).join(', ');

                        return (
                            <Track key={track.id}>
                                <TrackTitle>{track.name}</TrackTitle>
                                <TrackArtists>{artistsName}</TrackArtists>
                            </Track>
                        )
                    })}
                </Tracks>
            </PlaylistMain>
        </PlaylistContainer>
    )
};

export default (props: any) => (
    <NavigationConsumer>
        {({setLinks}: any) => (
            <Playlist {...props} setLinks={setLinks}/>
        )}
    </NavigationConsumer>
)
