import React, { Component } from 'react'
import axios from 'axios';

const explore = () => axios.get('http://10.0.0.17:1337/getexplorevotes').then((res) => res.data);

export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null
        }
    }

    componentWillMount() {
        if(this.state.data === null) {
            explore().then((result) => {
                this.setState({
                    data:result
                })
            })
        }
    }

    bindExplore = () => {
        if(this.state.data) {
            return this.state.data.map((value,key) => {
                return (   
                    <div key={key} className="row px-3 border-bottom py-3">
                        <div className="col-7 pl-0 pr-1">
                        <p className="mb-0"><a href="/" className="text-secondary">{value.author} • {value.publish_date}</a></p>
                        <h5 className="mb-0 font-weight-bold">{value.title}</h5>
                        <p>{value.description}</p>
                        <div className="row">
                            <div className="col-4">
                            <p className="text-secondary"><span className="glyphicon glyphicon-tint
                                text-success" /> {value.num_vote}</p>
                            </div>
                            <div className="col-4">
                            <p className="text-secondary"><span className="glyphicon
                                glyphicon-thumbs-up" /> {value.num_like}</p>
                            </div>
                            <div className="col-4">
                            <p className="text-secondary"><span className="glyphicon glyphicon-comment" /> {value.comment}</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-5 px-0 text-left">
                        <a href="/">
                            <img className="img-fluid rounded mb-3 mb-0" src={value.image_description} alt="/" />
                        </a>
                        </div>
                    </div>
                )}
            )
        }
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                {this.bindExplore()}
            </div>
        )
    }
}
