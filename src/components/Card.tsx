import type { FC } from 'react';

interface CardProps {
    name:string
    image: string
}

const Card: FC<CardProps> = ({name, image}) => {
    return (
        <div className='card'>
            <h3 className='card_title'>Pokemon: {name}</h3>
            <div>
                <img style={{
                    maxHeight:"200px",
                    width:"auto"
                }} alt={name + " image"} src={image}/>
            </div>
        </div>
    );
}
export default Card;