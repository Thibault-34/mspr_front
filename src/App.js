import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

import {
    Home,
    Map,
    Events,
    Ticket,
    Artists,
    News,
    Event,
    FAQ,
    Sponsors,
    Infos,
} from './screens'
import Burger from './components/Burger'
import Text from './components/Text'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { BACKGROUND_COLOR } from './constants/theme'

import { fetchDataWithRedux } from './redux/actions'
import Image from './components/Image'

const Nav = styled.nav`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: purple;
    opacity: 0.8;
    position: absolute;
    top: 0;
    z-index: 1;
`

const MenuLink = styled(Link)`
    color: white;
    font-weight: bold;
    margin: 5px 0;
    text-decoration: ${({ to }) =>
        to === useLocation().pathname ? 'underline' : 'none'};
`

const Push = styled.div`
    background-color: ${BACKGROUND_COLOR};
`

class App extends React.Component {
    state = {
        isNavDisplayed: false,
        isPushDisplayed: true,
    }

    componentDidMount = () => {
        const { fetchDataWithRedux } = this.props
        fetchDataWithRedux()
    }

    _toggleNav = () => {
        this.setState(({ isNavDisplayed }) => ({
            isNavDisplayed: !isNavDisplayed,
        }))
    }

    render() {
        const { isNavDisplayed, isPushDisplayed } = this.state
        const { push } = this.props
        return (
            <ThemeProvider theme={{ mode: 'default' }}>
                {push && isPushDisplayed && (
                    <Push backgroundColor="fifth">
                        <Text
                            onClick={() => {
                                this.setState(({ isPushDisplayed }) => ({
                                    isPushDisplayed: !isPushDisplayed,
                                }))
                            }}
                            style={{ position: 'absolute', right: 10, top: 10 }}
                            fontWeight="bold"
                            fontColor="secondary"
                        >
                            X
                        </Text>
                        <Text style={{ padding: 15 }} fontColor="secondary">
                            {push}
                        </Text>
                    </Push>
                )}
                <Burger onToggle={this._toggleNav} />

                {isNavDisplayed && (
                    <Nav>
                        <MenuLink to="/">Home</MenuLink>
                        <MenuLink to="/map">Map</MenuLink>
                        <MenuLink to="/news">News</MenuLink>
                        <MenuLink to="/events">Events</MenuLink>
                        <MenuLink to="/ticket">Ticket</MenuLink>
                        <MenuLink to="/artists">Artists</MenuLink>
                        <MenuLink to="/faq">FAQ</MenuLink>
                        <MenuLink to="/sponsors">Partenaires</MenuLink>
                        <MenuLink to="/infos">Informations générales</MenuLink>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: '20px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <a href="https://facebook.fr">
                                <Image
                                    style={{ padding: '5px' }}
                                    src={require('./assets/images/icons/facebook.png')}
                                ></Image>
                            </a>
                            <a href="https://instagram.fr">
                                <Image
                                    style={{ padding: '5px' }}
                                    src={require('./assets/images/icons/instagram.png')}
                                ></Image>
                            </a>
                            <a href="https://twitter.fr">
                                <Image
                                    style={{ padding: '5px' }}
                                    src={require('./assets/images/icons/twitter.png')}
                                ></Image>
                            </a>
                        </div>
                    </Nav>
                )}

                <Switch>
                    <Route path="/map" component={Map} />
                    <Route path="/news" component={News} />
                    <Route path="/event/:id" component={Event} />
                    <Route path="/ticket" component={Ticket} />
                    <Route path="/artists" component={Artists} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/sponsors" component={Sponsors} />
                    <Route path="/infos" component={Infos} />
                    <Route path="/" component={Events} />
                </Switch>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => {
    const { pushes } = state.data
    const push = pushes && pushes[0] && pushes[0].content
    return {
        push: push,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataWithRedux: () => dispatch(fetchDataWithRedux()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
