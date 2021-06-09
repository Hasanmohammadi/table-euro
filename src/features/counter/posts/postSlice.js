import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    add(state, action) {},
    setData(state, action) {
    return action.payload;
    },
  },
});


export const { add, setData } = postSlice.actions;
//state ro store pass mide behesh
export const selectPost = (state) => state.post;

export const getDataAsync = (url) => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setData(data));
    });
};
export default postSlice.reducer;

