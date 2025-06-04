import './homepage.css'

const  HomePage = () => {


    return(
        <>
        
        <div className='homepage'>
            <h2>About</h2>
            <p>Buy&Get is a delivery company that promises quality and quick delivery, we pride ourselves on our quality assurance and shipping deadlines
                We promise the customer that their product will be delivered safe and sound and in one piece,full refunds for customer unsatisfaction within 24hrs of product delivery.
                </p>
                
                <p>Buy&Get  was formed in 1995 by a group of college students to help reinvent the shipping industry due to bad experiences in the past.
                    It took many years but eventually the students got the company up and running and within 2 years,
                     the company had a monopoly in the shipping industry and continue to be competitive in the market to this day!
                 </p>
                 <img src='./truck.jpg' className='truck-img'></img>
        </div>

        <div className='footer'>
            <p>Contact: 071-560-7865</p>
            <p>Email: buyandget@gmail.org</p>
            <p>Instagram: buy&getinsta95</p>
        </div>
        </>
    )
}

export default HomePage