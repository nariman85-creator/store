
const initialState={
category:0,
sortBy:'popular'
};
const filters=(state=initialState,action)=>{
    switch (action.type) {
        case 'SET_SORT_BY':
                    return {
            ...state,
            sortBy:action.peyload
        };
        case 'SET_CATEGORY':
            return{
                ...state,
                category:action.peyload
            };

            
    
        default:
            return state;
    }
};
export default filters;