import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//redux import
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//mii import
import { Grid, LinearProgress } from "@mui/material";
//api import
import { GET_API } from "../../core/services/api";
import InfiniteScroll from "react-infinite-scroller";
//components
import {
  ArticleCard,
  ArticleCardSkeleton,
} from "../../layout/article-card/ArticleCard";
import { articlesAction } from "../../store/Articles";
import { CustomInput } from "../../layout/form/input/Input";
import NoData from "../../layout/no-data/NoData";

import "./Dashboard.scss";
import { alertAction } from "../../store/Alert";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [searchArt, setSearchArt] = useState("");
  const [noMoreData, setNoMoreData] = useState(true);
  const articles = useSelector((state) => state.articles.articles);
  const filter = useSelector((state) => state.articles.filter);
  const fetchArticles = async () => {
    await GET_API("/articles", page).then((res) => {
      if (res?.status === 200) {
        setLoading(false);
        let articles = res.data.response.docs;
        dispatch(articlesAction.setArticles(articles));
      } else {
        navigate("/error");
      }
    });
  };
  const handlePageChange = () => {
    GET_API("/articles", page + 1).then((res) => {
      if (res?.status === 200) {
        if (res?.data?.response?.docs?.length === 0) {
          setNoMoreData(false);
        } else {
          dispatch(
            articlesAction.loadMoreArticles({
              articlesArray: articles,
              newArticles: res?.data?.response?.docs,
            })
          );
          setPage(page + 1);
        }
      }
    });
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  useEffect(() => {
    dispatch(
      articlesAction.filterArticles({
        articlesArray: articles,
        filterArticles: searchArt,
      })
    );
  }, [searchArt]);
  return (
    <div className="page-container">
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div style={{ width: "250px" }}>
          <CustomInput
            value={searchArt}
            label="Search Article"
            onChange={(e) => {
              setSearchArt(e.target.value);
            }}
            error=""
          />
        </div>

        <div
          className={`${
            loading ? "articles-box disableOverFlowY " : "articles-box"
          } `}
        >
          <InfiniteScroll
            pageStart={1}
            initialLoad={false}
            loadMore={handlePageChange}
            hasMore={!loading && !searchArt && noMoreData ? true : false}
            loader={<LinearProgress />}
            useWindow={false}
            threshold={10}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 15, md: 9, lg: 9, xl: 12 }}
            >
              {" "}
              {loading ? (
                <ArticleCardSkeleton count={perPage} />
              ) : filter.length !== 0 ? (
                filter?.map((val, key) => (
                  <Grid item xs={2} sm={5} md={3} key={key}>
                    <ArticleCard
                      key={key}
                      desc={val.byline.original}
                      title={val.section_name}
                      media={val.multimedia}
                    />
                  </Grid>
                ))
              ) : (
                <NoData title="No Article Found" />
              )}
            </Grid>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
