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
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";

import { compose } from "redux";
import { connect } from "react-redux";
import run from "../assets/image/run.png"
import view from "../assets/image/view.png"
import custom from "../assets/image/custom.png"
import define from "../assets/image/define.png"
import rungif from "../assets/image/run.gif"

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

  return (
    <Container >

      <Col md={12}>
        <Row className="justify-content-md-center">
          <Col md={{ span: 8, offset: 1 }} style={{ textAlign: 'justify' }}>
            <h2 >Portable, workflow-based phenotype definitions</h2>
          </Col>
        </Row>
        <Paper elevation={3} style={{ backgroundColor: '#254B55', marginBottom: '2.5%' }}>
          <Row >



            <Col md={{ span: 6, offset: 3 }} >

              <video
                // controls 
                autoPlay
                src={'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'}
                style={{
                  margin: '30px',
                  width: '500px'
                }} />

            </Col>


          </Row>

          <Row style={{ marginBottom: '2.5%' }} >
            <Col md={{ span: 6, offset: 5 }} >

              <Button variant="info" style={{ width: "200px" }}>VIEW AN EXAMPLE</Button>

            </Col>
          </Row>
        </Paper>
        <Row className="justify-content-md-center" style={{ marginTop: '5%', marginBottom: '2.5%' }}>
          <h4 style={{ color: '#254B55' }}>Our Trick achieve phenotype portability
</h4>
        </Row>
        <Row >
          <Col md={6} >
            <Paper elevation={3} style={{ marginBottom: '2.5%' }}>

              <img src={run} />
            </Paper>

          </Col>
          <Col md={6}>

            <p style={{ fontSize: '20px', marginTop: '25%' }} >Download and immediately execute a phenotype against a local dataset.</p>
          </Col>
        </Row>
        <Row >
          <Col md={6}>

            <p style={{ fontSize: '20px', marginTop: '25%' }} >Browse phenotypes represented in a standard format. 333 phenotypes are currently available</p>
          </Col>
          <Col md={6} >
            <Paper elevation={3} style={{ marginBottom: '2.5%' }}>

              <img src={view} />
            </Paper>

          </Col>

        </Row>

        <Row >
          <Col md={6} >
            <Paper elevation={3} style={{ marginBottom: '2.5%' }}>

              <img src={custom} />
            </Paper>

          </Col>
          <Col md={6}>

            <p style={{ fontSize: '20px', marginTop: '25%' }} >Find and customise existing phenotypes, for local requirements.
</p>
          </Col>
        </Row>
        <Row >
          <Col md={6}>

            <p style={{ fontSize: '20px', marginTop: '25%' }} >Graphically author new phenotypes.
</p>
          </Col>
          <Col md={6} >
            <Paper elevation={3} style={{ marginBottom: '2.5%' }}>

              <img src={define} />
            </Paper>

          </Col>

        </Row>
        <Paper elevation={3} style={{ marginBottom: '2.5%', backgroundColor: '#F2BB49', paddingTop: '3%', paddingBottom: '3%' }}>

          <Row style={{ display: 'block' }}>
            <Row className="justify-content-md-center">
              <img src={rungif} />

            </Row>
            <Row className="justify-content-md-center">
              <p style={{ fontSize: '18px', marginTop: '2%' }}>Phenotype execution only has two dependencies: cwltool and docker.

</p>
            </Row>


          </Row>
        </Paper>
        <Row className="justify-content-md-center" style={{ marginTop: '5%', marginBottom: '2.5%' }}>
          <h4 style={{ color: '#F2BB49' }}>        Why does phenotype portability matter?

</h4>
        </Row>


        <Row style={{marginBottom:'5%'}}>

          <Col md={4} >
            <Paper elevation={3} style={{ padding: '15%',height:'320px' }}>
              <Row>
                <h5 style={{ color: '#50A3B9' }}>Re-Use</h5>

              </Row>
              <Row>
                <p style={{ textAlign: 'justify' }}>
                  Re-defining phenotypes at new sites may lead to inconsistent definitions. Instead, we want to be able to port definitions between sites, as facilitated by Phenoflow. This is not to say a single gold standard algorithm is required for each disease, but instead different algorithms should be semantically interoperable. The level of abstraction provided by Phenoflow also ensures this.</p>
              </Row>
            </Paper>

          </Col>
          <Col md={4} >
            <Paper elevation={3} style={{ padding: '15%',height:'320px' }}>
              <Row>
                <h5 style={{ color: '#50A3B9' }}>Reproducibility</h5>

              </Row>
              <Row>
                <p style={{ textAlign: 'justify' }}>
                  With the extraction of phenotype cohorts now forming a key part of many research methodologies, the mechanism used to derive a cohort within a given study needs to be reusable in order to ensure reproducibility and thus incremental research. The reusable definitions hosted within Phenoflow enable this research.                  </p>
              </Row>
            </Paper>

          </Col>
          <Col md={4} >
            <Paper elevation={3} style={{ padding: '15%',height:'320px' }}>
              <Row>
                <h5 style={{ color: '#50A3B9' }}>Validation</h5>

              </Row>
              <Row>
                <p style={{ textAlign: 'justify' }}>
                  Trust in a phenotype definition is increased by validating it against multiple data sources, such as EHR repositories. By integrating with multiple data source formats, such as i2b2 and OMOP, Phenoflow enables this validation to take place.
                  </p>
              </Row>
            </Paper>

          </Col>
        </Row>
      </Col>


    </Container>
  );
}


export default compose(
  withStyles(Styles)
)(Dashboard);
