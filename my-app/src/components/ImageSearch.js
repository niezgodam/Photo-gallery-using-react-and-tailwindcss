import React,{useState} from 'react';



function ImageSearch({searchText}){
    const [text,setText] = useState('');


    function onSubmit(e){
        e.preventDefault();
        searchText(text)
    }
    
    
  return (
    <div className="flex justify-center my-14">
        <div className="overflow-hidden rounded sm:max-w-sm">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex items-center py-2 border-b-2 border-teal-500">
                <input onChange={e => setText(e.target.value)} className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="Search Image Term..."/>
                <button className="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700" type="submit">
                Search
                </button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default ImageSearch;
