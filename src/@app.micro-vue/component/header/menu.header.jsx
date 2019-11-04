

import styled from 'vue-styled-components'

export default {
    render() {
        return (
            <ButtonAdd>
                Add New
            </ButtonAdd>
        )
    },
    components: {
        ButtonAdd
    }
}


const ButtonAdd = styled.a`
    box-shadow: inset 0 0 0 2px #274562;
    cursor: pointer;
    border-radius: 2px;
    margin-left: 18px;
    color: #fff;
    flex: 0 0 auto;
    font-size: 13px;
    font-weight: 600;
    height: 38px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    width: 92px;

    &:hover,
    &:focus {
        background: #274562;
    }
`