import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Search = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    useEffect(() => {   
       if(term){
          const timeoutId =  setTimeout(() => {
           Search();
           }, 1000)
           return () => {
               clearTimeout(timeoutId)
           }
       }
    }, [term]);

     const Search = async () => {
       const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
         params: {
           action: "query",
           list: "search",
           format: "json",
           origin: "*",
           srsearch: term,
         },
       });
       setResults(data.query.search);
    //    console.log('search', data.query.search);
     };


    const renderedResults = results.map((result) => {
        return (
          <div className="ui celled list" key={result.pageid}>
            <div className="ui right floated button">
              <a
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
              >
                Go
              </a>
            </div>
            <div className="content">
              <div className="header">{result.title}</div>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
          </div>
        );
    })

    return (
        <div>
            <div className='ui form'>
                <label>Enter Search Term</label>
                <input 
                    type="text"
                    value={term}
                    onChange={e => {setTerm(e.target.value)}}
                />
            <div className='ui celled list'>
              { renderedResults }
            </div>
            </div>
        </div>
    )
}

export default Search