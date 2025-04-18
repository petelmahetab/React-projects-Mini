import React from 'react'
import { useState } from 'react'
const images = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJsfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXJsfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVybHxlbnwwfHwwfHx8MA%3D%3D', 'https://plus.unsplash.com/premium_photo-1661658474081-b3993bd5a302?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVybHxlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1691731574269-e005401c1d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHVybHxlbnwwfHwwfHx8MA%3D%3D', 'https://images.pexels.com/photos/13268478/pexels-photo-13268478.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://media.istockphoto.com/id/926382468/photo/global-satellite-internet-service-concept-3d-rendering.jpg?b=1&s=612x612&w=0&k=20&c=J1KRSdkcHXrzyB9Pl61RSZ5Iht8BW9ZthhadKGOFAG4=', 'https://media.istockphoto.com/id/1502704339/photo/adult-man-using-a-laptop-tick-correct-sign-mark-for-document-approval-and-checklist-planning.jpg?b=1&s=612x612&w=0&k=20&c=VIWniT6KTx3OVykNMhpw-cl1088y0QROBTfTdL--p7c=', 'https://media.istockphoto.com/id/1455952390/photo/system-hacked-warning-alert-on-notebook-cyber-attack-on-computer-network-virus-spyware.jpg?b=1&s=612x612&w=0&k=20&c=V5Xyhs4_gatl9Sr9jGrYdyiLwStnyMwzPyEFgQx2TY4=', 'https://media.istockphoto.com/id/1276936264/photo/creative-background-online-casino-in-a-mans-hand-a-smartphone-with-playing-cards-roulette-and.jpg?b=1&s=612x612&w=0&k=20&c=tUWY_V5rTrU7BUrhQi4TKz11XovhesYq31QzagkWT1M='
]

const App = () => {
  // We need to build an Image Loader using Lazy-Loading 2 states for selected and hoveredImage
  const [selected, setSelected] = useState(null)
  const [hoveredImage, sethoveredImage] = useState(null)
  return (
    <div className='images' style={{ display: 'grid', gridAutoColumns: 'repeat(auto-fit, minmax(150px, 1fr)', gap: '20px' }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Lazy Loaded Image Gallery
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px",
      }}>
        {images.map((src, id) => {
          return (
            <img src={src} key={id} loading='lazy' onClick={() => setSelected(src)}
              onMouseEnter={() => sethoveredImage(src)} onMouseLeave={() => sethoveredImage(null)}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",

                cursor: "pointer",
                transition: "transform 0.3s ease",
                transform: hoveredImage === src ? "scale(1.05)" : "scale(1)",
              }} />
          )
        })}
      </div>
      {/* Model-View  */}

      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        >
          <img src={selected} alt={selected} style={{
            maxWidth: "90%",
            maxHeight: "80%",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }} />
        </div>
      )}

    </div>

  )
}

export default App