import React from 'react';

const TopButton = () => {
    const cities =[
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Sydney'
        },  {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Paris'
        }
       
    ]
    return (
        <div className='flex items-center justify-between text-white'>
            {
            cities.map(city=>console.log(city))
           }
           {
            cities.map(city=><button key={cities.id}>{city.title}</button>)
           }
        </div>
    );
};

export default TopButton;