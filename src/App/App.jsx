import React from "react"
import Conteiner from "../Conteiner/Conteiner"
import Imagem from "../ImagemConteiner/Imagem"
import img from "../../stats-preview-card-component-main/images/image-header-desktop.jpg"
import './App.css'
const App = () =>{
    return(
        <> 
            <div className="containerFilho"> 
            <Conteiner cor='hsl(244, 38%, 16%)'/>
            <h1 className="titulo"> <Conteiner titulo={"Get insights that help"}/></h1>
            <h1 className="part2"><Conteiner titulo={"your business grow. "}/></h1>
<h2 className="subTitulo"><Conteiner subTitulo={"Discover the benefits of data analytics and make"} /></h2>
<h2 className="subPart2"> <Conteiner subTitulo={"better decisions regarding revenue, costomer"}/></h2> 
<h2  className="subPart3" > <Conteiner subTitulo={"experience, and overall efficiency."}/></h2>
</div>

<div className="conteinerImg">
    <Imagem imagem={img} />
   
</div>
 </>
 )
} 


export default App;