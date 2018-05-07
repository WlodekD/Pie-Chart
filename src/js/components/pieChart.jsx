import React from 'react';

class PieChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.updateCanvas();
    }

    updateCanvas(){
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(10,10, 100, 100);
    }

    render(){

        return <div>
            <canvas ref="canvas" width={300} height={300}></canvas>
        </div>
    }
}

export {PieChart};