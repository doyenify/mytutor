import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const Videocourse = () => {
  return (
    <div>
     <Card>
      <Card.Body>
        <ReactPlayer url="https://www.youtube.com/live/0ZH2eH-hT2I?feature=share" controls />
      </Card.Body>
    </Card>
    </div>
  )
}

export default Videocourse