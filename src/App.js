import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Home, Map, Events, Ticket, Artists, News, Event } from './screens'
import Burger from './components/Burger'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: purple;
    opacity: 0.3;
    position: absolute;
    top: 0;
    z-index: 1;
`

const MenuLink = styled(Link)`
    color: white;
    font-weight: bold;
    text-decoration: ${({ to }) =>
        to === useLocation().pathname ? 'underline' : 'none'};
`

class App extends React.Component {
    state = {
        isNavDisplayed: false,
    }

    _toggleNav = () => {
        this.setState(({ isNavDisplayed }) => ({
            isNavDisplayed: !isNavDisplayed,
        }))
    }

    render() {
        const { isNavDisplayed } = this.state
        return (
            <ThemeProvider theme={{ mode: 'default' }}>
                <Burger onToggle={this._toggleNav} />

                {isNavDisplayed && (
                    <Nav>
                        <MenuLink to="/">Home</MenuLink>
                        <MenuLink to="/map">Map</MenuLink>
                        <MenuLink to="/news">News</MenuLink>
                        <MenuLink to="/events">Events</MenuLink>
                        <MenuLink to="/ticket">Ticket</MenuLink>
                        <MenuLink to="/artists">Artists</MenuLink>
                    </Nav>
                )}

                <Switch>
                    <Route path="/map" component={Map} />
                    <Route path="/news" component={News} />
                    <Route path="/events" component={Events} />
                    <Route path="/event/:id" component={Event} />
                    <Route path="/ticket" component={Ticket} />
                    <Route path="/artists" component={Artists} />
                    <Route path="/" component={Home} />
                </Switch>
            </ThemeProvider>
        )
    }
}

export default App
