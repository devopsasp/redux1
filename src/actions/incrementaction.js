import { DECREMENT, INCREMENT } from "./actions"

export const increment=()=>{

    return {
        type:INCREMENT
    }

}
export const decrement=()=>{
    return {
        type:DECREMENT
    }
}

