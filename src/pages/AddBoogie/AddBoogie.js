import React from 'react';

class AddBoogie extends React.Component {
    state = {
        formData: {
            name: '',
            brand: '',
            type: '',
            price: ''
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddBoogie(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1>Add Boogie Board</h1>
                <form ref={this.formRef} autoComplete='off' onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Board Name (required)
                        </label>
                        <input
                            className='form-control'
                            name='name'
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Board Brand(required)</label>
                        <input
                            className='form-control'
                            name='brand'
                            value={this.state.formData.brand}
                            onChange={this.handleChange}
                            required
                        />
                        <div class>

                        </div>
                    </div>
                </form>


            </>
        )
    }
}

export default AddBoogie;