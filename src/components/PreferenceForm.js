import React  from "react";
import '../css/PreferenceCSS.scss';

class PreferenceForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city: '',
            zipcode: '',
            difficulty: '',
            surface: '',
            loop: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.target.classList.add('active');

        this.setState({
            [e.target.name]: e.target.value
        });

    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('component state', JSON.stringify(this.state));
    }

    render() {
        return (
            <form noValidate>
                <div className="form-group">
                    <label id="city">City</label>
                    <input className="form-control"
                           type="text"
                           name="city"
                           ref="city"
                           value={ this.state.city }
                           onChange={ this.handleChange }
                           required />
                </div>
                <div className="form-group">
                    <label id="zipcode">ZipCode</label>
                    <input className="form-control"
                           type="text"
                           name="zipcode"
                           ref="zipcode"
                           value={ this.state.zipcode }
                           onChange={ this.handleChange }
                           required />
                </div>
                <div className="form-group">
                    <label id="difficulty">Difficulty</label>
                    <input className="form-control"
                           type="text"
                           name="difficulty"
                           ref="difficulty"
                           value={ this.state.difficulty }
                           onChange={ this.handleChange }
                           required />
                </div>

                <div className="form-group">
                    <label id="surface">Surface Type</label>
                    <input className="form-control"
                           type="text"
                           name="surface"
                           ref="surface"
                           value={ this.state.surface }
                           onChange={ this.handleChange }
                           required />
                </div>

                <div className="form-group">
                    <label id="loop">Loop Count</label>
                    <input className="form-control"
                           type="text"
                           name="loop"
                           ref="loop"
                           value={ this.state.loop}
                           onChange={ this.handleChange }
                           required />
                </div>
                <button className="btn btn-primary"
                        onClick={ this.handleSubmit }>submit</button>
            </form>
        );
    }
}

export default PreferenceForm;