import React from 'react';

class AddBoogie extends React.Component {
    state = {
        invalidForm: true,
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
                            Board Name
                        </label>
                        <div>
                            (required)
                            </div>
                        <input
                            className='form-control'
                            name='name'
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Board Brand</label>
                        <div>
                            (required)
                        </div>
                        <input
                            className='form-control'
                            name='brand'
                            value={this.state.formData.brand}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Board Type</label>
                        <div>
                            (required)
                        </div>
                        <input
                            className='form-control'
                            name='type'
                            value={this.state.formData.type}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Board $$$</label>
                        <div>
                            (required)
                        </div>
                        <input
                            className='form-control'
                            name='price'
                            value={this.state.formData.price}
                            onChange={this.handleChange}
                            required
                        />
                        <button
                            type='submit'
                            className='btn'
                            disabled={this.state.invalidForm}
                        >
                            Add Board
                            </button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddBoogie;