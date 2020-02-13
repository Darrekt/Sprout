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

  const [averageTemp, setAverageTemp] = React.useState(0.0);
  const [averageHumidity, setAverageHumidity] = React.useState(0.0);
  const [averageLight, setAverageLight] = React.useState(0.0);

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

  const updateAverages = (metric, avg) => {
    if (metric === 'temp') {
      setAverageTemp(avg);
    } else if (metric === 'humidity') {
      setAverageHumidity(avg);
    } else if (metric === 'light') {
      setAverageLight(avg);
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
                      updateAverages = { updateAverages }
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last Hour  -  Average: { averageTemp }</h4>
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
                      updateAverages = { updateAverages }
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last 12 Hours  -  Average: { averageTemp }</h4>
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
                      updateAverages = { updateAverages }
                    />
                    <h4 className={classes.cardTitle}>Temp Over Last 24 Hours  -  Average: { averageTemp }</h4>
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
                      updateAverages = { updateAverages }
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last Hour  -  Average: { averageHumidity }</h4>
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
                      updateAverages = { updateAverages }
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last 12 Hours  -  Average: { averageHumidity }</h4>
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
                      updateAverages = { updateAverages }
                    />
                    <h4 className={classes.cardTitle}>Humidity Over Last 24 Hours  -  Average: { averageHumidity }</h4>
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
                      updateAverages = { updateAverages }
                    />
                    <h4 className={classes.cardTitle}>Light Over Last Hour - Average: { averageLight }</h4>
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
                      updateAverages = { updateAverages }
                    />
                    <h4 className={classes.cardTitle}>Light Over Last 12 Hours  -  Average: { averageLight }</h4>
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
                      updateAverages = { updateAverages }
                    /> 
                    <h4 className={classes.cardTitle}>Light Over Last 24 Hours  -  Average: { averageLight }</h4>
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
