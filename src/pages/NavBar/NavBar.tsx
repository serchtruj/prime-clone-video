import './NavBar.css';
import { NavTitles } from '../../Utils/NavTitles';

function NavBar() {
    function NavBarItem(props: {text: string, icon: string}) {
        return (
            <div className="NavBarItem">
                <h3>{props.text}</h3>
                <h3>{props.icon}</h3>
            </div>
        );
    }
    console.log(NavTitles)
    return (
        <div className="NavBar">
            <h2>Prime Video Clone</h2>
            <p>Search Button</p>
            <p>Profile Name</p>
            <p>Avatar image</p>
        </div>
    );
} 

export default NavBar;