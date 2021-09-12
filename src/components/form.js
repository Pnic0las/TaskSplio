import React from 'react';
import TextField from '@material-ui/core/TextField';
import { setEvent } from '../actions/calendaraction';
import { connect } from 'react-redux';

 function FormEvent(props) {

    const handleSubmit = e => {
        e.preventDefault();
        props.setEvent(EventName, props.sample.date)
        console.log(EventName);
    };

    const [EventName, setEventName] = React.useState('')
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="standard-full-width"
                label="Event's name"
                style={{ margin: 8 }}
                placeholder="Name of your event"
                margin="normal"
                value={EventName}
                onChange={e => setEventName(e.target.value)}
                required
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <div>
                <button type="submit" style={{ margin: 8 }} >
                    Submit
                </button>
            </div>
        </form>


    )
}

const actionCreator= {
    setEvent,
}

const mapStateToProps = state => ({
    sample: state.sample
  });

const connectedEvent = connect(mapStateToProps, actionCreator)(FormEvent);

export default connectedEvent;