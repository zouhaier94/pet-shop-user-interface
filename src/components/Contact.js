import React from "react"
import { useFormik } from "formik"



export default function Contact() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            text: ""
        },

        onSubmit: (values) => {
            console.log(formik.values)
            // Upload to Firebse...
        }
    })

    return (
        <div className="contact--div1">
            <div className="contact--div2">
                <div className="contact--div3">
                    <h4 className="text-center text-3xl">Contact Us</h4>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">

                            <input
                                type="text"
                                className={"contact--field"}
                                placeholder="First Name"
                                onChange={formik.handleChange}
                                name="firstName"
                                back
                            />

                            <input
                                type="text"
                                className="contact--field"
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                name="lastName"
                            />
                            <input
                                type="email"
                                className="contact--field col-span-2"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                name="email"
                            />
                            <input
                                type="tel"
                                className="contact--field col-span-2"
                                placeholder="Phone"
                                onChange={formik.handleChange}
                                name="phoneNumber"
                            />
                            <textarea
                                cols="10"
                                rows="5"
                                className="contact--field col-span-2"
                                placeholder="Write your message..."
                                onChange={formik.handleChange}
                                name="text"
                            ></textarea>
                        </div>

                        <input
                            type="submit"
                            value="Send Message"
                            className="contact--submit "
                        />

                    </form>

                </div>


            </div>

        </div>

    )
}