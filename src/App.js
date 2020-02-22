import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Home, Map, Agenda, Ticket, Artists, News } from './screens'
import Menu from './components/Menu'

const App = () => {
    return (
        <ThemeProvider theme={{ mode: 'default' }}>
            <Menu />
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

export default App
