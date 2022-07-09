import React, { useState } from 'react'
import { useQuery, useMutation,useQueryClient } from 'react-query'
import { useProductsApis } from '@/hooks/productApis'

function EditeAddress({ addressData, close }) {
    const qc= new useQueryClient();
    const { editeAddresses } = useProductsApis()
    const [address, setaddress] = useState(addressData.address1.map(ad => ad))
    const [city, setcity] = useState(addressData.city)
    const [country, setcountry] = useState(addressData.country)
    const [country_name, setcountry_name] = useState(addressData.country_name)
    const [phone, setphone] = useState(addressData.phone)
    const [postcode, setpostcode] = useState(addressData.phone)
    const [state, setstate] = useState(addressData.state)
    const states = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ]

    const editeAddress = useMutation(async (address) => editeAddresses(address), {
        onSuccess: (res) => {
            console.log("dsvdv", res.data);
            // createdAdress(res.data.data)
            qc.refetchQueries({ queryKey: 'addresses' })
            close()
        },
        onError: (err) => console.log("dsvdv", err)
    });

    const submitAdress = (e) => {
        e.preventDefault();
        const adressData = { address1: [address], city, country, country_name, phone, postcode, state,id:addressData.id }

        editeAddress.mutate(adressData)
    }

    return (
        <form className='p-2' onSubmit={(e) => submitAdress(e)}>

            <span className="text-xl font-bold text-indigo-400">
                Edit Address
            </span>
            <div className='flex flex-row space-x-4'>
                <div className="relative mb-4 w-full">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400">
                        Adress
                    </label>
                    <textarea
                        type="text"
                        id="Adress"
                        name="Adress"
                        required
                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setaddress(e.target.value)} value={address}
                    />
                </div>

            </div>

            <div className='flex flex-row space-x-4'>
                <div className="relative mb-4 w-1/2">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400">
                        Country
                    </label>
                    <input
                        type="text"
                        id="Country"
                        name="Country"
                        required
                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setcountry(e.target.value)} value={country} disabled={true}
                    />
                </div>
                <div className="relative mb-4 w-1/2">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400">
                        State
                    </label>
                    <select
                        type="text"
                        id="State"
                        name="State"
                        required
                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setstate(e.target.value)} value={state}
                       
                    >
                         <option selected disabled > Select State</option>
                        {
                            states.map(st =>
                                <option value={st.name}>{st.name}</option>)
                        }
                    </select>
                </div>


            </div>

            <div className='flex flex-row space-x-4'>
                <div className="relative mb-4 w-1/2">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400">
                        City
                    </label>
                    <input
                        type="text"
                        id="City"
                        name="City"
                        required
                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setcity(e.target.value)} value={city}
                    />
                </div>
                <div className="relative mb-4 w-1/2">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400">
                        Country Name
                    </label>
                    <input
                        type="text"
                        id="Country_Name"
                        name="Country_Name"
                        required
                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setcountry_name(e.target.value)} value={country_name}
                    />
                </div>


            </div>

            <div className='flex flex-row space-x-4'>
                <div className="relative mb-4 w-1/2">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400">
                        Phone
                    </label>
                    <input
                        type="text"
                        id="Phone"
                        name="Phone"
                        required
                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setphone(e.target.value)} value={phone}
                    />
                </div>

                <div className="relative mb-4 w-1/2">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-400">
                        PostCode
                    </label>
                    <input
                        type="text"
                        id="PostCode"
                        name="PostCode"
                        required
                        className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setpostcode(e.target.value)} value={postcode}
                    />
                </div>


            </div>

            <div className='flex justify-center  space-x-4 items-center mt-2'>

                <button className="text-white bg-indigo-500 border-0 py-1 px-2 rounded-lg text-sm" type="submit" >
                    { editeAddress.isLoading ? <div className='flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div> : "Edit Address"
                    }
                </button>

                <button className=" bg-white text-indigo-400 border-0 underline   focus:outline-none rounded text-sm" 
                    onClick={(e) => close()} type='button'>
                    Cancle

                </button>

            </div>

        </form>
    )
}

export default EditeAddress