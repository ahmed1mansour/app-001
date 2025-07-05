function Btn(props) {
    let tc = '';
    let bg = '';
    let br = '';
    switch (props.type) {
        case 'test':
            tc = 'text-gray-200';
            br = 'border-white'
            bg = "";
            break;
        case 'more':
            tc = 'text-red-400';
    }
    let style = ` 
    hover:-translate-y-1 hover:scale-110
    transition duration-150 ease-in-out 
    flex  items-center 
    border-l border-b
    justify-center m-1
    rounded-l-xl px-7 py-1 text-2xl  font-bold
    ${bg} ${tc} ${br}`

    return (
        <button className={style}>
            {props.children}
        </button>
    )
}
export default Btn;