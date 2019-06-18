import styled from "styled-components";

export const PlaylistContainer = styled.div`
  display: grid;
  grid-template-areas: 'playlist-header' 'playlist-main';
  grid-template-rows: auto 1fr;
  position: relative;
  background-image: linear-gradient(to right bottom, rgb(48, 46, 45), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%);
   padding: 2rem;
   overflow: auto;
   height: 100vh;
`;

export const PlaylistBackground = styled<any>('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background-image: url("${props => props.image}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(100px);
  -webkit-filter: blur(100px);
  z-index: 0;
`;

export const PlaylistHeader = styled.div`
  grid-area: playlist-header;
  display: grid;
  grid-template-areas: 'playlist-artwork playlist-overview';
  grid-gap: 2rem;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  padding: 0 0 2rem;
  border-bottom: 1px solid #ffffff1f;
`;

export const PlaylistOverview = styled.div`
  grid-area: playlist-overview;
`;

export const PlaylistTitle = styled.h2`
  grid-area: playlist-title;
  margin: 0 0 0.3rem;
`;

export const PlaylistOwner = styled.div`
  grid-area: playlist-owner;
  margin: 0 0 1rem;
    font-size: 0.8rem;
`;

export const PlaylistDescription = styled.div`
  margin: 0 0 1rem;
    font-size: 0.8rem;
`;

export const PlaylistArtwork = styled.img`
  grid-area: playlist-artwork;
  height: 10rem;
  box-shadow: 0 2px 3px #0000005c;
`;

export const PlaylistControls = styled.div`
  grid-area: playlist-controls;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, minmax(auto, 130px));
  grid-auto-flow: column;
`;

export const Button = styled.button`
    border-radius: 100px;
    padding: 10px 15px;
    background: #2589b3;
    border: 0;
    font-size: 13px;
    color: white;
    min-width: 130px;
    box-shadow: 0 5px 8px 2px #00000045;
`;

export const SecondaryButton = styled(Button)`
  background: rgba(0,0,0,0.4);
    border: 2px solid #ffffffa8;
  color: #2ba6d6;
`

export const FollowButton = styled(Button)`
`;

export const EditButton = styled(SecondaryButton)`
`;

export const PlaylistMain = styled.div`
  grid-area: playlist-main;
  z-index: 1;
  padding: 0 1.5rem;
`;

export const Tracks = styled.div`
  padding: 2rem 0;
`;

export const Track = styled.div`
   padding-bottom: 1rem;
`;

export const TrackTitle = styled.div``;
export const TrackArtists = styled.div`
  font-size: 13px;
  color: #979797;
  padding-top: 0.2em;
`;
