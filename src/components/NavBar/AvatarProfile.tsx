import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconLookup } from '@fortawesome/fontawesome-common-types'

const searchIcon: IconLookup = { prefix: 'fas', iconName: 'magnifying-glass' }
const avatarImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

function AvatarProfile() {
    return (
        <div className="navbar__profile__container">
            <div className="navbar__search__btn">
                <FontAwesomeIcon icon={searchIcon} />
            </div>
            <div className="avatar__container">
                <h3 className='avatar__titles'>Name</h3>
                <img className="avatar__image" src={avatarImage} alt="profile-picture" />
            </div>
        </div>
    )
}

export { AvatarProfile };