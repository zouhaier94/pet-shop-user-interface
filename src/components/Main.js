import Card from "./Card"
import React from "react"
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../Firebase";


export default function Main() {

    const [formData, setFormData] = React.useState({ choice: "all" })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevState =>
            ({ ...prevState, [name]: value }))
    }

    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        const fetchData = async () => {
            let list = [];
            try {

                const q = query(collection(db, "pets"));

                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {

                    list.push({ id: doc.id, ...doc.data() })

                });

                setData(list)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, []);

    console.log(data)

    const cards = data.map(el => {

        if (formData.choice === "cats") {
            if (el.type === "cat") {
                return (
                    <Card
                        key={el.id}
                        name={el.name}
                        price={el.price}
                        img={el.imgUrl}
                    />
                )
            }
        }
        else if (formData.choice === "dogs") {
            if (el.type === "dog") {
                return (
                    <Card
                        key={el.id}
                        name={el.name}
                        price={el.price}
                        img={el.imgUrl}
                    />
                )
            }
        }
        else if (formData.choice === "all") {

            return (
                <Card
                    key={el.id}
                    name={el.name}
                    price={el.price}
                    img={el.imgUrl}
                />
            )

        }
        return null;
    }
    )

    return (
        <div>
            <div className="main--div1">
                <select className="main--div2"
                    id="choice" value={formData.choice} onChange={handleChange} name="choice">
                    <option value="all">All</option>
                    <option value="cats">Cats</option>
                    <option value="dogs">Dogs</option>
                </select>
            </div>
            <div className="h-screen shadow-md">
                <div className="main--div3">
                    {cards}
                </div>
            </div>
        </div>
    )

}
