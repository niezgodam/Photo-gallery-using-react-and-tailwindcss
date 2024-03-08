import React from 'react';
import {useState, useEffect} from 'react';
import {ImageCard} from './components/ImageCard.js';
import ImageSearch from './components/ImageSearch.js';

export default function App() {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [term,setTerm] = useState('');
  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  },[term])
  
  return (
    <div className="container mx-auto mb-10">
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <div className="flex justify-center mx-auto text-4xl center">
        <h1 className="p-4 font-bold text-white bg-red-600">No images. Try other search</h1>
        </div>}
      
      {isLoading ? <h1 className="mx-auto text-2xl text-center md:text-6xl">Loading...</h1> : <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map(image => 
          <ImageCard key={image.id} image={image}/>
          )}
      </div>}
    </div>
  );
}

