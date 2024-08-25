// src/components/AddPostComponent.js
import React, { useState } from 'react';
import DoughnutChart from './DoughnutChart.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemNameCspm, addCspm, updateItemNameCwpp, addCwpp, addImage, addTicket, updateItemNameImage, updateItemNameTicket } from './store';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const AddPostComponent = () => {
  const cspm = useSelector((state) => state.cspm);
  const cwpp=useSelector((state) => state.cwpp);
  const image=useSelector((state) => state.image);
  const ticket=useSelector((state) => state.ticket);
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(null); 
  const [showWidget, setShowWidget] = useState(false);
  const [typee, setTypee]= useState('');
const [selectedIds, setSelectedIds] = useState([]);
const toggleSelection = (id, type) => {
  setTypee(type);
  setSelectedIds((prevSelectedIds) => {
    if (prevSelectedIds.includes(id)) {
      return prevSelectedIds.filter((selectedId) => selectedId !== id);
    } else {
      return [...prevSelectedIds, id];
    }
  });
};
  const handleCloseWidget = () => {
    setShowWidget(false);
  }
  const handleShowWidget = () => {
    setShowWidget(true);
  }
  const handleShow = (id) => {
    setShowModal(id);
    setName('');
  }
  const handleClose = () => {
    
    setShowModal(null);
    setName('');
  }
