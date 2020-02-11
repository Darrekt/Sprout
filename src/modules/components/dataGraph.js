import Chart from 'chart.js'

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
        var yMax;

        if (this.props.timeFrame === '1h') {
            timeFrame = 3600000;
        } else if (this.props.timeFrame === '12h') {
            timeFrame = 43200000;
        } else {
            timeFrame = 86400000;
        }

        if (this.props.dataLabel === 'temp') {
            colour = "#64b968";
            yMax = 60;
        } else if (this.props.dataLabel === 'humidity') {
            colour = "#ffa624";
            yMax = 100;
        } else {
            colour = "#ef524f";
            yMax = 20000;
        }

        this.state = {
            data: data,
            plantLevel: plantLevel,
            labels: labels,
            colour: colour,
            timeFrame: timeFrame,
            yMax: yMax
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

    componentDidUpdate() {
        console.log(this.state.data);
        this.myChart.data.datasets[0].data = this.state.data;
        this.myChart.data.labels = this.state.labels;
        this.myChart.data.datasets[1].data = this.myChart.data.labels.map(_ => this.props.plantValue);
        this.myChart.update();
    }

    componentDidMount() {
        window.setInterval(() => {
            fetch('http://127.0.0.1:5000/data.json')
            .then(response => response.json())
            .then((Data) => {
                var labels = [];
                var data = [];
                var plantLevel = [];
                for (var i = 0; i < Data.length; i++) {
                    if ((new Date()).getTime() - (new Date(Data[i].time)).getTime() <= this.state.timeFrame && (new Date()).getTime() - (new Date(Data[i].time)).getTime() >= 0) {
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
                this.setState({
                    data: data,
                    labels: labels,
                    plantLevel: plantLevel
                });
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            });
        }, 3000);

        this.myChart = new Chart(this.chartRef.current, {
            type: "line",
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {unit: 'minute'}
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: this.state.yMax
                        }
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
                        backgroundColor: "rgba(5,5,5,0.2)",
                        pointRadius: 0,
                        borderWidth: 0,
                    }
                ]
            }
        });
    }
}

export default DataGraph;