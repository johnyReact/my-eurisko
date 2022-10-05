import { createSlice } from "@reduxjs/toolkit";

const credential = createSlice({
  name: "credential",
  initialState: { UserId: null, token: "" },
  reducers: {
    setCredential(state, action) {
      const values = action.payload;
      state.UserId = values.id;
      state.token = values.token;
    },
  },
});

export const credentialAction = credential.actions;

export default credential;
