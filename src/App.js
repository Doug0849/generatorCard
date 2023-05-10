import Navbar from './components/Navbar';
import React from 'react';

// function downloadImage() {
//   html2canvas(document.querySelector("#capture"))
//   .then(canvas => {
//     let a = document.createElement("a");
//     a.href = canvas
//       .toDataURL("image/jpeg", 1)
//       .replace("image/jpeg", "image/octet-stream");
//     a.download = "image.jpg";
//     a.click();
//   })
// }

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    
    </>
  );
}
