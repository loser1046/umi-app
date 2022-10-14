import { Fragment } from 'react'
import { Link } from 'umi'
const notFount = () => {
    return (
        <Fragment>
            <h1>404页面...</h1>
            <Link to="/">
                <button>返回首页</button>
            </Link>
        </Fragment>
    )
}

export default notFount