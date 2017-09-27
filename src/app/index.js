import React from "react";
import {render} from "react-dom";
import Request from "superagent"
import _ from "lodash"

import {Report} from "./components/Report";
import {Band} from "./components/Band";
import {Book} from "./components/Book";

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
        var url1 = "http://127.0.0.1:8101/api/bks/4/?format=json";
        Request.get(url).then((response) => {
            this.setState({
                books: response.body
            });
        });
        Request.get(url1).then((response) => {
            this.setState({
                bk: response.body
            });
        });
    }

    render() {
        var books = _.map(this.state.books, (book, i) => {
           return <li key={i}>{book.title}</li>;
        });
        var b = this.state.bk;
        var singleBook = function (b) {
            return (
                <h1 style="color">b.title @ <small>{b.price}</small></h1>
            )
        }
        // console.log(bk)
            // return <h1>Hello, {bk}</h1>;
        return (
            <div className="container">
                <div className="row">
                    {singleBook(b)}
                    hhhh
                    {/*<Book bk={bk.title}/>*/}
                    {/*<Report/>*/}
                    <hr/>
                </div>
                <h1>Hello, {this.props.bk}</h1>;
                <ul>{books}</ul>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
