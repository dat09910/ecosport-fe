import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const userMenu = [
    {
        label: 'Quản Lý Sản Phẩm',
        data : [
            {
                name: 'Tất Cả Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Thêm Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Sản Phẩm Vi Phạm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Cài Đặt Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
        ]
    },
    {
        label: 'Quản Lý Sản Phẩm',
        data : [
            {
                name: 'Tất Cả Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Thêm Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Sản Phẩm Vi Phạm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Cài Đặt Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
        ]
    },
    {
        label: 'Quản Lý Sản Phẩm',
        data : [
            {
                name: 'Tất Cả Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Thêm Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Sản Phẩm Vi Phạm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Cài Đặt Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
        ]
    },
    {
        label: 'Quản Lý Sản Phẩm',
        data : [
            {
                name: 'Tất Cả Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Thêm Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Sản Phẩm Vi Phạm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Cài Đặt Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
        ]
    },
    {
        label: 'Quản Lý Sản Phẩm',
        data : [
            {
                name: 'Tất Cả Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Thêm Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Sản Phẩm Vi Phạm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
            {
                name: 'Cài Đặt Sản Phẩm',
                icon: <FontAwesomeIcon icon={faCoffee}/>,
                to: '/product',
            },
        ]
    },
];

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to="/dashboard" className={cx('texting')}>
                        Sport Logo
                    </Link>
                </div>
                <div style={{marginTop: '40px'}}>
                    <Menu items={userMenu} />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
