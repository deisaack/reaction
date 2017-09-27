import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    ajaxSubmit(e) {
      e.preventDefault();
      var form = $(this);
      var ajaxUrl ="http://127.0.0.1:8101/api/bks/create/";
      var formData = new FormData($('form#4m')[0]);
      $.ajax({
        url: ajaxUrl,
          method: 'POST',
        data: formData,
        dataType: 'json',
          contentType: false,
          processData: false,
        success: function (data) {
            if (data.form_is_valid) {
                alert("Book created!");
            }
            else {
                alert('There were some errors')
            }
        }

      });
    };

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.ajaxSubmit.bind(this)} id="4m">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="id_title" aria-describedby="titleHelp" placeholder="Enter Title"/>
                    <small id="titleHelp" className="form-text text-muted">Give the title of the book.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="id_price" name="price" placeholder="250"/>
                </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="id_author" name="author" placeholder="Walah bin Walah"/>
              </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>

        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};