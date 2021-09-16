/** 
 * @author: alexandercds
 * @description: 
 * @date: 14/septiembre/2021
**/
import './assets/sass/App.scss'; 
import logo from './assets/svgs/logo.svg';
import { ReactComponent as  IconFacebook} from './assets/svgs/icon-facebook.svg';
import { ReactComponent as  IconTwitter} from './assets/svgs/icon-twitter.svg';
import { ReactComponent as  IconInstagram} from './assets/svgs/icon-instagram.svg';
import illustration from './assets/svgs/illustration-mockups.svg';
import InputButton from './components/InputButton';
import Form from './components/Form';
import FabLink from './components/FabLink';
import { useForm } from 'react-hook-form'; 


const App = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        window.open("https://alexandercd.herokuapp.com/home")   
    }
    return (
        <section className="container">
            <div className="content">
                <div className="header"> 
                    <img alt="Logo Huddle Landing Page" src={logo} width="200" heigth="66" />
                </div>
                <div className="body"> 
                    <div className="col">  
                        <img className="illustration" alt="Illustration Mockups" src={illustration} width="710" heigth="510" />
                    </div>
                    <div className="col"> 
                        <h2>Build The Community</h2>
                        <h2>Your Fans Will Love</h2>
                        <p>
                            Huddle ew-imaginnes the way build communites. You have 
                            a voices, but so does your audience. Create connections with 
                            your users as you engage in genuine discussion.
                        </p>
                        <InputButton value="Register" handleClick={onSubmit}/> 
                    </div>
                </div>
                <div className="social-medial">  
                    <FabLink className="facebook"> 
                        <IconFacebook className="icon" /> 
                    </FabLink>
                    <FabLink className="twitter"> 
                        <IconTwitter className="icon" /> 
                    </FabLink>
                    <FabLink className="instagram"> 
                        <IconInstagram className="icon instagram" /> 
                    </FabLink>
                </div>
            </div>
        </section>
    );
}

export default App;
  