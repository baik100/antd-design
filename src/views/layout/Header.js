import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Action from "../../redux/action";
import { Menu, Icon } from 'antd';
import {HISTORY, navigate} from "../../helpers/HistoryHelper";
import {withRouter} from "react-router-dom";
const { SubMenu } = Menu;

const Container = styled.div`

`;

function Header (props) {
    
    const {
        dispatch,
        location,
    } = props;
    
    const handleMenu = (e) => {
        console.log("@@ e", e);
        navigate(e.item.props.to);
    };
    
    return (
        
        <Container>

            <Menu mode="horizontal"
                  selectedKeys={[location.pathname]}
                  onClick={handleMenu}>

                <Menu.Item key="/" to={'/'}>
                    Home
                </Menu.Item>

                <Menu.Item key="/quake" to={'/quake'}>
                    Quake
                </Menu.Item>

            </Menu>
        </Container>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(withRouter(Header));