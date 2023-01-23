import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auths:false,
    students:[
    { name: "Abdulaziz Jalilov", uniqLogin:"ifelse",authCode: 232112, matematika: 15, fizika: 34, inglizTili: 65 },
    { name: "Fazliddin Umarov", uniqLogin:"ifelse",authCode: 222222, matematika: 44, fizika: 65, inglizTili: 32 },
    { name: "Samandar Qosimov", uniqLogin:"ifelse",authCode: 655432, matematika: 12, fizika: 27, inglizTili: 10 },
    { name: "Bilol Uzoqov", uniqLogin:"ifelse",authCode: 765543, matematika: 18, fizika: 36, inglizTili: 42 },
    { name: "Azamat Usmonov", uniqLogin:"ifelse",authCode: 873454, matematika: 52, fizika: 54, inglizTili: 68 },
    { name: "Usmon Sultonov", uniqLogin:"ifelse",authCode: 874353, matematika: 26, fizika: 68, inglizTili: 22 },
    { name: "Aziz Samiyev", uniqLogin:"ifelse",authCode: 435655, matematika: 15, fizika: 34, inglizTili: 48 },
    { name: "Hilola G'afforova", uniqLogin:"ifelse",authCode: 534523, matematika: 10, fizika: 30, inglizTili: 28 },
    { name: "Ilhom Sultonov", uniqLogin:"ifelse",authCode:432453 , matematika: 80, fizika: 40, inglizTili: 32 },
    ],
    error:""
}

    const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        addAuthState(state, action){
            state.auths = action.payload
        },
        addErrorText(state, action){
            state.error = action.payload
        }
    }
})


export default authSlice.reducer;

export const { addAuthState,addErrorText } = authSlice.actions;

