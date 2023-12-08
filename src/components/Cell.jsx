import './Cell.css'

function Cell(props) {

    const { widthLineNumber, heightLineNumber } = props

    const colorCell = function () {
        if ((widthLineNumber + heightLineNumber) % 2 === 0) {
            return 'Cell'
        } else {
            return 'Cell Cell-black'
        }
    }

    return (
        <div
            className={colorCell()}
            onClick={() => console.log(widthLineNumber, heightLineNumber)}
        ></div>
    );
};

export default Cell;