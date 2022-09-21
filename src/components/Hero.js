export default function Hero() {
    return (

        /*  <div className="w-full flex  justify-center py-20 shadow-md ">
             <img className="" src={require("../images/cover.jpg")} alt="" />
             <div className="text-4xl absolute justify-center md:pt-10 pt-5">Welcome to our Pet Shop!</div>
         </div> */

        <div className="w-full justify-center pt-10 shadow-md" >
            <img className="mx-auto" src={require("../images/cover.jpg")} alt="" />
            <div className="lg:text-5xl md:text-4xl text-3xl justify-center text-center px-auto pb-4">Welcome to our Pet Shop!</div>
        </div>

    )
}