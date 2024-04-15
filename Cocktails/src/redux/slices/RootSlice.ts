import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        liquor: "Liquor",
        ingredients: "Ingredients",
        time: "Time"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseLiquor: (state, action) => { state.liquor = action.payload},
        chooseIngredients: (state, action) => { state.ingredients = action.payload},
        chooseTime: (state, action) => { state.time = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseLiquor, chooseIngredients, chooseTime} = rootSlice.actions