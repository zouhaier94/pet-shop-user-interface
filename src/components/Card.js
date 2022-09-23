export default function Card(props) {

    return (

        <div className="card ">


            <img className="card--img" src={props.img} alt="" />

            <div className="my-2 text-center flex justify-center ">
                <div className="font-bold ">{props.name}</div>
                <div className="card--badge">{props.price}$</div>
            </div>
        </div>

    )
}