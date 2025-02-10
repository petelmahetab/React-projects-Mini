import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './style.css';
function Index({ url }) {
    const [Images, setImages] = useState([]);
    const [Error, setError] = useState(null);
    const [loading, setloading] = useState(false);

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
        console.log("Images updated:", Images); // Debug Images state
    }, [Images]);

    if (loading) {
        return <div
        style={{ textAlign:'center'}}
    >Loading Data ..! Please Wait.</div>;
    }

    if (Error) {
        return <div>Error Occurred: {Error}</div>;
    }

    return (
        <div className="container">
            {/* Arrow left */}
            
            <BsArrowLeftCircleFill className='left'/>
            {Images.length > 0 ? (
                Images.map((image) => (
                    <div key={image.id}>
                        <img
                            src={image.download_url}
                            alt={`Image by ${image.author}`}
                            style={{ maxWidth: '100%', height: 'auto' }}
                            className='current-image'
                        />
                        <p>{`Author: ${image.author}`}</p>
                    </div>
                ))
                
            ) : (
                <p>No images available.</p>
            )}
            <BsArrowRightCircleFill className='right'/>
        </div>
    );
}

export default Index;
