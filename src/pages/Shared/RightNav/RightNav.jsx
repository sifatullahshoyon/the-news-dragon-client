import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import QZone from '../QZone/QZone';
import Bg from '../../../components/Bg/Bg';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='mb-4'>Login With</h4>
                <Button variant="outline-primary" className='mb-2'><FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary" className='mb-5'><FaGithub /> Login With Github</Button>
            </div>
            <div className='mb-5'>
                <h4 className='mb-4'>Find Us On</h4>
                <ListGroup>
      <ListGroup.Item className='p-4'><FaFacebook /> Facebook</ListGroup.Item>
      <ListGroup.Item className='p-4'><FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item className='p-4'><FaInstagram /> Instagram</ListGroup.Item>
    </ListGroup>
            </div>
            <QZone />
            <Bg />
        </div>
    );
};

export default RightNav;