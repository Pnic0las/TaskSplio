import React from "react";
import { connect } from "react-redux";
import "../styles.css";
import DisplayEvent from "./Displayevent";
import FormEvent from "./form";
import BasicTable from "./Mycalendar";
import { useState, useEffect } from "react";

export function App(props) {

  const [dayandevent, setdayandevent] = useState(null)

  useEffect(() => {
    setdayandevent(props.sample.eventperday.find(element => element.date === props.sample.date));

  }, [props])

  return (
    <div className="App">
      <h1>My Calendar</h1>
      <h2>Click on a day to add an event.</h2>
      <hr />
      <p>Welcome, {props.sample.name}</p>
      <hr />
      <h1>JANUARY</h1>
      <BasicTable />
      {props.sample.date &&
        <>
          <hr />
          {dayandevent === undefined ?
            (<>
              <div>Develop form for event here</div>
              <FormEvent></FormEvent>
            </>) :
            <DisplayEvent dayandevent={dayandevent}></DisplayEvent>
          }
        </>}

    </div>
  );
}


const mapStateToProps = state => ({
  sample: state.sample
});

export default connect(mapStateToProps)(App);
