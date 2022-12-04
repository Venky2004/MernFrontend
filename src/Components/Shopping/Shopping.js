import React from 'react'
import Product from './Product'
import './Shopping.css'
import './SearchBar.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";


const Shopping = () => {
    const [productList,setproductlist]=useState([]);
    const [data,setdata]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:2000/api/products").then((response)=>{
          setproductlist(response.data);
          setdata(response.data);
          console.log(productList)
        })
      },[]);

      const [filteredData, setFilteredData] = useState([]);
      const [wordEntered, setWordEntered] = useState("");
  
      const handleFilter = (event) => {
          const searchWord = event.target.value;
          setWordEntered(searchWord);
          const newFilter = data.filter((value) => {
              return value.pname.toLowerCase().includes(searchWord.toLowerCase());
          });
          if (searchWord === "") {
              setFilteredData([]);
          } else {
              setFilteredData(newFilter);
              setdata(filteredData);
          }
      };
  
      const clearInput = () => {
          setFilteredData([]);
          setWordEntered("");
      };

      const filterResult=(cat)=>{
        if(cat==='all'){
            setdata(productList);
        }
        else{
        const result=productList.filter((curData)=>{
            return curData.category===cat;
        })
    setdata(result)}
      }
      const filterResults=(cat)=>{
        const result=data.filter((curData)=>{
            return curData.deliverable===cat;
        })
    setdata(result)
      }
    return (
       <div className='row mt-5'>
        <div className='col-md-3'  style={{backgroundColor:'white'}}>
            <br/>
            <h3>Search</h3>
            <div className="search" >
            <div className='searchInputs' >
                <input
                    type="text"
                    placeholder="Enter Product Name"
                    value={wordEntered}
                    onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon sx={{ color: "black" }} />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} sx={{ color: "black" }} />
                    )}
                </div>
            </div>
        </div>
            <h3>Filters</h3>
            <div>
                <h5>Category</h5>
               <div className='row'>
                <div className='col-md-1'>
                    <Button onClick={()=>filterResult('Fruits')}>Fruits</Button>
                    <Button onClick={()=>filterResult('Pulses')}>Pulses</Button>
                    <Button onClick={()=>filterResult('Grains')}>Grains</Button>
                    <Button onClick={()=>filterResult('Vegetables')}>Vegetables</Button>
                    <Button onClick={()=>filterResult('Aqua Products')}>Aqua Products</Button>
                    <Button onClick={()=>filterResult('all')}>ALL</Button>
                </div>
               </div>
               <div>
               <h5>Deliverable</h5>
              <Button onClick={()=>filterResults('Yes')}>Yes</Button>
                    </div>
            </div>
            </div>
        <div className='col-md-8 row' style={{backgroundColor:'white'}}>
        <br />
        {data.map((val,key)=>{{return(<li style={{margin:25}} className="col-md-3"><Product key={key}  pname={val.pname} quantity={val.quantity} price={val.price}  deliverable={val.deliverable} fname={val.fname} phone={val.phno} address={val.faddress} des={val.description}/></li>);}})}
        </div>
       </div>
    )
}

export default Shopping