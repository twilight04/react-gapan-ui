const Breadcrumbs = ({breadcrumbsValue}) => {
    return (
        <div className="row custom-breadcrumbs mb-3 mx-1 py-2">
            <nav className="d-flex nav-breadcrumbs" aria-label="breadcrumb">
                <p className="my-auto">You are here:&nbsp;</p>
                <ol className="breadcrumb my-auto">
                    <li className="breadcrumb-item active"><a href="/">{breadcrumbsValue}</a></li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs