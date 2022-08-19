//footer component is inserted.
import Button from 'react-bootstrap/Button';
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = (props) => {
    return(
        <>
        <footer>
            <span>{props.footer}</span>
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <Button variant="primary">{props.button}</Button>
            
        </footer>
       </>
    )
}

export default Footer;