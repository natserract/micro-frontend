

import styled from 'vue-styled-components'
import { navigateToUrl } from 'single-spa'

export default {
    name: 'Brand Header',
    render() {
        return (
            <div style={{ cursor: 'default' }}>
                <SearchLogo>
                    <i class="fas fa-bullseye"></i> Missy
                </SearchLogo>
            </div>
        )
    },
    components: {
        SearchLogo
    }
}

const SearchLogo = styled.span`
    color: #fff;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 500;

    &::selection{
        background: transparent;
    }
`