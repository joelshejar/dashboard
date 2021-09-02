import {Link,withRouter } from 'react-router-dom'

function Article(props){
    return(
        <div>
            <Link to='/articles'>
                <h4>Return to articles page</h4>
            </Link>
            <h2>
                the slug of this article is:{props.match.params.slug}
            </h2>
        </div>
    )
}

export default withRouter(Article)