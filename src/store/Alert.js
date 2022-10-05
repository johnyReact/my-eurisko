import { createSlice } from "@reduxjs/toolkit";

const uiAlert = createSlice({
  name: "alert",
  initialState: { alertVisible: false, text: "", type: "", invisible: true },
  reducers: {
    show(state, action) {
      const values = action.payload;
      state.alertVisible = values.visible;
      state.text = values.text;
      state.type = values.type;
      state.invisible = values.invisible;
    },
  },
});

export const alertAction = uiAlert.actions;

export default uiAlert;
