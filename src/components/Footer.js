import Button from "./ui/Button";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
    return (
        <footer id="footer" className="background">
            <FiGithub />
            <p>Посмотреть код сайта, а так же другие мои проекты: </p>
            <Button text="GitHub" component="a" href="https://github.com/VikaNazarova" target="_blank" />
        </footer>
    );
  };
  
export default Footer;