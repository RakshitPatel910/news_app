import React from 'react'
// import Spinner from './Spinner';

const NewsItem = (props)=>{

   
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div>

                <div className="card my-3" >
                    <div style={{ display: 'flex', position:'absolute', right:0, top: '-10px'}}>
                        <span className="badge rounded-pill bg-success" style={{  }}>{source}</span>
                    </div>    
                    <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2021/06/Deal-770x433.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
