export default function Card(props) {

    return (

        <div className="card ">

            <span className="card--badge">{props.price}$</span>
            <img className="card--img" src={props.img} alt="" />

            <div className="my-2 text-center">
                <div className="font-bold ">{props.name}</div>
            </div>
        </div>

    )
}