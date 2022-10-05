import { configureStore } from "@reduxjs/toolkit";
import uiAlert from "./Alert";
import credential from "./Credential";
import articles from "./Articles";
const store = configureStore({
  reducer: {
    alert: uiAlert.reducer,
    credential: credential.reducer,
    articles: articles.reducer,
  },
});

export default store;
