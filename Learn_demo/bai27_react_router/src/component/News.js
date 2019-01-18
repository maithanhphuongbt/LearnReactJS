import React, { Component } from 'react'
import Header from './Header';
import ItemNews from './ItemNews';
import data from './data.json';

export default class News extends Component {
    render() {
        console.log(data);
        return (
        <div>
            <Header headerName="News"/>
            <div className="container">
                <div className="row">
                    {
                        data.map((value,key) => (
                            <ItemNews
                            newsId={value.id} 
                            key={key}
                            image={value.image}
                            title={value.title}
                            content={value.content}
                            />
                        ))
                    }
                </div>
                <br />
            </div>
        </div>
        )
    }
}
