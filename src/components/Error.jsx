export default function Error(props) {
    return (<div className="d-flex flex-column justify-content-center text-center text-primary">
        <h1>We Swan into a problem!</h1>
        <iframe title="error" src="https://giphy.com/embed/j1i2gRUOgSSELjRgp3" className="giphy-embed" allowFullScreen></iframe>
        <p>{props.children}</p>
    </div>
    )
}