const NavItem = (props) => {

    const hash = (hash) => {
        location.hash = "#" + hash;
    }

    return (
        <div className="hover:shadow-lg hover:bg-red-900" onClick={() => {
            hash(props.hashName);
        }}>
            {props.name}
        </div>
    )
}

export default NavItem;