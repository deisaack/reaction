import React from "react";
import {render} from "react-dom";
import Request from "superagent"
import _ from "lodash"

import {Header} from "./components/Header";
import {Report} from "./components/Report";
import {Band} from "./components/Band";

var bands = [
    {name: 'Shigidi', image: "https://i.ytimg.com/vi/6EXJeNAKnmA/maxresdefault.jpg"},
    {name: 'Gathigiriri', image: "http://nairobiwire.com/wp-content/uploads/2017/03/kymo.jpg"},
    {name: 'Naswa melodies', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-C8pnvDCyrneIVPckT8IJgzIEoeCJ_7qgoz8bblmo7yFDHyIv"}
]

class App extends React.Component {
    constructor () {
        super();
        this.state = {};
    }
    componentWillMount () {
        var url = "http://127.0.0.1:8101/api/bks/?format=json";
        Request.get(url).then((response) => {
            this.setState({
                books: response.body
        });
        });
        console.log("What the heck")

    }

    render() {
        var books = _.map(this.state.books, (book, i) => {
           return <li key={i}>{book.title}</li>;
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <Report/>
                    <hr/>
                    <Band bands={bands}/>
                </div>
                <ul>{books}</ul>
            </div>
        );
    }
}
 
render(<App/>, window.document.getElementById("app"));
