const NavItem = (props) => {

    const hash = (hash) => {
        location.hash = "#" + hash;
    }

    return (
        <div onClick={() => {
            hash(props.hashName);
        }}>
            {props.name}
        </div>
    )
}

export default NavItem;