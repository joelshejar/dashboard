import data from './data.json'
import {Link, withRouter} from 'react-router-dom'

function Articles(){
    return(
        <div>
            {
                data.map((elm)=>{
                    return(
                        <div>
                            
                            <Link to={'/articles/'+elm.slug} >
                                <h3>{elm.title}</h3>
                            </Link>
                            
                            <h5>{elm.author}</h5>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default withRouter(Articles)
