import { DECREMENT, INCREMENT } from "../actions/actions";

const reducer=(state=1,action)=>{
    switch(action.type){
        case INCREMENT:
            return state=state+1
        case DECREMENT:
            return state=state-1
            default:
                return state

    }
}

export default reducer