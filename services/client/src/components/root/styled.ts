import styled from 'styled-components'
import {theme} from "../theme";

export const RootContainer = styled.div`
    display: grid;
    grid-template-areas: 'navigation main';
    grid-template-columns: 230px auto;
    min-height: 100vh;
    height: 100vh;
`;

export const Main = styled.main`
  grid-area: main;
  max-height: 100vh;
`;

export const Navigation = styled.nav`
  grid-area: navigation;
  display: grid;
  grid-template-areas: 'title' 'links' 'playlists' 'account';
  grid-template-rows: auto auto 1fr auto;
  background: ${theme.bg};
  color: white;
`;

export const Title = styled.h1`
  grid-area: title;
  text-align: center;
`;

export const Links = styled.div`
  grid-area: links;
`;

export const Playlists = styled.div`
  grid-area: playlists;
`;

export const Account = styled.div`
  grid-area: account;
`;

