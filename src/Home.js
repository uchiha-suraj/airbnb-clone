import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Private room in Imphal"
                description="Superhost with a stunning view of the beachside in Sunny Imphal"
                price="₹880/ night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire house in Jaipur"
                description="Enjoy the amazing sights of Jaipur with this stunning penthouse"
                price="₹2,200/ night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Entire flat in New Delhi"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹1,980/ night"
            />
            </div>
        </div>
    )
}

export default Home
