import React from 'react'
import './Home.css'
// import { } from 'react-router-dom'
import { Button ,Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import HomeTable from '../../Components/HomeTable/HomeTable'
function Home() {
// js code
const navigate=useNavigate()
const adduser=()=>{
  // navigate to register page
  navigate('/register')
}
  return (
    <div className='Container mt-5'>
      <div className="main_div">
        {/* search btn , add employee */}
    <div className="search_Add d-flex justify-content-between">
<div className="search col-lg-4">
<div className="d-flex">
  <Form className ="d-flex">
  <Form.Control type="email" placeholder="Search"  className='me-2'/>
  <Button variant="primary">Search</Button>
  </Form>
</div>
<div className="add_btn">
<Button onClick={adduser} variant="success"><i className='fa-solid fa-user-plus'></i></Button>

</div>
</div>
    </div>
      </div>
      <div className="second_div">
        {/* table */}
        <HomeTable />
      </div>
    </div>
  )
}

export default Home