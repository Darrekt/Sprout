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

        if (this.props.timeFrame === 'hour') {
            timeFrame = 3600000;
        } else if (this.props.timeFrame === 'day') {
            timeFrame = 86400000;
        } else {
            timeFrame = 604800000;
        }

        if (this.props.dataLabel === 'temp') {
            colour = '#64b968';
        } else if (this.props.dataLabel === 'humidity') {
            colour = '#ffa624';
        } else {
            colour = '#ef524f';
        }

        console.log(Data);
        for (var i = 0; i < Data.length; i++) {
            if ((new Date()).getTime() - (new Date(Data[i].time)).getTime() < timeFrame) {
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
            <div>
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
                    display: "false"
                }
            },
            data: {
                labels: this.state.labels,
                datasets: [
                    {
                        data: this.state.data,
                        fill: 'none',
                        pointRadius: 0,
                        borderColour: this.state.colour,
                        borderWidth: 3
                    },
                    {
                        data: this.state.plantLevel,
                        fill: true,
                        backgroundColour: "rgba(10,10,10,0.3)",
                        pointRadius: 0,
                        borderWidth: 0,
                    }
                ]
            }
        });
    }
}

export default DataGraph;