const handleSubmitCspm=(id)=>{
  dispatch(addCspm(id, name));
  setName(''); 
  setShowModal(null)
}
const handleSubmitCwpp=(id)=>{
  dispatch(addCwpp(id, name));
  setName(''); 
  setShowModal(null)
}
const handleSubmitImage=(id)=>{
  dispatch(addImage(id, name));
  setName(''); 
  setShowModal(null)
}
const handleSubmitTicket=(id)=>{
  dispatch(addTicket(id, name));
  setName(''); 
  setShowModal(null)
}
  const handleChange=(e)=>{
    setName(e.target.value)
  }
  const handleUpdateName =()=>{
    selectedIds.forEach((id) => {
    switch (typee) {
      case 'cspm':
        setName(''); 
      dispatch(updateItemNameCspm(id, name));
      setShowWidget(false)
      break
      case 'cwpp':
        setName(''); 
      dispatch(updateItemNameCwpp(id, name));
      setShowWidget(false)
      break
      case 'image':
        setName(''); 
      dispatch(updateItemNameImage(id, name));
      setShowWidget(false);
      break
      case 'ticket':
        setName(''); 
      dispatch(updateItemNameTicket(id, name));
      setShowWidget(false)
      break
      default:
        break
    }
  })
  setSelectedIds([]);
  }
  const handleUpdateNameCspm = (id) => {
    setName(''); 
      dispatch(updateItemNameCspm(id, name));
      setShowWidget(false)
    
  };
  const handleUpdateNameCwpp = (id) => {
    setName(''); 
      dispatch(updateItemNameCwpp(id, name));
    
  };
  const handleUpdateNameImage = (id) => {
    setName(''); 
      dispatch(updateItemNameImage(id, name));
    
  };
  const handleUpdateNameTicket = (id) => {
    setName(''); 
      dispatch(updateItemNameTicket(id, name));
    
  };
  const filteredCspm = cspm.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredCwpp = cwpp.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredImage = image.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredTicket = ticket.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div>
      <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
      <Navbar.Brand href="">CNAPP Dashboard</Navbar.Brand>
      </Form>
      
        <div className="d-flex align-items-center">
        
        <Button variant='light' onClick={handleShowWidget} type="submit">Add Widget</Button>
        <Modal show={showWidget} onHide={handleCloseWidget} style={{ overflow: 'hidden' }}>
          <Modal.Dialog style={{width: '100%', position: 'absolute', right: 0,  top: 0, }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{width:"50%",height: '70vh', margin: 0}}> 
          
          <Tabs defaultActiveKey="CSPM" id="uncontrolled-tab-example" fill style={{ display: 'flex',flexDirection: 'row',justifyContent: 'space-evenly'}} className="mb-3" variant="tabs">
      <Tab eventKey="CSPM" title="CSPM">
       {filteredCspm.filter((item) => item.name).map((item)=>(
           <Form.Check key={item.id}  checked={selectedIds.includes(item.id)} type='checkbox' onClick={() => toggleSelection(item.id, 'cspm')}  label={item.name}/>
       ))}
      </Tab>
      <Tab eventKey="CWPP" title="CWPP">
      {filteredCwpp.filter((item) => item.name).map((item)=>(
             <Form.Check key={item.id}  checked={selectedIds.includes(item.id)} type='checkbox' onClick={() => toggleSelection(item.id, 'cwpp')}  label={item.name}/>
       ))}
      </Tab>
      <Tab eventKey="IMAGE" title="IMAGE">
      {filteredImage.filter((item) => item.name).map((item)=>(
             <Form.Check key={item.id}  checked={selectedIds.includes(item.id)} type='checkbox' onClick={() => toggleSelection(item.id,'image')}  label={item.name}/>
       ))}
      </Tab>
      <Tab eventKey="Ticket" title="Ticket">
      {filteredTicket.filter((item) => item.name).map((item)=>(
             <Form.Check key={item.id}  checked={selectedIds.includes(item.id)} type='checkbox' onClick={() => toggleSelection(item.id, 'ticket')}  label={item.name}/>
       ))}
      </Tab>
    </Tabs>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseWidget}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleUpdateName()}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal.Dialog>
      </Modal>
        
        <Form className="d-flex ms-2">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 "
              onChange={(e) => setSearchQuery(e.target.value)}/>
            </Form>
          
        </div>
      
    </Navbar>
    
      <Row inline> 
        <div  style={{fontWeight: '400', lineHeight: '1.2', fontSize: '1.25rem', marginTop:'20px'}}>CSPM Executive Dashboard </div>
      {filteredCspm.map((cspm) => (
        <Col md={4} key={cspm.id}>
     <Card  style={{ width: '100%',height:'325px',position: 'relative',borderRadius:'8px',  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className='mb-2'>
    {cspm.name? <><Card.Title><span style={{position: 'absolute', top: '10px', left: '10px'}}>{cspm.name}</span>
    <div style={{position: 'absolute', top: '10px', right: '10px'}}>
    <CloseButton onClick={() => handleUpdateNameCspm(cspm.id)} />
  </div>
      </Card.Title>
      <Card.Body>
        
         <DoughnutChart chartData={cspm} />     
        </Card.Body></>

:<><div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
<Button variant='light' onClick={() =>handleShow(cspm.id)} type="submit">Add Widget</Button>
</div>
<Modal show={showModal === cspm.id} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCspm(cspm.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal></>
  
}
      </Card>
      </Col>
       ))}
       </Row>

       <Row inline> 
       <div  style={{fontWeight: '400', lineHeight: '1.2', fontSize: '1.25rem', marginTop:'20px'}}>CWPP Dashboard </div>
      {filteredCwpp.map((cwpp) => (
        <Col md={4} key={cwpp.id}>
     <Card  style={{ width: '100%',height:'325px',position:'relative',borderRadius:'8px',  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className='mb-2'>
    {cwpp.name? <><Card.Title><span style={{position: 'absolute', top: '10px', left: '10px'}}>{cwpp.name}</span>
    <div style={{position: 'absolute', top: '10px', right: '10px'}}>
    <CloseButton onClick={() => handleUpdateNameCwpp(cwpp.id)} />
  </div>
      </Card.Title>
      <Card.Body>
        
         <DoughnutChart chartData={cwpp} />     
        </Card.Body></>

:<><div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
<Button variant='light' onClick={() =>handleShow(cwpp.id)} type="submit">Add Widget</Button>
</div>
<Modal show={showModal === cwpp.id} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCwpp(cwpp.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal></>
  
}
      </Card>
      </Col>
       ))}
       </Row>

       <Row> 
       <div  style={{fontWeight: '400', lineHeight: '1.2', fontSize: '1.25rem', marginTop:'20px'}}>Registry Scan </div>
      {filteredImage.map((image) => (
        <Col md={4} key={image.id}>
      <Card  style={{ width: '100%',height:'325px',position:'relative',borderRadius:'8px',  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className='mb-2'>
    {image.name? <><Card.Title><span style={{position: 'absolute', top: '10px', left: '10px'}}>{image.name}</span>
    <div style={{position: 'absolute', top: '10px', right: '10px'}}>
    <CloseButton onClick={() => handleUpdateNameImage(image.id)} />
  </div>
      </Card.Title>
      <Card.Body>
        
         <DoughnutChart chartData={image} />     
        </Card.Body></>

:<><div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
<Button variant='light' onClick={() =>handleShow(image.id)} type="submit">Add Widget</Button>
</div>
<Modal show={showModal === image.id} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitImage(image.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal></>
  
}
      </Card>
      </Col>
       ))}
       </Row>

       <Row> 
       <div style={{fontWeight: '400', lineHeight: '1.2', fontSize: '1.25rem', marginTop:'20px'}}>Ticket Registry </div>
      {filteredTicket.map((ticket) => (
        <Col md={4} key={ticket.id}>
      <Card  style={{ width: '100%',height:'325px',position:'relative',borderRadius:'8px',  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className='mb-2'>
    {ticket.name? <><Card.Title><span style={{position: 'absolute', top: '10px', left: '10px'}}>{ticket.name}</span>
    <div style={{position: 'absolute', top: '10px', right: '10px'}}>
    <CloseButton onClick={() => handleUpdateNameTicket(ticket.id)} />
  </div>
      </Card.Title>
      <Card.Body>
        
         <DoughnutChart chartData={ticket} />     
        </Card.Body></>

:<><div className="d-flex align-items-center justify-content-center" style={{ height: '100%'}}>
  <Button variant='light' onClick={() =>handleShow(ticket.id)} type="submit">Add Widget</Button>
  </div>
<Modal show={showModal === ticket.id} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitTicket(ticket.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal></>
  
}
      </Card>
      </Col>
       ))}
       </Row>
      
      </div>
    
  );
};

export default AddPostComponent;
