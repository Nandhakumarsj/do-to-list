import './Title.css';
import logo from '../assets/sjnk.ico';
const Title = (props) =>{
    return(
        <div className='heading'>
            <img src={logo} alt="Logo"/>
            <h1>
            {props.Title}
            </h1>
        </div>
    );
}
export default Title;