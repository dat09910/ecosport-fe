import MenuItem  from './MenuItem';

function Menu({ items = [], location  }) {
    const renderItems = () => {
        return items.map((item, index) => {
            
            return (
                <MenuItem
                    key={index}
                    label={item.label}
                    data={item.data}
                    location={location}
                />
            );
        });
    };
    return <div>{renderItems()}</div>
}

export default Menu;