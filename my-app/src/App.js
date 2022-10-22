import './App.css';
import React, {useState, useEffect} from 'react'
function App() {
  
  const [images, setImages] = useState([])
  const [second, setSecond] = useState([])
  const [imageURLs, setImageURLs] = useState([])
  const [secondImage, setSecondImage] = useState([])
  
  useEffect(() => {
    if (images.length < 1) return
    const newImageUrls = []
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
    setImageURLs(newImageUrls)
  }, [images]);

  useEffect(() => {
    if (second.length < 1) return
    const newSecondImage = []
    second.forEach(aimage => newSecondImage.push(URL.createObjectURL(aimage)))
    setSecondImage(newSecondImage)
  }, [second]);

  async function onImageChange(e) {
    e.preventDefault()
    setImages([...e.target.files])
  }
  
  async function onSecondImageChange(e) {
    setSecond([...e.target.files])
  }

  async function submitHandler(e) {
    e.preventDefault()
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <article class="float">
        <div class="float-left">
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
        { imageURLs.map(imageSrc => <img className='images' src={imageSrc} />)}
        </div>
        <div class="float-right">
        <input type="file" multiple accept="image/*" onChange={onSecondImageChange} />
        { secondImage.map(aimageSrc => <img className='images' src={aimageSrc} />)} 
        </div>
        
      </article>
        
        <button class="button-56" role="button" onClick={submitHandler}>Submit</button>
      </header>
      
    </div>
    
  );
}

export default App;
