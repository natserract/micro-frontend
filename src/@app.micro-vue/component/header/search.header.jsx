
import styled from 'vue-styled-components'

export default {
    name: 'Search Form',
    render() {
        return (
            <FormContainer action="" method="" name="SearchForm">
                <InputSearch name="q" placeholder="Search lyrics & more" autocomplete="off" required />
            </FormContainer>
        )
    },
    components: {
        InputSearch,
        FormContainer
    }
}
const FormContainer = styled.form`
    width: 30%;
    margin: 0 auto;
`

const InputSearch = styled.input`
    background: rgb(248, 248, 248, 1);
    padding: 0px 15px;
    border-radius: 20px;
    font-size: 12px;
    height: 36px;
    width: 100%;
    margin-right: 15px;
    border: 0;
    box-shadow: none;
    outline: 0;
    color: #292929;

    &::-webkit-input-placeholder {
        color: #7d7d7d;
    }
`