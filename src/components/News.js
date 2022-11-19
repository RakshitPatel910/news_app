import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=>{

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsBites`

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async ()=>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData); 
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResult(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();  
  }, [])

  const fetchMoreData = async () =>{
    setPage(page+1)
    const url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResult(parsedData.totalResults)
    setLoading(false)
  } 

  // const handleNextClick = async () => {
  //   setPage(page+1) 
  //   updateNews();
  // };

  // const handlePrevClick = async () => {
  //   setPage(page-1) 
  //   updateNews();
  // };
  
    return (
    <div>
        <h1 className="container my-5">
          NewsBites - Top Headlines | {capitalizeFirstLetter(props.category)}
          <hr></hr>
        </h1>
        {loading && <Spinner />} 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          style={{overflow:'hidden'}}
        >
          <div className="container">
            <div className="row">
              {
                articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description? element.description.slice(0, 88): ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  ); 
                })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-3">
          <button
            disabled={page <= 1}
            type="button"
            onClick={handlePrevClick}
            className="btn btn-lg btn-primary"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              state.page + 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
            type="button"
            onClick={handleNextClick} 
            className="btn btn-lg btn-primary"
          >
            Next &rarr;
          </button>
        </div> */}
        
      </div>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
