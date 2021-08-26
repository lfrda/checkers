import Space from "./space";

export default function Row(props) {

    function composeRow(length) {
        const customRow = []
        for (let i = 0; i < length; i++) {
            customRow.push(
                <Space 
                    black={props.even ? !(i%2) : (i%2)} 
                    text={`${i} test`}>

                </Space>
                )
        }
        return customRow

    }
    return ( 
        <div style={{display : "flex"}}>
            {composeRow(props.length)}

        </div>
    )
}