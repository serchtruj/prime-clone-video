import './NavBar.css';
import { NavBarMenu } from './NavBarMenu'
import { AvatarProfile } from './AvatarProfile'
import { NavTitles } from '../../Utils/NavTitles';

function NavBar() {
  /*
const [isTop, setIsTop] = useState(true);

const handleScroll = () => {
const scrollTop = window.pageYOffset;

if (scrollTop === 0) {
  setIsTop(true);
} else {
  setIsTop(false);
}
};

console.log(isTop ? 'You are at the top of the page' : 'You are not at the top of the page')
window.addEventListener('scroll', handleScroll);
*/
  return (
    <div className="navbar__container">
      <div className='navbar__border__left'></div>
      <div className="navbar__title__container">
        <h3 className='navbar__name'>prime Video Clone</h3>
        <NavBarMenu titles={NavTitles} />
        <AvatarProfile />
      </div>
      <div className='navbar__border__right'></div>
    </div>
  );
}

export default NavBar;