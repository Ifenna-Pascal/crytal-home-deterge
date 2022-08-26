import React, { useState } from 'react'
import InputField from '../../../components/shared/InputField'

function StepFive({ handleChange, mockData }) {
    const { firstName, lastName, email, phoneNumber, address, city, state, zip, apt, date } = mockData;
    return (
        <div className='flex flex-col items-start w-full h-full'>
            <div className='w-full'>
                <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-3 text-left'>Contact Info</h1>
                <div className='grid grid-cols-2 mb-4 w-full gap-4'>
                    <InputField
                        placeholder="First Name"
                        onChange={handleChange}
                        value={firstName}
                        name="firstName"
                    />
                    <InputField
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={lastName}
                        name="lastName"
                    />
                    <div className='col-span-2'>
                        <InputField
                            placeholder="Phone Number"
                            onChange={handleChange}
                            value={phoneNumber}
                            name="phoneNumber"
                        />
                    </div>
                    <div className='col-span-2'>
                        <InputField
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={email}
                            name="email"
                        />
                    </div>
                </div>
            </div>
            <div className='w-full my-3'>
                <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-3 text-left'>Property Info</h1>
                <div className='grid grid-cols-2 mb-4 w-full gap-4'>
                    <InputField
                        placeholder="Address"
                        onChange={handleChange}
                        value={address}
                        name="address"
                    />
                    <InputField
                        placeholder="#Apt"
                        onChange={handleChange}
                        value={apt}
                        name="apt"
                    />
                </div>
                <div className='gap-4 grid grid-cols-3'>
                    <InputField
                        placeholder="State"
                        onChange={handleChange}
                        value={state}
                        name='state'
                    />
                    <InputField
                        placeholder="City"
                        onChange={handleChange}
                        value={city}
                        name='city'
                    />
                    <InputField
                        placeholder="Zip"
                        onChange={handleChange}
                        name="zip"
                        value={zip}
                    />
                </div>
            </div>
            <div className='w-full my-3'>
                <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-3 text-left'>Select Service Date</h1>
                <div className='grid grid-cols-1 mb-4'>
                    <InputField
                        placeholder="Select Date"
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={date}
                    />
                </div>
            </div>
        </div>
    )
}

export default StepFive