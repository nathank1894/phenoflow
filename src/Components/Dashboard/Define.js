/** @format */

import React, { useState, useEffect } from "react";
// import PieChart from "../common/PieCharts";
// import CustomBarChart from "../common/BarChart";
import {
    Box,

    Grid,
    makeStyles,
    Typography,
    Paper
} from "@material-ui/core";
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button, InputGroup, FormControl,Form } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";

import { compose } from "redux";


const Styles = (theme) => ({
    root: {
        flexGrow: 1,
        color: "rgba(0, 0, 0, 0.54)",
    },
    root1: {
        minWidth: 275,
    },
    internal: {
        backGroundColor: "#FFFFFF",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Define(props) {
    const { classes } = props;

    return (
        <Container >

            <Col md={12}>

                <Paper elevation={3} style={{ padding: '5%', margin: '5%',backgroundColor:'gray' }}>
                    <Row >

                        <h4>Input</h4>

                        {/* <Col md={{ span: 6, offset: 3 }} >

                            <video
                                // controls 
                                autoPlay
                                src={'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'}
                                style={{
                                    margin: '30px',
                                    width: '500px'
                                }} />

                        </Col> */}


                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Describe</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Row>


                </Paper>

                <Paper elevation={3} style={{ padding: '5%', margin: '5%', backgroundColor:'yellowgreen' }}>
                    <Row >

                        <h4>Step</h4>

                        {/* <Col md={{ span: 6, offset: 3 }} >

                            <video
                                // controls 
                                autoPlay
                                src={'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'}
                                style={{
                                    margin: '30px',
                                    width: '500px'
                                }} />

                        </Col> */}


                    </Row>
                    <Row>
                        <Col md={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Describe</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" />
                            </Form.Group>
                        </Col>

                    </Row>


                </Paper>

                <Paper elevation={3} style={{ padding: '5%', margin: '5%' , backgroundColor:'green'}}>
                    <Row >

                        <h4>Output</h4>

                        {/* <Col md={{ span: 6, offset: 3 }} >

                            <video
                                // controls 
                                autoPlay
                                src={'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'}
                                style={{
                                    margin: '30px',
                                    width: '500px'
                                }} />

                        </Col> */}


                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Describe</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Extension</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Row>


                </Paper>

            </Col>


        </Container>
    );
}


export default compose(
    withStyles(Styles)
)(Define);
