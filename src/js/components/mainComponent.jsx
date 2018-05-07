import React from 'react';
import ReactDOM from 'react-dom';
import {Title} from "./title.jsx";
import {PieChart} from "./pieChart.jsx";


class MainComponent extends React.Component {
    render(){
        return <div>
            <Title />
            <PieChart />
        </div>
    }
}

class App extends React.Component {
    render(){
        return <div>
                <MainComponent />
            </div>
    }
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});