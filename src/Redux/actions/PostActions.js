import * as types from '../types'
export const fetchposts =()=>async dispatch=>{
    dispatch({
        type:types.SUCCESS,
        payload:['1st post','2nd post']
    })
}