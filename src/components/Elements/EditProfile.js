import React, { useState } from 'react'
import { useMutation, useQuery, } from 'react-query'
import { authUser } from '@/hooks/authUser'
function EditProfile({ profile, closeModal, refreshProf }) {
    const { editeProfileApi } = authUser()

    const [fname, setfname] = useState(profile.first_name)
    const [lname, setlname] = useState(profile.last_name)
    const [email, setemail] = useState(profile.email)
    const [gender, setgender] = useState(profile.gender)
    const [phone, setphone] = useState(profile.phone)

    const [status, setstatus] = useState('')
    const [err, seterr] = useState('')

    const editeProfile = useMutation(async (data) => editeProfileApi(data), {
        onSuccess: (res) => {
            setstatus(res.data.message)
            setTimeout(() => {
                closeModal()
                refreshProf.refetch()
            }, 2000);
        },
        onError: (err) => {
            if (err.response.status == 422) {
                seterr(err.response.data.errors[Object.keys(err.response.data.errors)[0]])
            }
        }
    })


    const sumbitEdit = (e) => {
        e.preventDefault();
        editeProfile.mutate({ first_name:fname  , last_name: lname, gender,phone })
    }
    return (
        <div>

            <div className="  fixed z-50 top-0 left-0 right-0  flex justify-center w-full overflow-scroll h-modal md:h-full">

                <div className=" p-4  sm:w-1/2   h-full md:h-auto ">
                    {/* <!-- Modal content --> */}
                    <div className=" bg-white rounded-lg shadow selc dark:bg-gray-700">
                        {/* <!-- Modal header --> */}

                        <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">

                            <span className="text-xl font-bold">
                                Edite Profile
                            </span>
                            <button type="button" onClick={() => closeModal()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>

                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="flex flex-col justify-center p-6 space-y-6">

                            <form onSubmit={(e) => sumbitEdit(e)}>
                                {editeProfile.isSuccess ? <span className='text-green-500 font-bold text-xl'>{status}</span> : ''}
                                {editeProfile.isError ? <span className='text-red-500 font-bold text-xl'>{err}</span> : ''}
                                <div className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setfname(e.target.value)} value={fname}
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setlname(e.target.value)} value={lname}
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setemail(e.target.value)} value={email}
                                        />
                                    </div>   <div className="relative mb-4">
                                        <label
                                            htmlFor="phone"
                                            className="leading-7 text-sm text-gray-400">
                                            Phone
                                        </label>
                                        <input
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            className="w-full rounded border  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onChange={(e) => setphone(e.target.value)} value={phone}
                                        />
                                    </div>
                                    <div className="relative mb-4 flex flex-col">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-gray-400">
                                            Gender
                                        </label>
                                        <select required className='w-32 rounded-lg mt-3' value={gender} onChange={(e) => setgender(e.target.value)} >
                                            <option value={'Male'}>Male</option>
                                            <option value={'Female'}>Female</option>
                                            <option value={'other'}>other</option>
                                        </select>
                                    </div>
                                    <button className="text-white bg-indigo-500 mx-24 border-0 py-2 px-6 mt-4
        focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                        type='submit'>
                                        {
                                            editeProfile.isLoading ? "Editing Profile ..." : "Edit Profile"
                                        }

                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile