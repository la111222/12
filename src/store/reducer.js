import * as actions from "./actionType"
const defaultState = {
    valone:"",
    valtwo:"",
    valthree:"",
    valfour:"",
    valfive:"",
    list:[{id:'1',username:'li',ed:'不急',ad:'hangzhou',numbers:'23434342323',unit:'质检'},{id:'2',username:'zhang',ed:'急',ad:'hangzhou',numbers:'23434342323',unit:'质检'},{id:'3',username:'wang',ed:'不急',ad:'hangzhou',numbers:'23434342323',unit:'质检'},{id:'4',username:'zhao',ed:'不急',ad:'hangzhou',numbers:'23434342323',unit:'质检'},{id:'5',username:'qi',ed:'不急',ad:'hangzhou',numbers:'23434342323',unit:'质检'}],
    tg:false,
    mid:null
}

export default (state=defaultState,action)=>{
    if(action.type==actions.one){
        const newState=JSON.parse(JSON.stringify(state));
        newState.valone=action.value;
        return newState
    }
    if(action.type==actions.two){
        const newState=JSON.parse(JSON.stringify(state));
        newState.valtwo=action.value;
        return newState
    }
    if(action.type==actions.three){
        const newState=JSON.parse(JSON.stringify(state));
        newState.valthree=action.value;
        return newState
    }
    if(action.type==actions.four){
        const newState=JSON.parse(JSON.stringify(state));
        newState.valfour=action.value;
        return newState
    }
    if(action.type==actions.five){
        const newState=JSON.parse(JSON.stringify(state));
        newState.valfive=action.value;
        return newState
    }
    if(action.type==actions.change){
        const newState=JSON.parse(JSON.stringify(state));
        // console.log("aa")
        newState.map((item)=>{
            if(item.username==newState.valone && item.ed==newState.valtwo && item.ad==newState.valthree && item.numbers==newState.valfour && item.unit
            ==newState.valfive){
                newState.tg=true;
                newState.mid=item.id;
                break;
            }
            return newState
        })
       
        
    }
    return state
}