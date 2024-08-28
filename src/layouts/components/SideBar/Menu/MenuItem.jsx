import { useState } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ label, data }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const renderMenu = () => {
        return data.map((item, index) => (
            <div key={index}>
                <NavLink
                    className={cx('menu-item', { active: activeIndex === index })}
                    to={item.to}
                    onClick={() => handleItemClick(index)}
                >
                    {item.icon && <span className={cx('icon')}>{item.icon}</span>}
                    <span className={cx('title')}>{item.name}</span>
                </NavLink>
            </div>
        ));
    };

    return (
        <div className={cx('menu-nav')}>
            <p className={cx('menu-label')}>
                {label}
            </p>
            {renderMenu()}
        </div>
    );
}

export default MenuItem;
