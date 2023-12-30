import React from 'react';
import './App.css';
import Perkenalan from './components/Perkenalan'
import ProductCard from './components/ProductCard'

//Parent component
// function App() {
//   return (
//     <div className='cards'>
//       <ProductCard 
//         name="Gracia" 
//         desc="Pawangnya teacher teacher"
//         imageURL="https://i.pinimg.com/236x/f5/49/bd/f549bd8a2f67d66155168e1e665c47d3.jpg" 
//       />

//       <ProductCard 
//         name="Marsha" 
//         desc="Cahaya asia"
//         imageURL="https://i.pinimg.com/564x/ee/c7/92/eec79296f6529e683aef9f5902a43527.jpg" 
//       />

//       <ProductCard 
//         name="Shani" 
//         desc="Lebih dari sempurna"
//         imageURL="https://i.pinimg.com/564x/68/31/ca/6831caffffe121c7efdd8cd566238cf4.jpg" 
//       />

//       <ProductCard 
//         name="Freya" 
//         desc="Pemilik senyum karamel"
//         imageURL="https://i.pinimg.com/564x/45/91/ab/4591ab88506a77e40c36bc95f80fe4dd.jpg" 
//       />

//     </div>
//   );
// }

//         INI MERUPAKAN SHOW DATA LIST  
const App = () => {
  const datas = [{nama: "Ammmmmm", hobi:"tidur"},
                {nama: "Udin", hobi:"jeketian"},
                {nama: "Asep", hobi:"makan"},
                {nama: "Utuh", hobi:"jalan-jalan"}]
  return (
    <div>
      {datas.map(data => {
        return <Perkenalan nama={data.nama}  hobi={data.hobi}/>
      })}
    </div>
  )
}

export default App;
