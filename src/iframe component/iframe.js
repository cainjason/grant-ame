import React from 'react';
import ReactDOM from "react-dom/client";

const Iframe = React.createClass({
    render: function() {
        return(
            <div>
                <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>
            </div>
        )
    }
});

ReactDOM.render(
    <Iframe src="https://fb.watch/k5blMm1Ac9/" height="500" width="500"/>,
    document.getElementById('example')
);

