import Button from "./ui/Button";
import { FiHelpCircle, FiMail, FiSend, FiMessageCircle, FiCheckSquare } from "react-icons/fi";

const ServiceQuestion = () => {
    return (
        <div id="serviceQuestion" className="module background">
            <div>
                <h3>Не нашли услугу которую искали?</h3>
                <Button text="Спросите меня" component="a" href="#contacts" />
            </div>
            <div>
                <FiHelpCircle />
                <FiMail />
                <FiSend />
                <FiMessageCircle />
                <FiCheckSquare />
            </div>
        </div>
    );
  };
  
export default ServiceQuestion;