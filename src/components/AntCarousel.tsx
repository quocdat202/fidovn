import React from 'react';
import { Carousel } from 'antd';

interface AntCarouselProps {
    style?: any,
    items: Array<string>,
}


const AntCarousel: React.FC<AntCarouselProps> = (props) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onChange}>
            {
                props.items.map((item: any, index: any) => {
                    return (
                        <div key={index}>
                            <img style={props.style} src={item} />
                        </div>
                    )
                })
            }
        </Carousel>
    );
};

export default AntCarousel;