

import styled from 'vue-styled-components'
import { navigateToUrl } from 'single-spa'

export default {
    name: 'Brand Header',
    render() {
        return (
            <a href="/" onClick={navigateToUrl}>
                <SearchLogo>
                    Missy
                </SearchLogo>
            </a>
        )
    },
    components: {
        SearchLogo
    }
}

const SearchLogo = styled.span`
    color: #292929;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 500;
`