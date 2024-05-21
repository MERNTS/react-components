import "../index.css";

export default function ThreeLaout(props) {
    const defaultProps = {
        leftWidth: 200,
        rightwidth: 200,
        minWidth: 800
    };

    const datas = Object.assign({}, defaultProps, props);

    return (
        <div
            className="three-layout"
            style={{
                minWidth: datas.minWidth
            }}
        >
            <div className="main">
                {props.children}
            </div>
            <div
                className="aside-left"
                style={{
                    width: datas.leftWidth
                }}
            >
                {props.left}
            </div>
            <div className="aside-right"
                 style={{
                     width: datas.rightwidth
                 }}
            >
                {props.right}
            </div>
        </div>
    );
}

