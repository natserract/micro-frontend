
import styled from 'vue-styled-components'
import Brand from './brand.header'
import SearchForm from './search.header'

export default {
    name: 'Header',
    render() {
        return (
            <HeaderContainer>
                <HeaderWrapper>
                    <SearchSection>
                        <Brand />
                        <ButtonSearch>
                            <SearchIcon class="fas fa-search"/>
                        </ButtonSearch>
                    </SearchSection>
                </HeaderWrapper>
            </HeaderContainer>
        )
    },
    components: {
        HeaderContainer,
        HeaderWrapper,
        SearchSection,
    },
}

const HeaderContainer = styled.header`
    position: fixed;
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
    height: 60px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
    padding: 48px 16px;
    color: #fff;
`
const SearchSection = styled.div`
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
    color: #fff;
    font-size: 20px;
    transition: all .2s;

    &:hover {
        color: #e6375a;
    }
`