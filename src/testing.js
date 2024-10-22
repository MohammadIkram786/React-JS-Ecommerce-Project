//only for tesging not linkd


import logo from './logo.svg';
import './App.css';
import { Card, Col, Button,Dropdown, InputGroup, Nav, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Product } from './Product';
import { Category } from './Category';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let [finalCatg, setFinalCatg]=useState([]);
  let [finalProd, setFinalProd]=useState([]);
  let [clickCat, setClickCat]=useState('');

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((catg)=>
      catg.data
    )
    .then((finalRes)=>{
      setFinalCatg(finalRes)
    })
  }

  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((prod)=>
      prod.data
    )
    .then((finalRes)=>{
      setFinalProd(finalRes.products)
    })
  }

  useEffect(()=>{
    getCategory();
    getProduct();
  },[])

  useEffect(()=>{
    if(clickCat!==''){
    //console.log(clickCat)
    axios.get(`https://dummyjson.com/products/category/${clickCat}`)
    .then((prod)=>
      prod.data
    )
    .then((finalRes)=>{
      setFinalProd(finalRes.products)
    })
    }
  },[clickCat])

  return (
    <div className="container-fluid bg-info">
      <div className="row navigation fixed-top">
        <div className="navs col-sm-2 heading" style={{fontSize:'30px'}}>MyShop</div>
        <div className="navs col-sm-6 text-white">
          <div className="input-group mb-3 mt-3">
            <input type="search" className="form-control" placeholder="Search..."/>
            <button className="btn btn-outline-light" type="button">
              <FontAwesomeIcon icon={faSearch}/>
            </button>
          </div>
        </div>
        <div className="navs col-sm-4 text-white d-flex cartandmenu">
          <div className='m-auto'>
          <Dropdown className='menudrp'>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Products
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Fashion</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Decoration</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Kitchen</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gift</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
          </div>
          <div className='icons'>
          <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className='user'>
            <FontAwesomeIcon icon={faUser}/>
          </div>
          </div>
        </div>
      </div>

      <div className='row' style={{marginTop:'110px'}}>
        <div className='col-lg-2 col-md-3 col-sm-4 sidebar'>
          <Category final={finalCatg} setClickCat={setClickCat}/>
        </div>
        <div className='col-lg-10 col-md-9 col-sm-8 contentbar'>
          <div className='row' style={{justifyContent:'center'}}>
          <Product finalp={finalProd}/>
          <div className='row footer'> www.MyShop.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

