import React from 'react';
import { Link } from 'react-router-dom';

class EditBoogie extends React.Component {
    state = {
        invalidform: false,
        formData: this.props.location.state.boogie
    };


    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleDeleteBoogie(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidform: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1>
                    Edit Boogie
        </h1>
                <form ref={this.formRef} autoComplete='off' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Boogie Name
                    </label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                        // required
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Boogie Brand
                    </label>
                        <input
                            className="form-control"
                            name="brand"
                            value={this.state.formData.brand}
                            onChange={this.handleChange}
                        // required
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Boogie Type
                    </label>
                        <input
                            className="form-control"
                            name="type"
                            value={this.state.formData.type}
                            onChange={this.handleChange}
                        // required
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Boogie Price
                    </label>
                        <input
                            className="form-control"
                            name="price"
                            value={this.state.formData.price}
                            onChange={this.handleChange}
                        // required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-xs"
                        disabled={this.state.invalidform}
                        to='/'
                    // onClick= {() => thi}

                    >
                        Save Boogie
                </button>
                    <Link to='/'>
                        Cancel
                </Link>
                </form>
            </>
        );
    };
}


export default EditBoogie;