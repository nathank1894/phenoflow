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
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button, Table } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';

import { compose } from "redux";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


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

function Dashboard(props) {
    const { classes } = props;
    const [webdisplaymodel, showwebdisplaymodel] = useState(false);
    const [modaltitle, setmodaltitle] = useState("");

    return (
        <>
            <Container fluid>
                <Paper elevation={3} style={{ padding: '5%' }}>
                    <Table responsive style={{ fontWeight: 'bolder' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#254B55', color: 'white' }}>
                                <th>#</th>
                                <th>Name</th>
                                <th>Id</th>
                                <th>Description</th>
                                <th>View Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Abdominal-aortic-aneurysm</td>
                                <td>NJ2gf6ZTTxjayMcK5ksHXf </td>
                                <td>Abdominal aortic aneurysm</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Abdominal-aortic-aneurysm")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Abdominal-Hernia</td>
                                <td>UmxTP7n8pMNA9ykfrhp5hZ  </td>
                                <td>Abdominal Hernia</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Abdominal-Hernia")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Acne</td>
                                <td>3tJXPBK43iqTqheoEebq7i  </td>
                                <td>Acne</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Acne")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Actinic-keratosis</td>
                                <td>HCMERysojt6MUQNpDVMW8V  </td>
                                <td>Actinic keratosis</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Actinic-keratosis")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Acute-Kidney-Injury</td>
                                <td>NRvedG2xDpPJt2oDQCADfG  </td>
                                <td>Acute Kidney Injury</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Acute-Kidney-Injury")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Agranulocytosis </td>
                                <td>n6BbN4xqnikRVdAqPZeCiV  </td>
                                <td>Agranulocytosis</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Agranulocytosis")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Alcohol-Consumption</td>
                                <td>7aXDiYMtSR6aYEkZKPBdvm  </td>
                                <td>Alcohol Consumption</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Alcohol-Consumption")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Alcohol-Problems </td>
                                <td>UxiyF5AcxtXNJZpNvwfYE4  </td>
                                <td> Alcohol Problems</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Alcohol-Problems")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Alcoholic-liver-disease</td>
                                <td>Dx2rRinjMdDgRFjZEJYUh7  </td>
                                <td>Alcoholic liver disease</td>
                                <td><Button style={{ backgroundColor: '#254B55', color: 'white' }} onClick={() => {
                                    setmodaltitle("Alcoholic-liver-disease")
                                    showwebdisplaymodel(true);

                                }}>View Details</Button></td>                            </tr>
                        </tbody>
                    </Table>
                </Paper>

            </Container >


            <Modal style={{ zIndex: '10000000' }}
                show={webdisplaymodel}
                centered
                size="xl"
                onHide={() => { showwebdisplaymodel(false) }}
            >
                <Modal.Header style={{ backgroundColor: "#50A3B9", color: "white" }}>

                    <Modal.Title style={{ textAlign: 'center' }}>
                        {modaltitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {/* For Partner  */}
                        <Container fluid>
                            <Col md={12}>
                                <Paper evaluation={3} style={{ marginTop: '2.5%', marginBottom: '2.5%', paddingTop: '2.5%', paddingBottom: '2.5%' }}>

                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold' }}>Step1 : Input Potential Cases of  {modaltitle}
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold', color: 'blue' }}>Read potential cases from disc
 </h4>
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <label>Programming Language<span style={{ color: "red" }}>*</span></label>
                                            <select className="form-control" name="subtype" >
                                                <option value="openLand">Python</option>
                                                <option value="ResidentialPlot">C++</option>

                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <h4 style={{ fontWeight: 'bold', color: 'green' }}>Output Initial potential cases, read from disc. (csv)</h4>

                                        </Col>
                                    </Row>

                                </Paper>

                                <Paper evaluation={3} style={{ marginTop: '2.5%', marginBottom: '2.5%', paddingTop: '2.5%', paddingBottom: '2.5%' }}>

                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold' }}>Step2 : Potential Cases of  {modaltitle}
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold', color: 'blue' }}>Read potential cases from disc
</h4>
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <label>Programming Language<span style={{ color: "red" }}>*</span></label>
                                            <select className="form-control" name="subtype" >
                                                <option value="openLand">Python</option>
                                                <option value="ResidentialPlot">C++</option>

                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <h4 style={{ fontWeight: 'bold', color: 'green' }}>OutputPatients with clinical codes indicating {modaltitle} related events in electronic health record. (csv)</h4>

                                        </Col>
                                    </Row>

                                </Paper>

                                <Paper evaluation={3} style={{ marginTop: '2.5%', marginBottom: '2.5%', paddingTop: '2.5%', paddingBottom: '2.5%' }}>

                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold' }}>Step3 : Input Potential Cases of  {modaltitle}
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold', color: 'blue' }}>Read potential cases from disc
 </h4>
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <label>Programming Language<span style={{ color: "red" }}>*</span></label>
                                            <select className="form-control" name="subtype" >
                                                <option value="openLand">Python</option>
                                                <option value="ResidentialPlot">C++</option>

                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <h4 style={{ fontWeight: 'bold', color: 'green' }}>OutputPatients with clinical codes indicating {modaltitle} related events in electronic health record. (csv)
</h4>

                                        </Col>
                                    </Row>

                                </Paper>
                                <Paper evaluation={3} style={{ marginTop: '2.5%', marginBottom: '2.5%', paddingTop: '2.5%', paddingBottom: '2.5%' }}>

                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold' }}>Step4 : Input Potential Cases of  {modaltitle}
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold', color: 'blue' }}>Read potential cases from disc
 </h4>
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <label>Programming Language<span style={{ color: "red" }}>*</span></label>
                                            <select className="form-control" name="subtype" >
                                                <option value="openLand">Python</option>
                                                <option value="ResidentialPlot">C++</option>

                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <h4 style={{ fontWeight: 'bold', color: 'green' }}>OutputPatients with clinical codes indicating {modaltitle} related events in electronic health record. (csv)
</h4>

                                        </Col>
                                    </Row>

                                </Paper>
                                <Paper evaluation={3} style={{ marginTop: '2.5%', marginBottom: '2.5%', paddingTop: '2.5%', paddingBottom: '2.5%' }}>

                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold' }}>Step5 : Input Potential Cases of  {modaltitle}
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold', color: 'blue' }}>Read potential cases from disc
 </h4>
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <label>Programming Language<span style={{ color: "red" }}>*</span></label>
                                            <select className="form-control" name="subtype" >
                                                <option value="openLand">Python</option>
                                                <option value="ResidentialPlot">C++</option>

                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <h4 style={{ fontWeight: 'bold', color: 'green' }}>OutputPatients with clinical codes indicating {modaltitle} related events in electronic health record. (csv)
</h4>

                                        </Col>
                                    </Row>

                                </Paper>

                                <Paper evaluation={3} style={{ marginTop: '2.5%', marginBottom: '2.5%', paddingTop: '2.5%', paddingBottom: '2.5%' }}>

                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold' }}>Step6 : Input Potential Cases of  {modaltitle}
                                            </h4>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col md={10} style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: 'bold', color: 'blue' }}>Read potential cases from disc
 </h4>
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <label>Programming Language<span style={{ color: "red" }}>*</span></label>
                                            <select className="form-control" name="subtype" >
                                                <option value="openLand">Python</option>
                                                <option value="ResidentialPlot">C++</option>

                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center" style={{ marginTop: '2.5%', marginBottom: '5%' }}>
                                        <Col md={8}>
                                            <h4 style={{ fontWeight: 'bold', color: 'green' }}>OutputOutput containing patients flagged as having this type of {modaltitle} (csv)</h4>

                                        </Col>
                                    </Row>

                                </Paper>


                            </Col>

                        </Container>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { showwebdisplaymodel(false) }}>
                        Close
           </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}


export default compose(
    withStyles(Styles)
)(Dashboard);