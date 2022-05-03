import { ReducerWithoutAction } from "react"
import { State } from "../types"


const appReducer = (state: any, action: { type: string, payload?: any }) => {
    const { type, payload } = action
    switch (type) {
        case 'HANDLE_RESUME':
            return {
                open: payload
            }
        case 'CHANGE_CHOSEN_DATE':
            return {
                ...state,
                chosenDate: payload
            }
        case 'CHANGE_CHOSEN_TIME':
            return {
                ...state,
                chosenTime: payload
            }
        case 'RESERVED_HOURS':
            return {
                ...state,
                reserved: payload
            }
        default:
            return state
    }
}

export default appReducer