import Header from '~/layouts/components/Header';
import Slidebar from '~/layouts/components/SideBar';
import style from './MerchantLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
// eslint-disable-next-line react/prop-types
function MerchantLayout({ children }) {
    return (
        <div className={cx('wrapper')} >
            <Slidebar />
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
}

export default MerchantLayout;
