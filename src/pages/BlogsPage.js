import React from 'react';
import styled from 'styled-components'

function BlogPage() {
    return (
        <BlogPageStyle>
            <div className="typography">
                <h1><span>Coming Soon!</span></h1>
            </div>
        </BlogPageStyle>
    )
}

const BlogPageStyle = styled.header`
    width: 100%;
    height: 100vh;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }

`;

export default BlogPage;