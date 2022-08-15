import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


export default class HornedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0,
        }
    }
    isLiked() {
        // add plus 1 to like
        this.setState((prev) => ({
            likes: prev.likes + 1
        }))
    }
    unLiked() {
        // minus 1 when dislike is clicked
        this.setState((prev) => ({
            likes: prev.likes - 1
        }))
    }
    sendInfo = () => {
        // send the state back when image is clicked
        this.props.updateState({ title: this.props.title, description: this.props.description, image: this.props.image_url })
    }

    render() {
        return (
            <div className='card-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.sendInfo} variant="top" src={this.props.image_url} alt={this.props.title} />
                    <Card.Footer>
                        <Button onClick={() => this.isLiked()} variant='outline-primary'>❤️</Button>
                        {this.state.likes}
                        <Button onClick={() => this.unLiked()} variant='outline-primary'>💔</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}