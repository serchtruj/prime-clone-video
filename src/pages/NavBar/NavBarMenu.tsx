
interface NavMenuProps {
    titles: { name: string, icon: string }[]
}

function NavBarItem(props: { name: string, icon: string }) {
    return (
        <div className="navbar__item">
            <h3>{props.name}</h3>
            <h3>{props.icon}</h3>
        </div>
    );
}

function NavBarMenu({ titles }: NavMenuProps) {
    return (
        <div className="navbar__menu__container">
            {titles.map((item, index) => {
                return <NavBarItem key={index} name={item.name} icon={item.icon} />
            })}
        </div>
    )
}

export { NavBarMenu };