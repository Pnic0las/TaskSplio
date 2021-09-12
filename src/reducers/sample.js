import { CalendarConstant } from "../constant/calendarconstant";


const initialState = {
  name: "John Doe",
  date: null,
  eventperday: []
};

export const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CalendarConstant.SET_DATE:
      return {
        ...state,
        date:action.date
      };
      case CalendarConstant.SET_EVENT:
        return{
          ...state,
          eventperday : state.eventperday.concat([action.event])
        }
      case CalendarConstant.DEL_EVENT:
        return{
          ...state,
          eventperday : state.eventperday.filter(element => element.event !== action.event)
        }
    default:
      return state;
  }
};
