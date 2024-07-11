const validateLength = ( value, minAmount ) => value.length>=minAmount;
const validateEmail = ( value ) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);

export const initialState = {
    firstName:{
        value:'',
        isValid:false,
        isTouched:false,
    },
    lastName:{
        value:'',
        isValid:false,
        isTouched:false,
    },
    email:{
        value:'',
        isValid:false,
        isTouched:false,
    },
    password:{
        value:'',
        isValid:false,
        isTouched:false,
    }
}

export const actionTypes = {
    UPDATE_FIRSTNAME: 'UPDATE_FIRSTNAME',
    UPDATE_LASTNAME: 'UPDATE_LASTNAME',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
}

export const signupReducer = (state=initialState, action) => {
    const {payload} = action;
    
    switch (action.type){
        case actionTypes.UPDATE_FIRSTNAME:{
            const isValid = validateLength(payload,1);
            let { isTouched } = state.firstName;
            if(!state.firstName.isTouched)
                if(state.firstName.value.length>=1)
                    isTouched=true;

            return {
                ...state,
                firstName:{
                    value: action.payload,
                    isTouched,
                    isValid
                }
            }
        }
        case actionTypes.UPDATE_LASTNAME:{
            const isValid = validateLength(payload,1);
            let { isTouched } = state.lastName;
            if(!state.lastName.isTouched)
                if(state.lastName.value.length>=1)
                    isTouched=true;

            return {
                ...state,
                lastName:{
                    value: action.payload,
                    isTouched,
                    isValid
                }
            }
        }
        case actionTypes.UPDATE_EMAIL:{
            const isValid = validateLength(payload,7) && validateEmail(payload);
            let { isTouched } = state.email;
            if(!state.email.isTouched)
                if(state.email.value.length>=3)
                    isTouched=true;

            return {
                ...state,
                email:{
                    value: action.payload,
                    isTouched,
                    isValid
                }
            }
        }
        case actionTypes.UPDATE_PASSWORD: {
            const isValid = validateLength(payload,5);
            let { isTouched } = state.password;
            if(!state.password.isTouched)
                if(state.password.value.length>=2)
                    isTouched=true;

            return {
                ...state,
                password:{
                    value: action.payload,
                    isTouched,
                    isValid
                }
            }
        }
    }
    throw Error("Unknown action: " + action.type);
}