import type { FC } from 'react';
interface CardProps {
    name:string
    image: string
}

const Card: FC<CardProps> = ({name, image}) => {
    return (
        <div className='card_container'>
            <div className='card'>
                <div className='card_image-container_blur'>
                    <div style={{
                        overflow:"hidden",
                        maxWidth:"200px"
                    }}>
                        <img className='card_image-container' style={{
                            height:"200px",
                            width:"200px",
                            
                        }} alt={name + " image"} src={image}/>
                    </div>
                </div>
                <div className='card_head'>
                    <div>
                        <h3 className='card_title'>{name}</h3>
                    </div>
                    <div className='card_hp'>
                        <p className='card_hp'>HP</p>
                        <p className='card_hp'>{1000}</p>
                    </div>
                </div>
                <div className='card_image-container'>
                    <div>
                        <img className='card_image-container' style={{
                            height:"200px",
                            width:"200px",
                        }} alt={name + " image"} src={image}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;