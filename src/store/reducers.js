const initalstate ={
    nooftodo:0,
    noofinprog:0,
    noofdone:0,
    nofopesonal:0,
    noofofficial:0,
    noofmsic:0,
    noofall:0,
    token:"",
    todo: [],
    inprog: [],
    done : []


}

const reducers = (state = initalstate,action) => {
    if (action.type === 'INCREMENTTODO') {
        return{
            ...state,
            nooftodo: state.nooftodo +1
           
        };
    }
    if (action.type === 'INCREMENTINPROG') {
        return{
            ...state,
            noofinprog: state.noofinprog +1
           
        };
    }
    if (action.type === 'INCREMENTDONE') {
        return{
            ...state,
            noofdone: state.noofdone +1
            
        };
    }
    if (action.type === 'INCREMENTPERSONAL') {
        return{
            ...state,
            nofopesonal: state.nofopesonal +1,
            noofall: state.noofmsic + state.noofofficial + state.nofopesonal +1
        };
    }
    if (action.type === 'INCREMENTOFFICIAL') {
        return{
            ...state,
            noofofficial: state.noofofficial +1,
            noofall: state.noofmsic + state.noofofficial + state.nofopesonal +1
        };
    }
    if (action.type === 'INCREMENTMSIC') {
        return{
            ...state,
            noofmsic: state.noofmsic +1,
            noofall: state.noofmsic + state.noofofficial + state.nofopesonal +1
        };
    }
    if (action.type === 'LOGIN') {
        return{
            ...state,
            token : action.value
        };
    }
    if (action.type === 'LOGOUT') {
        return{
            ...state,
            token : action.value
        };
    }
    if (action.type === 'TODOTASK') {
        return{
            ...state,
            todo : action.value
        };
    }
    if (action.type === 'TOINPROG') {
        return{
            ...state,
            inprog : action.value
        };
    }
    if (action.type === 'TODONE') {
        return{
            ...state,
            done : action.value
        };
    }

    return state;
}

export default reducers;