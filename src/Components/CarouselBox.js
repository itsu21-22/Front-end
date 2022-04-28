import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../Assets/HomepageProductGreetingCard.jpg'
import img2 from '../Assets/tankTops003.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                className='d-block w-100'
                src={img1}
                alt='img1'
                />
                <Carousel.Caption>
                    <h3>Image1</h3>
                    <p>text1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className='d-block w-100'
                src={img2}
                alt='img2'
                />
                <Carousel.Caption>
                    <h3>Image2</h3>
                    <p>text2</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
