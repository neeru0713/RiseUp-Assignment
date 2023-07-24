import React, { useState, useEffect } from "react";
import SearchBar from './components/SearchBar';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  
  const handleSearch = (searchTerm) => {
    fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=pwyQDEj3cuTJRah5dE-0uUkPcZ2S4tNI_jAUhwPJVAw`)
      .then((res) => res.json())
      .then(res => {
        setData(res.results)
      })
      .catch((err) => { 
        console.log(err)
      });
  }

  return (
    <div className="flex flex-col">
      <div className="ml-[40%] my-2">
        <img src="https://riseup.co/wp-content/uploads/2016/12/riseupCo-1.png" srcSet="https://riseup.co/wp-content/uploads/2016/12/riseupCo-1.png 1x" width="150" height="50" alt="RiseUp Co Logo" retina_logo_url="" className="fusion-sticky-logo" />
      </div>
      <div className="h-[2.5rem] w-[40rem] border-2 border-slate-500  ml-[30%] rounded">
        <SearchBar 
          onSearch={handleSearch}
        />
      </div>
      <div className="flex justify-evenly cursor-pointer">
        <div className="h-[10%] w-[8%] text-semibold border-2 border-slate-500  text-sm text-center mt-6 rounded" onClick={() => handleSearch("mountain")}>Mountain</div>
        <div className="h-[10%] w-[8%] text-semibold border-2 border-slate-500  text-sm text-center mt-6 rounded" onClick={() => handleSearch("flowers")}>Flowers</div>
        <div className="h-[10%] w-[8%] text-semibold border-2 border-slate-500  text-sm text-sm text-center mt-6 rounded" onClick={() => handleSearch("beaches")}>Beaches</div>
        <div className="h-[10%] w-[8%] text-semibold border-2 border-slate-500  text-sm text-center mt-6 rounded" onClick={() => handleSearch("cities")}>Cities</div>
      </div>
      {/* <div className="h-[10%] w-[30%] border-2 border-slate-500 text-orange-500	font-bold ml-[6%] mt-8 p-1 rounded">Animals</div> */}
      {/* <hr className="w-[60%] h-[5%] mt-3 ml-[20%]  border-2 border-slate-400" /> */}
      <div className="mt-[2%] grid grid-cols-4 mx-10 ml-[9%]">
        {data?.map((image) => (
          <img key={image.id} className="w-[80%] h-[65%]" src={image.urls.regular} alt={image.alt_description} />
        ))} 
      </div>
    </div>   
  );
}

export default App;
