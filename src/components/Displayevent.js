import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { delEvent } from '../actions/calendaraction';

function DisplayEvent(props) {
  
  const handleClick = (string) => {
    props.delEvent(string)
  }

  return (
    <div>
      <Paper elevation={3}> 
      {props.dayandevent &&
          <>
          <p>Voici l'évenement du {props.dayandevent.date} Janvier: {props.dayandevent.event}</p>
          </>
      }
          <Button startIcon={<CloseIcon></CloseIcon>} onClick={() => handleClick(props.dayandevent.event)}>Delete Event</Button>
            </Paper>
    </div>
  );
}


const actionCreator= {
    
    delEvent,
}

const mapStateToProps = state => ({
    sample: state.sample
  });

const connectedDisplayEvent = connect(mapStateToProps, actionCreator)(DisplayEvent);

export default connectedDisplayEvent;