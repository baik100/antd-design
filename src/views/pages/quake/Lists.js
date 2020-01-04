import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {ContentContainer} from "../../layout/Layout.Styled";
import {List} from 'antd';
import axios from "axios";
import Action from "../../../redux/action";

const Container = styled.div`

`;

const Item = styled.div`
      border-bottom: 1px solid #e8e8e8;
      padding: 12px 0;
`;

function Lists (props) {

    const {
        dispatch,
        quakeFeatures = [],
    } = props;
    
    console.log("@@ props", props);

    useEffect(() => {
        axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-12-24&endtime=2019-12-25')
            .then(res => {
                console.log("@@ res.data", res.data.features);
                dispatch(Action.Creators.updateState({quakeFeatures: res.data.features}))
            })

    }, []);

    return (

        <Container>
            <ContentContainer>
                <List
                    dataSource={quakeFeatures}
                    renderItem={(item) => (
                        <Item>
                            <div className="title">{item.properties.title}</div>
                            <div className="mag">{item.properties.mag}</div>
                            <div className="time">{item.properties.time}</div>
                            <div className="place">{item.properties.place}</div>
                            <div className="url">
                                <a href={item.properties.url} target="_blank" rel="noopener noreferrer">{item.properties.url}</a>
                            </div>
                        </Item>
                    )}

                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 10,
                        position: 'top',
                    }}
                />
            </ContentContainer>
        </Container>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Lists);