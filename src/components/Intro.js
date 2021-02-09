import Button from "./ui/Button";
import Me from "../img/me.jpg"
import { FiMapPin } from "react-icons/fi";

let greeting; 
const time = new Date(); 
const hour = time.getHours(); 

if(hour < 12) greeting = 'Доброе утро!'; 
else if (hour < 16) greeting = 'Добрый день!'; 
else greeting = 'Добрый вечер!' 

const Intro = () => {
    return (
        <div id="intro" className="module">
            <div>
                <img src={Me} alt="Виктория Назарова"/>
            </div>
            <div>
                <h1>{greeting}</h1>
                <p>
                    Меня зовут Виктория Назарова, я веб-разработчик с опытом работы более 2х лет.
                </p>
                <p>
                    Занимаюсь: созданием и поддержкой сайтов, seo-оптимизацией.
                </p>
                <p>
                    <FiMapPin /> Нахожусь в <a href="https://goo.gl/maps/D7GGcW64WQQU9BDR8" target="_blank">Тольятти, Россия</a>
                </p>
                <br />
                <Button text="Связатся со мной" component="a" href="#contacts" />
            </div>
        </div>
    );
  };
  
export default Intro;