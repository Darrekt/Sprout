import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import CustomTabs from "../components/CustomTabs/CustomTabs.js";

import DataGraph from "../components/dataGraph.js"

import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import DropDown from "../components/dropDown";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  const [plantTemp, setPlantTemp] = React.useState(20.0);
  const [plantHumidity, setPlantHumidity] = React.useState(50.0);
  const [plantLight, setPlantLight] = React.useState(200.0);

  const handleChange = plant => {
    if (plant === 'home-plant') {
      setPlantTemp(20.0);
      setPlantHumidity(50.0);
      setPlantLight(200.0);
    } else if (plant === 'herb') {
      setPlantTemp(20.0);
      setPlantHumidity(60.0);
      setPlantLight(200.0);
    } else if (plant === 'succulent') {
      setPlantTemp(25.0);
      setPlantHumidity(30.0);
      setPlantLight(200.0);
    }
  }

  return (
    <div>
      <DropDown
        handleChange = { handleChange }  
      />
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
                      plantValue = { plantTemp }
                      timeFrame = '1h'
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "12 Hours",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'temp'
                      plantValue = { plantTemp }
                      timeFrame = '12h'
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last 12 Hours</h4>
                  </div>
                )
              },
              {
                tabName: "24 Hours",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'temp'
                      plantValue = { plantTemp }
                      timeFrame = '24h'
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last 24 Hours</h4>
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
                      plantValue = { plantHumidity }
                      timeFrame = '1h'
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "12 Hours",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'humidity'
                      plantValue = { plantHumidity }
                      timeFrame = '12h'
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last 12 Hours</h4>
                  </div>
                )
              },
              {
                tabName: "24 Hours",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'humidity'
                      plantValue = { plantHumidity }
                      timeFrame = '24h'
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last 24 Hours</h4>
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
                      plantValue = { plantLight }
                      timeFrame = '1h'
                    />
                    <h4 className={classes.cardTitle}>Light Over Last Hour</h4>
                  </div>
                )
              },
              {
                tabName: "12 Hours",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'light'
                      plantValue = { plantLight }
                      timeFrame = '12h'
                    />
                    <h4 className={classes.cardTitle}>Light Over Last 12 Hours</h4>
                  </div>
                )
              },
              {
                tabName: "24 Hours",
                tabContent: (
                  <div>
                    <DataGraph
                      dataLabel = 'light'
                      plantValue = { plantLight }
                      timeFrame = '24h'
                    /> 
                    <h4 className={classes.cardTitle}>Light Over Last 24 Hours</h4>
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
