import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Action from "../../redux/action";

const Container = styled.div`

`;

function Header (props) {
    
    const {
        dispatch,
    } = props;
    
    console.log("@@ props", props);
    
    return (
        
        <Container onClick={()=> dispatch(Action.Creators.updateState)}>
            Header
        </Container>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Header);