import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuItem({ label, data, location }) {
    const [activeMenu, setActiveMenu] = useState(true);

    const handleMenuActive = () => {
        setActiveMenu(prevState => !prevState);
    };

    const renderMenu = () => {
        return data.map((item, index) => (
            <div key={index}>
                <Link
                    className={cx('menu-item', { active: location.pathname === item.to })} // Kiểm tra đường dẫn hiện tại để áp dụng class 'active'
                    to={item.to}
                >
                    {item.icon && <span className={cx('icon')}>{item.icon}</span>}
                    <span className={cx('title')}>{item.name}</span>
                </Link>
            </div>
        ));
    };

    return (
        <div className={cx('menu-nav')}>
            <hr className={cx('line')} />
            <p className={cx('menu-label')} onClick={handleMenuActive}>
                <span>{label}</span>
                <span className={cx('icon-menu', { active: activeMenu })}>
                    <FontAwesomeIcon style={{ fontSize: '13px' }} icon={faChevronRight} />
                </span>
            </p>
            {activeMenu && renderMenu()}
        </div>
    );
}

export default MenuItem;
