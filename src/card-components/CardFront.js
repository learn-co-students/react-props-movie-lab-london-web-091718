import React, {Component} from 'react';

export default class CardFront extends Component {

    render() {
        const url = this.props.posterMap ? this.props.posterMap : 'you spin me right round';
        return (
            <div className="card-front"
                 style={{backgroundImage: `url(${url})`}}></div>
        )
    }
}
