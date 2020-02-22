import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Home, Map, Agenda, Ticket, Artists, News } from './screens'
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
                    </Nav>
                )}

                <Switch>
                    <Route path="/map">
                        <Map />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/agenda">
                        <Agenda />
                    </Route>
                    <Route path="/ticket">
                        <Ticket />
                    </Route>
                    <Route path="/artist">
                        <Artists />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </ThemeProvider>
        )
    }
}

export default App
