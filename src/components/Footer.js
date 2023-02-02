import './Footer.css';
const Footer =({author}) =>{
    return(
        <div className="footer">
            <h4>
                {"Made with 💖 by"+author+"❤ "}
            </h4>
        </div>
    )
}
export default Footer;