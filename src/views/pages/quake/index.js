import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";
import Lists from "./Lists";
import axios from 'axios';

const Container = styled.div`

`;

function Quake (props) {

    const {} = props;

    return (

        <Container>
            <Switch>
                <Route path={'/quake'} component={Lists}/>
            </Switch>
        </Container>
    )
}

export default Quake;