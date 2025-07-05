function Img_card(props) {
    let bg = '';
    switch (props.type) {
        case 'm5':
            bg = 'bg-[url(https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb65b45540c1e3d8e88cb10/stills_0640_png/MY2023/51457/51457_st0640_116.png)] hover:-translate-x-2 hover:scale-106 bg-cover bg-center transition duration-300 ease-in-out ';
            break;
        case 'x6':
            bg = 'bg-[url(https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f43570f1e3d8e88cb/stills_0640_png/MY2022/15264/15264_st0640_116.png)] hover:-translate-x-2 hover:scale-106 bg-cover bg-center transition duration-300 ease-in-out';
            break;
            case 'm8' :
                bg = 'bg-[url(https://dbhdyzvm8lm25.cloudfront.net/stills_0640_png/MY2020/14063/14063_st0640_116.png)] hover:-translate-x-2 hover:scale-105 bg-center bg-cover transition duration-300 ease-in-out';
    }
    let style = ` w-100 h-50 ${bg}`;
    return (
        <div className={style}>
            {props.children}
        </div>
    )
}
export default Img_card;