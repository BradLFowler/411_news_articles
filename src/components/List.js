import React, { Component } from 'react'

class List extends Component {
    // write componentDidMount function
    componentDidMount() {
        return this.props.fetchArticles()
    }
    // call "this.props.fetchArticles"

    render() {
        return (
            <div>
                {this.props.articles.map((a, index) => {
                    return <p key={index}>{a.title}</p>
                })}
            </div>
        )
    }
}

export default List