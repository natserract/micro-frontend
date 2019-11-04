
import styled from 'vue-styled-components'
import Brand from './brand.header'
import SearchFilter from './search.input.header'
import MenuHeader from './menu.header'

export default {
    name: 'Header',
    render() {
        return (
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderMain>
                        <Brand />
                        <MenuHeader>asda</MenuHeader>
                    </HeaderMain>
                </HeaderWrapper>

                {/* <!--- Search Filter --> */}
                <HeaderWrapper>
                    <SearchFilter />
                </HeaderWrapper>
            </HeaderContainer>
        )
    },
    components: {
        HeaderContainer,
        HeaderWrapper,
        HeaderMain,
    },
}

const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 200;
    height: 60px;
`

const HeaderWrapper = styled.div`
    max-width: 820px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
    color: #fff;

    &:first-child {
        height: 60px;
        padding: 48px 16px 20px;
    }
`
const HeaderMain = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    width: 100%;
    align-items: center;
`
const ButtonSearch = styled.div`
    height: 20px;
    width: 20px;
    cursor: pointer;
`
const SearchIcon = styled.i`
    color: #e2e2e2;
    font-size: 20px;
    transition: all .2s;

    &:hover {
        color: #e6375a;
    }
`