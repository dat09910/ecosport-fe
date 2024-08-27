import Header from '~/layouts/components/Header';
import Slidebar from '~/layouts/components/SideBar';
import style from './MerchantLayout.module.scss'
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(style);
// eslint-disable-next-line react/prop-types
function MerchantLayout({ children }) {
    const [count, setCount] = useState(0)

    function clickMe() {
        setCount(count + 1)
    }

    return (
        <div className={cx('wrapper')} >
            <Header />
            <div className={cx('container')} >
                <Slidebar />
                <div className={cx('content')}>
                    <Button className={cx('button')} large  onClick={clickMe} >Click Me</Button>
                    <h3>Count: {count}</h3>    
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MerchantLayout;
