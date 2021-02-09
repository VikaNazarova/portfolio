import IconButton from "./ui/IconButton";
import { 
    DiCss3, 
    DiHtml5, 
    DiJavascript1, 
    DiGit, 
    DiReact, 
    DiMongodb, 
    DiNodejsSmall, 
    DiPhp, 
    DiGoogleAnalytics 
} from "react-icons/di";
import { FaFrog, FaYandex } from "react-icons/fa";

const TechStack = () => {
    return (
        <div id="techStack" className="module">
            <h2>ТЕХНОЛОГИИ</h2>
            <div>
                <div>
                    <p>Я специализируюсь на <strong>front-end</strong> разработке (визуальной части сайта), но не боюсь <strong>back-end</strong>'а, <strong>баз данных</strong> и всего что с ними связано.</p>
                    <p>Имею большой опыт в поддержке и <strong>seo-оптимизации</strong> сайтов на различных CMS, таких как: <strong>Joomla</strong>, <strong>Bitrix</strong>, <strong>Wordpress</strong>, <strong>Tilda</strong>.</p>
                    <p>Сейчас я практикую разработку со стеком технологий: <strong>React</strong> / <strong>MongoDB</strong> / <strong>Node.js</strong>.</p>
                    <p>Список знакомых мне технологий, для тех кто понимает в этом</p>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="311" height="8" viewBox="0 0 311 8" fill="none">
                            <path d="M310.354 3.64645C310.549 3.84171 310.549 4.15829 310.354 4.35355L307.172 7.53553C306.976 7.7308 306.66 7.7308 306.464 7.53553C306.269 7.34027 306.269 7.02369 306.464 6.82843L309.293 4L306.464 1.17157C306.269 0.976311 306.269 0.659728 306.464 0.464466C306.66 0.269204 306.976 0.269204 307.172 0.464466L310.354 3.64645ZM0 3.5H310V4.5H0V3.5Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <h3>Разработка</h3>
                    <IconButton icon={DiHtml5} text="HTML5" />
                    <IconButton icon={DiCss3} text="CSS3" />
                    <IconButton icon={DiJavascript1} text="JavaScript" />
                    <IconButton icon={DiGit} text="Git" />
                    <IconButton icon={DiReact} text="React" />
                    <IconButton icon={DiMongodb} text="MongoDB" />
                    <IconButton icon={DiNodejsSmall} text="Node.js" />
                    <IconButton icon={DiPhp} text="PHP" />

                    <h3>SEO инструменты</h3>
                    <IconButton icon={FaFrog} text="Screaming Frog SEO Spider" />
                    <IconButton icon={FaYandex} text="Yandex.Webmaster" />
                    <IconButton icon={DiGoogleAnalytics} text="Google Analytics" />
                </div>
            </div>
        </div>
    );
  };
  
export default TechStack;