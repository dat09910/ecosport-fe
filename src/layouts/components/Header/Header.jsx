import style from '~/layouts/components/Header/Header.module.scss';
import classNames from 'classnames';
const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('color')}>
            Header
        </header>
    );
}

export default Header;
