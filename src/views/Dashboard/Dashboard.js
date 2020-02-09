import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import DataGraph from "components/dataGraph.js"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomTabs
            title="Time Frame:"
            headerColor="success"
            tabs={[
              {
                tabName: "Hour",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'temp'
                      plantValue = { 50 }
                      timeFrame = 'hour'
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "Day",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'temp'
                      plantValue = { 50 }
                      timeFrame = 'day'
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last Day</h4>
                  </div>
                )
              },
              {
                tabName: "Week",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'temp'
                      plantValue = { 50 }
                      timeFrame = 'week'
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last Week</h4>
                  </div>
                )
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomTabs
            title="Time Frame:"
            headerColor="warning"
            tabs={[
              {
                tabName: "Hour",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'humidity'
                      plantValue = { 50 }
                      timeFrame = 'hour'
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "Day",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'humidity'
                      plantValue = { 50 }
                      timeFrame = 'day'
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last Day</h4>
                  </div>
                )
              },
              {
                tabName: "Week",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'humidity'
                      plantValue = { 50 }
                      timeFrame = 'week'
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last Week</h4>
                  </div>
                )
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomTabs
            title="Time Frame:"
            headerColor="danger"
            tabs={[
              {
                tabName: "Hour",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'light'
                      plantValue = { 50 }
                      timeFrame = 'hour'
                    />
                    <h4 className={classes.cardTitle}>Light Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "Day",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'light'
                      plantValue = { 50 }
                      timeFrame = 'day'
                    />
                    <h4 className={classes.cardTitle}>Light Over Last Day</h4>
                  </div>
                )
              },
              {
                tabName: "Week",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'light'
                      plantValue = { 50 }
                      timeFrame = 'week'
                    /> 
                    <h4 className={classes.cardTitle}>Light Over Last Week</h4>
                  </div>
                )
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
