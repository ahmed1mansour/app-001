import { Children } from "react";
import Btn from "./btn";

function Card({ type, title, content, button1, button2 }) {
    let br = '';
    let bg = '';
    let tc = '';
    let sp = '4845';
    switch (type) {
        case 'm5':
            bg = 'bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900';
            break;
        case 'x6':
            bg = 'bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900'
            break;
        case 'm8':
            bg = 'bg-gradient-to-l from-gray-600 via-gray-800 to-gray-900'
    }
    let style = `${bg} ${br}   shadow-lg hover:shadow-xl/30 font-bold h-110 text-gray-200 rounded-t-2xl w-100   `;
    return (
        <div className={style}>
            <div className="   flex flex-col justify-between items-center text-center  h-full p-10" >
                <h1 className="text-4xl">{title}</h1>
                <p className="text-xl " >{content}</p>
                <div className="  flex flex-col justify-center items-center ">
                    <Btn type='test'>{button1}</Btn>
                    <Btn type='more'>{button2}</Btn>
                </div>
            </div>
        </div>
    )
}
export default Card;