
import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: " Name",
        email: "Email",
        phone_number: "Phone Number",
        job_title: "Job Title",
        breed: "Breed",
        dog_name: "Dog Name"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        choosePhone: (state, action) => { state.phone_number = action.payload},
        chooseJobTitle: (state, action) => { state.job_title = action.payload},
        chooseBreed: (state, action) => { state.breed = action.payload},
        chooseDogName: (state, action) => { state.dog_name = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, choosePhone, chooseJobTitle, chooseBreed, chooseDogName} = rootSlice.actions