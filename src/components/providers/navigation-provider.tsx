import React from 'react';

const NavigationContext = React.createContext({});

export const NavigationConsumer = NavigationContext.Consumer;

export class NavigationProvider extends React.Component {
    setLinks = (links: any) => {
        this.setState(state => ({
            ...state,
            links
        }))
    };

    state = {
        links: [],
        setLinks: this.setLinks
    };

    render() {
        return (
            <NavigationContext.Provider value={this.state}>
                {this.props.children}
            </NavigationContext.Provider>
        )
    }
}
