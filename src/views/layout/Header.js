import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Action from "../../redux/action";
import { Menu, Icon } from 'antd';
import {navigate} from "../../helpers/HistoryHelper";
const { SubMenu } = Menu;

const Container = styled.div`

`;

function Header (props) {
    
    const {
        dispatch,
    } = props;
    
    const handleMenu = (e) => {
        console.log("@@ e", e);
        navigate(e.item.props.to);
    };
    
    return (
        
        <Container>

            <Menu mode="horizontal"
                  selectedKeys={['']}
                  onClick={handleMenu}>

                <Menu.Item key="home" to={'/'}>
                    Home
                </Menu.Item>

                <Menu.Item key="quake" to={'/quake'}>
                    Quake
                </Menu.Item>

            </Menu>
        </Container>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Header);