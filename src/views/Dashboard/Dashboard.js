import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

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
                    <ChartistGraph
                      className="ct-chart"
                      data={dailySalesChart.data}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "Day",
                tabContent: (
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={dailySalesChart.data}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last Day</h4>
                  </div>
                )
              },
              {
                tabName: "Week",
                tabContent: (
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={dailySalesChart.data}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
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
                    <ChartistGraph
                      className="ct-chart"
                      data={emailsSubscriptionChart.data}
                      type="Line"
                      options={emailsSubscriptionChart.options}
                      listener={emailsSubscriptionChart.animation}
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "Day",
                tabContent: (
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={emailsSubscriptionChart.data}
                      type="Line"
                      options={emailsSubscriptionChart.options}
                      listener={emailsSubscriptionChart.animation}
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last Day</h4>
                  </div>
                )
              },
              {
                tabName: "Week",
                tabContent: (
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={emailsSubscriptionChart.data}
                      type="Line"
                      options={emailsSubscriptionChart.options}
                      listener={emailsSubscriptionChart.animation}
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
                    <ChartistGraph
                      className="ct-chart"
                      data={completedTasksChart.data}
                      type="Line"
                      options={completedTasksChart.options}
                      listener={completedTasksChart.animation}
                    />
                    <h4 className={classes.cardTitle}>Light Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "Day",
                tabContent: (
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={completedTasksChart.data}
                      type="Line"
                      options={completedTasksChart.options}
                      listener={completedTasksChart.animation}
                    />  
                    <h4 className={classes.cardTitle}>Light Over Last Day</h4>
                  </div>
                )
              },
              {
                tabName: "Week",
                tabContent: (
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={completedTasksChart.data}
                      type="Line"
                      options={completedTasksChart.options}
                      listener={completedTasksChart.animation}
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
