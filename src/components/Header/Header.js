import {HeaderWrapper, MyLink} from './Header.styled'

const Header = () => (
    <HeaderWrapper>
<nav>
    <MyLink to='/'>Home</MyLink>
    <MyLink to='/movies'>Movies</MyLink>
</nav>
</HeaderWrapper>
)

export default Header