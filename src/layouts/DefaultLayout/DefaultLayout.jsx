import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <h2>DefaultLayout</h2>
        </div>
    )
}

export default DefaultLayout;