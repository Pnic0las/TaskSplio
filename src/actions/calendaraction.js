import { CalendarConstant } from "../constant/calendarconstant"

export const setDate = (date) => {
    return (dispatch) => {
        dispatch({
            type: CalendarConstant.SET_DATE,
            date: date
        })
    }
}

export const setEvent = (event, date) => {
    return(dispatch) => {
        dispatch({
            type: CalendarConstant.SET_EVENT,
            event: {date: date, event: event}
        })
    }
}

export const delEvent = (event, date) => {
    return(dispatch) => {
        dispatch({
            type: CalendarConstant.DEL_EVENT,
            event: event,
        })
    }
}