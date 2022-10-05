import { createSlice } from "@reduxjs/toolkit";

const articles = createSlice({
  name: "articles",
  initialState: { articles: [], filterdArt: [], filter: [] },
  reducers: {
    setArticles(state, action) {
      const values = action.payload;
      state.articles = values;
      state.filter = values;
    },
    filterArticles(state, action) {
      const values = action.payload;
      let array = [];
      values?.articlesArray?.filter((val) => {
        if (values.filterArticles === "") {
          state.filter = state.articles;
          return values.articlesArray;
        } else if (
          val?.byline?.original
            ?.toLowerCase()
            .includes(values.filterArticles.toLocaleLowerCase()) ||
          val?.section_name
            ?.toLowerCase()
            .includes(values.filterArticles.toLocaleLowerCase())
        ) {
          array.push(val);
          state.filter = array;
        } else state.filter = array;
      });
    },
    loadMoreArticles(state, action) {
      const values = action.payload;
      let array = [...state.articles];
      values?.newArticles.map((val) => {
        array.push(val);
      });
      state.filter = array;
      state.articles = array;
    },
  },
});

export const articlesAction = articles.actions;

export default articles;
