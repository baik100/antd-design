import React from 'react';
import styled from 'styled-components';
import Header from "./views/layout/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/home";
import Quake from "./views/pages/quake";

const Container = styled.div`

`;

function App (props) {

    
    return (
        
        <Container>
            <Header/>

            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/quake'} component={Quake}/>
            </Switch>
        </Container>
    )
}

export default App;