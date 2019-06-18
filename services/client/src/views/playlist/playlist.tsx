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

export const Playlist: React.FunctionComponent = ({match}: any) => {
    const [playlist, setPlaylist] = useState<any>();
    const [tracks, setTracks] = useState<any>();
    const [artists, setArtists] = useState<any>();
    const [ready, setReady] = useState<boolean>(false);


    useEffect(() => {
        const id = match.params.id;

        if (!id) {
            return;
        }

        fetch(`http://localhost:3001/api/v1/playlist/${id}`).then(
            async response => {
                if (!response.ok) {
                    return
                }

                const playlist_data = await response.json();
                setPlaylist(playlist_data.playlist);
                setTracks(playlist_data.tracks);
                setArtists(playlist_data.users);
                setReady(true);
            }
        )
    }, [match.params.id]);

    if (!ready) {
        return <div/>;
    }

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
                    <PlaylistOwner>By {artists[playlist.owner].display_name}</PlaylistOwner>
                    <PlaylistDescription>{playlist.description}</PlaylistDescription>
                    <PlaylistControls>
                        <FollowButton>ADD</FollowButton>
                        <EditButton>EDIT</EditButton>
                    </PlaylistControls>
                </PlaylistOverview>
            </PlaylistHeader>
            <PlaylistMain>
                <Tracks>
                    {playlist.tracks.items.map((trackItem: any) => {
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
