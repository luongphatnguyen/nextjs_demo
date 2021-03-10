import styled from 'styled-components'

const Banner = styled.div`
    background-image: url("https://cf.shopee.vn/file/b107aa9ffbffb88d16661d05d40a43a1_xxhdpi");
    margin-top: 20px;
    height: 110px;
    width: 1200px;
    background-size: cover;
    background-position: 50%;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
    width: 100%;
    font-size: 1rem;
    color: rgb(238, 77, 45);
    font-weight: 500;
    padding-left: 10px;
`

const Category = styled.div`
    background: #fff;
`;

const CategoryList = styled.div`

`;

const CategoryItem = styled.div`
    display: inline-block;
    margin: 5px;
`;

const CategoryBlock = styled.div`
    width: 100%;
    margin: 10px 0;
    height: 2.75rem;
    line-height: 2.75rem;
    padding-left: 10px;
`

const CategoryFilter = styled.span`
    cursor: pointer; 
    & + & {
        margin-left: 10px;
    }
`;

export default {
    Banner,
    CategoryTitle,
    Category,
    CategoryList,
    CategoryItem,
    CategoryBlock,
    CategoryFilter
}