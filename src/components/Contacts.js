import { FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const Contacts = () => {
    return (
        <div id="contacts" className="module">
            <h2>СВЯЗАТСЯ СО МНОЙ</h2>
            <div>
                <div>
                    <FiMail /> <b>Почта:</b> <a href="mailto:vikanaz98@gmail.com">vikanaz98@gmail.com</a>
                </div>
                <div>
                    <FiPhone /> <b>Телефон:</b> <a href="tel:+79033338988">+7 903 333 89 88</a>
                </div>
                <div>
                    <FiMessageSquare /> <b>Телеграм:</b> <a href="https://t.me/VikaNaz">t.me/VikaNaz</a>
                </div>
            </div>
        </div>
    );
  };
  
export default Contacts;