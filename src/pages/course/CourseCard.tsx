import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
} from "@material-tailwind/react";
import logo from "../../assets/images/yellowlogo.png"

export function CourseCard() {

    const cardData = [
        {
            title: 'Aura Membership',
            course: 'Indian Market',
            description: 'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.            ',
            price: '3000/',
            img: '',
            priceDescription:'Our Course Price'
        },
        {
            title: 'Aura Membership',
            course: 'Forex Market',
            description: 'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.            ',
            price: '3500/',
            img: '',
            priceDescription:'Our Course Price'

        }, {
            title: 'Aura Membership',
            course: 'Crypto Market',
            description: 'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.            ',
            price: '4000/',
            img: '',
            priceDescription:'Our Course Price'

        }
    ];

    const logoUrl = "https://tradextbm.com/wp-content/uploads/2024/01/bg-08-free-img.jpg"; // Replace with your logo URL

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
            {cardData.map((data, index) => (
                <Card key={index} className="w-86 bg-[#03091f] border-2 border-green-800	 ">
                    <CardHeader shadow={false} floated={false} className="p-0 bg-[#03091f] flex justify-between flex-row">
                        <img
                            src={logo}

                            alt="card-image"
                            className="rounded"
                        />
                        <h1 className="text-[#FFAA33]" >Aura Membership</h1>
                    </CardHeader>
                    <CardBody className="">
                    <div className="mb-2 flex items-center text-3xl text-[#228B22] justify-center "> {/* Adjust padding to make space for the logo */}
                            <Typography color="blue-gray" className="text-3xl ">
                                {data.course}
                            </Typography>
                           
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal opacity-75 text-white"
                        >
                            {data.description}
                        </Typography>
                        <div className="mb-2 mt-2 flex items-center justify-between "> {/* Adjust padding to make space for the logo */}
                            <Typography color="blue-gray" className=" text-white font-medium">
                                {data.priceDescription}
                            </Typography>
                            <Typography color="blue-gray" className="font-medium text-[#FFAA33]">
                                {data.price}
                            </Typography>
                        </div>

                        
                        
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-gradient-to-r from-[#FFAA33] via-lime-400 to-lime-500 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Join Now
                        </Button>

                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
