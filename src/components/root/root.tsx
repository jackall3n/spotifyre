import React from 'react';
import {Account, Links, Main, Navigation, Playlists, RootContainer, Title} from "./styled";
import {NavigationConsumer, NavigationProvider} from "../providers/navigation-provider";

export const Root: React.FunctionComponent = ({children}: any) => {

    return (
        <NavigationProvider>
            <RootContainer>
                <NavigationConsumer>
                    {({links}: any) => (
                        <Navigation>
                            <Title>Spotifyre</Title>
                            <Links>
                                {links.map((link: any, index: any) => (
                                    <div key={index}>{link.name}</div>
                                ))}
                            </Links>
                            <Playlists/>
                            <Account/>
                        </Navigation>
                    )}
                </NavigationConsumer>
                <Main>{children}</Main>
            </RootContainer>
        </NavigationProvider>
    )
};

