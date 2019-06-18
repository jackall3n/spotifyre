import {Route} from "react-router";
import {Root} from "./components/root";
import React from "react";
import {Playlist} from "./views/playlist";

export const Routes = () => (
    <Root>
        <Route path='/playlist/:id' component={Playlist}/>
    </Root>
);
