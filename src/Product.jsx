import { Card, Col, Button,Dropdown, InputGroup, Nav, Row } from 'react-bootstrap';
import iphone from './iphon.jpeg';

export function Product({finalp}){
    //console.log(finalp)
    let pro= finalp.map((v,i)=>{
        return(
        <Card key={i} style={{ width: '350px', margin:'10px', textAlign:'center'}} className='cards'>
        <Card.Img variant="top" src={v.thumbnail} style={{ width: '100%'}}/>
        <Card.Body>
        <Card.Title style={{ color:'dodgerblue' }}>{v.title}</Card.Title>
        <Card.Text>
        {v.description}
        </Card.Text>
        </Card.Body>
        </Card>
        )
    })
    return(
        <Row style={{justifyContent:'center', marginBottom:'200px'}}>
            {pro}
        </Row>
        
    )
}