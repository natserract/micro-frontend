
import styled from 'vue-styled-components'

export default {
    name: 'SearchFilter',
    render() {
        return (
            <SearchPageInput placeholder="Type here to search..." />
        )
    },

    components: {
        SearchPageInput
    }
}

const SearchPageInput = styled.input`
    background-color: #1f364d;
    border-radius: 4px;
    color: #fff;
    transition: all 180ms;
    width: 100%;
    font-size: 26px;
    height: 104px;
    padding: 0 39px 0 35px;
    border: 0;
    outline: 0;
    box-shadow: none;

    &::-webkit-input-placeholder {
        color: #aaa;
    }

    &:hover,
    &:focus {
        background-color: #2c4763;
    }
`