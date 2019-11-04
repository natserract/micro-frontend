import * as React from 'react'
import styled from 'styled-components'
import LyricListsContent from './lyric.lists.content'

const Content = () => (
    <ContentContainer>
        <LyricListsContent />
    </ContentContainer>
)


const ContentContainer = styled.div`
    max-width: 820px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    margin-block-start: 15em;
`


export default Content