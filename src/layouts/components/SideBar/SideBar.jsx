import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu';
// import { faCoffee, faHome, faHouse } from '@fortawesome/free-solid-svg-icons'
import { LuDot } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { useState } from 'react';

const cx = classNames.bind(styles);

const userMenu = [
    {
        label: 'Quản Lý Đơn Hàng',
        data : [
            {
                name: 'Tất Cả',
                icon: <LuDot />,
                to: '/product',
            },
            {
                name: 'Giao Hàng Loạt',
                icon: <LuDot />,
                to: '/product',
            },
            {
                name: 'Đơn Hủy',
                icon: <LuDot />,
                to: '/product/add',
            },
            {
                name: 'Trả Hàng/Hoàn Tiền',
                icon: <LuDot />,
                to: '/product/rule',
            },
            {
                name: 'Cài Đặt Vận Chuyển',
                icon: <LuDot />,
                to: '/product/setting',
            },
        ]
    },
    {
        label: 'Quản Lý Sản Phẩm',
        data : [
            {
                name: 'Tất Cả Sản Phẩm',
                icon: <LuDot />,
                to: '/product',
            },
            {
                name: 'Thêm Sản Phẩm',
                icon: <LuDot />,
                to: '/product/add',
            },
            {
                name: 'Sản Phẩm Vi Phạm',
                icon: <LuDot />,
                to: '/product/rule',
            },
            {
                name: 'Cài Đặt Sản Phẩm',
                icon: <LuDot />,
                to: '/product/setting',
            },
        ]
    },
    {
        label: 'Quản Lý Sản Phẩm',
        data : [
            {
                name: 'Tất Cả Sản Phẩm',
                icon: <LuDot />,
                to: '/product',
            },
            {
                name: 'Thêm Sản Phẩm',
                icon: <LuDot />,
                to: '/product/add',
            },
            {
                name: 'Sản Phẩm Vi Phạm',
                icon: <LuDot />,
                to: '/product/rule',
            },
            {
                name: 'Cài Đặt Sản Phẩm',
                icon: <LuDot />,
                to: '/product/setting',
            },
        ]
    },
    {
        label: 'Quản Lý Sản Phẩm',
        data : [
            {
                name: 'Tất Cả Sản Phẩm',
                icon: <LuDot />,
                to: '/product',
            },
            {
                name: 'Thêm Sản Phẩm',
                icon: <LuDot />,
                to: '/product/add',
            },
            {
                name: 'Sản Phẩm Vi Phạm',
                icon: <LuDot />,
                to: '/product/rule',
            },
            {
                name: 'Cài Đặt Sản Phẩm',
                icon: <LuDot />,
                to: '/product/setting',
            },
        ]
    },
];

function SideBar() {
    const [activeIndex, setActiveIndex] = useState(false);
    const location = useLocation(); // Lấy thông tin về đường dẫn hiện tại

    const handleItemClick = () => {
        setActiveIndex(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')} onClick={() => handleItemClick()}>
                    <Link to="/dashboard" className={cx('texting', { active: location.pathname == '/dashboard'  })}>
                        <span className={cx('dashboard')} ><MdSpaceDashboard /></span>
                        Dashboard
                    </Link>
                </div>
                <div>
                    <Menu items={userMenu} location={location} />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
