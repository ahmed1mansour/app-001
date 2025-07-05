function Card(props) {
    let br = '';
    let bg = '';
    let tc = '';
    switch (props.type) {
        case 'x6':
            bg = 'bg-gradient-to-r from-gray-500 via-gray-800 to-gray-900';
            break;
        case 'm5':
            bg = 'bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900'
            break;
        case 'm8':
            bg = 'bg-gradient-to-l from-gray-500 via-gray-800 to-gray-900'
    }
    let style = `${bg} ${br} shadow-lg hover:shadow-xl/30 font-bold h-110 text-gray-200 rounded-t-2xl w-100  p-9 flex flex-col justify-between text-center `;
    return (
        <div className={style}>
            {props.children}
        </div>
    )
}
export default Card;