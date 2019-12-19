import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LyricListsContent = () => (
    <LyricSectionPosts>
        <LyricLists>
            <EntryLikes>
                <LikesIcon className="fas fa-thumbs-up"></LikesIcon>
                <LikesCount>10</LikesCount>
            </EntryLikes>
            <EntryLink to="#">
                <EntryLinkTitle>
                    Got our first paying customers!
                    </EntryLinkTitle>
                <EntryLinkContent>
                    Hey everyone! This is Allen from Stagelight.io, a company that's providing a "demo as a service" for SaaS websites and products. In the points below,
            </EntryLinkContent>
            </EntryLink>
        </LyricLists>
        <LyricLists>
            <EntryLikes>
                <LikesIcon className="fas fa-thumbs-up"></LikesIcon>
                <LikesCount>10</LikesCount>
            </EntryLikes>
            <EntryLink to="#">
                <EntryLinkTitle>
                    Got our first paying customers!
                    </EntryLinkTitle>
                <EntryLinkContent>
                    Hey everyone! This is Allen from Stagelight.io, a company that's providing a "demo as a service" for SaaS websites and products. In the points below,
            </EntryLinkContent>
            </EntryLink>
        </LyricLists>
        <LyricLists>
            <EntryLikes>
                <LikesIcon className="fas fa-thumbs-up"></LikesIcon>
                <LikesCount>10</LikesCount>
            </EntryLikes>
            <EntryLink to="#">
                <EntryLinkTitle>
                    Got our first paying customers!
                    </EntryLinkTitle>
                <EntryLinkContent>
                    Hey everyone! This is Allen from Stagelight.io, a company that's providing a "demo as a service" for SaaS websites and products. In the points below,
            </EntryLinkContent>
            </EntryLink>
        </LyricLists>
        <LyricLists>
            <EntryLikes>
                <LikesIcon className="fas fa-thumbs-up"></LikesIcon>
                <LikesCount>10</LikesCount>
            </EntryLikes>
            <EntryLink to="#">
                <EntryLinkTitle>
                    Got our first paying customers!
                    </EntryLinkTitle>
                <EntryLinkContent>
                    Hey everyone! This is Allen from Stagelight.io, a company that's providing a "demo as a service" for SaaS websites and products. In the points below,
            </EntryLinkContent>
            </EntryLink>
        </LyricLists>
    </LyricSectionPosts>
)
const LyricSectionPosts = styled.ol`
    padding: 0px 0 40px;
    list-style: none;
`

const LyricLists = styled.li`
    align-items: center;
    display: flex;
    position: relative;

    &:not(:first-child){
        margin-top: 16px;
    }
`
const EntryLikes = styled.div`
    height: 44px;
    width: 44px;
    margin: 0 3px
    align-items: center;
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    transition: all .1s;

    &:hover i{
        color: #e6375a;
    }
`
const LikesIcon = styled.i`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #9cb3c9;
    margin-bottom: 5px;
    
`
const LikesCount = styled.span`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #9cb3c9;
`
const EntryLink = styled(Link)`
    width: calc(100% - 44px - 8px - 16px);
    color: #9cb3c9;
    align-items: flex-start;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    text-align: left;
    display: block;

    &:hover > div{
        cursor: pointer;
    }
    &:hover > div:nth-child(1) {
        color: #e6375a;
    }
    &:hover > div:nth-child(2){
        color: #9cb3c9;
    }
`
const EntryLinkTitle = styled.div`
    color: #9cb3c9;
    font-size: 17px;
    padding: 5px 0;
    transition: color 180ms;
    flex: 0 0 auto;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: now
`

const EntryLinkContent = styled.div`
    font-size: 15px;
    color: #63809c;
    margin-top: 1px;
    transition: color 180ms;
    flex: 0 0 auto;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export default LyricListsContent