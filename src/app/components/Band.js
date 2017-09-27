import React from 'react'

export class Band extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello Band</h1>
                <div>
                    {this.props.bands.map(function (band, i ) {
                            return (
                                <div className="col-md-6 col-md-offset-3" key={i}>
                                    <div className="panel panel-default">
                                        <h1>{band.name}</h1>
                                        <img src={band.image} className="img img-responsive" alt=""/>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}

// var NewBand = React.createClass({
//     render: function () {
//         return (
//             <div className="col-md-6 col-md-offset-3">
//                 <h1>{this.props.name}</h1>
//                 <img src="{this.props.image}" className="img img-responsive" alt=""/>
//             </div>
//         )
//     }
// });
// // //
// // React.render(
// //     <BandComponet bands={bands} />, document.getElementById('band')
// // )
