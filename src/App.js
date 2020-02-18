import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Home, About, Agenda, Ticket, Artist, News } from './screens'

export default function App() {
    return (
        <ThemeProvider theme={{ mode: 'default' }}>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
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
                        <Artist />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
