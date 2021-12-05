import { Link } from "react-router-dom";
import './Error.scss';

const Error = () => {
    return (
        <section className="section-404">
            <div className="shell">
                <h1>Error 404. The page does not exist</h1>

                <div className="bl_page404__wrapper">
                    <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" alt="cloud_warmcasino.png"/>
                    <div className="bl_page404__el1"></div>
                    <div className="bl_page404__el2"></div>
                    <div className="bl_page404__el3"></div>

                    <Link class="bl_page404__link" to="/">go home</Link>
                </div>
            </div>
        </section>
    );
}

export default Error