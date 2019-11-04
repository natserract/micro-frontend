

import styled from 'vue-styled-components'

export default {
    name: 'Brand',
    render() {
        return (
            <BrandContainer>
                <SearchLogo>
                    <i class="fas fa-bullseye"></i> Missy
                </SearchLogo>
            </BrandContainer>
        )
    },
    components: {
        SearchLogo
    }
}

const BrandContainer = styled.div`
    cursor: 'default'
`

const SearchLogo = styled.span`
    color: #e2e2e2;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 500;

    &::selection{
        background: transparent;
    }
`

const ButtonAdd = styled.a`
        box-shadow: inset 0 0 0 2px #274562;
    height: 36px;
    cursor: pointer;
    border-radius: 2px;
    margin-left: 18px;
    color: #fff;
    flex: 0 0 auto;
    font-size: 14px;
    font-weight: 600;
    height: 34px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    width: 72px;
`