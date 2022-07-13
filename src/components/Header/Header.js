import {HeaderWrapper, MyLink} from './Header.styled'
import Container from 'components/Container'

const Header = () => (
    <Container>
    <HeaderWrapper>
<nav>
    <MyLink to='/'>Home</MyLink>
    <MyLink to='/movies'>Movies</MyLink>
</nav>
</HeaderWrapper>
</Container>
)

export default Header