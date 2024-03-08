import React from 'react';

export function ImageCard({image}){
    const tags = image.tags.split(",");
    console.log(tags);
  return (
    <div>
      <div className = "shadow-lg max-w-s moverflow-hidden rounded-4xl shadow-black min-h-[560px] max-h-[560px]">
        <div className="flex justify-center">
          <img src={image.webformatURL} alt={image.tags} className='max-h-[350px] min-h-[350px]'></img>
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-center text-purple-800">
              Photo by {image.user}
          </div>
          <ul>
            <li><strong>Views:</strong> {image.views}</li>
            <li><strong>Downloads:</strong> {image.downloads}</li>
            <li><strong>Likes:</strong> {image.likes}</li>
          </ul>
        </div>
          {tags.map( (tag,index) => 
          <span key={index} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 rounded-full bg-slate-100">
              #{tag}
          </span>)}
      </div>
    </div>
  )
}

export default ImageCard;