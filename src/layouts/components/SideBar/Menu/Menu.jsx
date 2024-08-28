import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem  from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    label={item.label}
                    data={item.data}
                />
            );
        });
    };
    return <div>{renderItems()}</div>
}

export default Menu;