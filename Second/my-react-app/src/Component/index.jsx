import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './style.css';
function Index({ url }) {
    const [Images, setImages] = useState([]);
    const [Error, setError] = useState(null);
    const [loading, setloading] = useState(false);
    const [handlemove, setHandlemove] = useState(0);


    async function fetchUrl() {
        setloading(true);
        try {
            const response = await fetch(url); // Directly use the provided URL
            const data = await response.json();
            console.log("API Data:", data); // Debug API response
            if (data) {
                setImages(data);
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        if (url) fetchUrl();
    }, [url]);

    useEffect(() => {
        console.log("Images updated:", Images);
    }, [Images]);

    if (loading) {
        return <div style={{ textAlign:'center'}}>Loading Data ..! Please Wait.</div>;
    }

    if (Error) {
        return <div>Error Occurred: {Error}</div>;
    }
console.log(Images)

// handle left icon
function handleLeft(){
   setHandlemove((handlemove)=>
   handlemove === 0 ? Images.length-1 : handlemove-1 )
}
//handle right icon
function handleRight(){
    setHandlemove((handlemove)=>
    handlemove === Images.length-1 ? 0 : handlemove+1 )
 } 
return (
        <div className="container">
            {/* Arrow left */}
            
            <BsArrowLeftCircleFill className='left' onClick={handleLeft}/>
            {Images.length > 0 ? (
               
                    <div key={Images[handlemove].id}>
                        <img
                            src={Images[handlemove].download_url}
                            alt={`Image by ${Images[handlemove].author}`}
                            style={{ maxWidth: '100%', height: 'auto' }}
                            className='current-image'
                        />
                        <p>{`Author: ${Images[handlemove].author}`}</p>
                    </div>
                
            ) : (
                <p>No images available.</p>
            )}
            <BsArrowRightCircleFill className='right' onClick={handleRight}/>
        </div>
    );
}

export default Index;
