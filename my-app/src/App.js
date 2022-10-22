import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
function App() {
  
  const [images, setImages] = useState([])
  const [imageURLs, setImageURLs] = useState([])
  
  useEffect(() => {
    if (images.length < 1) return
    const newImageUrls = []
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
    setImageURLs(newImageUrls)
  }, [images]);

  async function onImageChange(e) {
    e.preventDefault()
    setImages([...e.target.files])
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
        { imageURLs.map(imageSrc => <img className='images' src={imageSrc} />)}
      </header>
    </div>
  );
}

export default App;
