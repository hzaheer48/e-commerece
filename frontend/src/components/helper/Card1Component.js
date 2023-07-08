import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import slider2 from '../../images/slider2.jpg'
function BasicExample({width}) {
  return (
    <Card style={{ width:width, margin: '10px', padding: '10px' }}>
      <Card.Img variant="top" src={slider2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default BasicExample;