import Chart from 'chart.js'
import Data from 'assets/data/graph_data.json'

var React = require('react');
var Component = React.Component;

class DataGraph extends Component {

    constructor(props) {
        super(props);
        var data = [];
        var plantLevel = [];
        var labels = [];
        var colour;
        var timeFrame;

        if (this.props.timeFrame === '1h') {
            timeFrame = 3600000;
        } else if (this.props.timeFrame === '12h') {
            timeFrame = 43200000;
        } else {
            timeFrame = 86400000;
        }

        if (this.props.dataLabel === 'temp') {
            colour = "#64b968";
        } else if (this.props.dataLabel === 'humidity') {
            colour = "#ffa624";
        } else {
            colour = "#ef524f";
        }

        for (var i = 0; i < Data.length; i++) {
            if ((new Date()).getTime() - (new Date(Data[i].time)).getTime() <= timeFrame && (new Date()).getTime() - (new Date(Data[i].time)).getTime() >= 0) {
                labels.push(new Date(Data[i].time));
                plantLevel.push(this.props.plantValue);
                if (this.props.dataLabel === 'light') {
                    data.push(Data[i].light);
                } else if (this.props.dataLabel === 'temp') {
                    data.push(Data[i].temp);
                } else {
                    data.push(Data[i].humidity);
                }
            }
        }

        console.log(data);

        this.state = {
            data: data,
            plantLevel: plantLevel,
            labels: labels,
            colour: colour
        };
        this.chartRef = React.createRef();
    }

    // in props
    // dataLabel = 'light' | 'temp' | 'humidity'
    // plantValue (fill level)
    // timeFrame = 'hour' | 'day' | 'week'

    render() {
        return (
            <div style={{height: "400px"}}>
                <canvas ref={this.chartRef}/>
            </div>
        );
    }

    componentDidMount() {

        this.myChart = new Chart(this.chartRef.current, {
            type: "line",
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {unit: 'minute'}
                    }]
                },
                legend: {
                    display: false
                }
            },
            data: {
                labels: this.state.labels,
                datasets: [
                    {
                        data: this.state.data,
                        fill: 'none',
                        pointRadius: 0,
                        borderColor: this.state.colour,
                        borderWidth: 3
                    },
                    {
                        data: this.state.plantLevel,
                        fill: true,
                        backgroundColor: "rgba(10,10,10,0.3)",
                        pointRadius: 0,
                        borderWidth: 0,
                    }
                ]
            }
        });
    }
}

export default DataGraph;