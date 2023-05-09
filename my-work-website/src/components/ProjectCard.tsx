
export default function ProjectCard( props: {name: string, completed: string, desc: string, image: any}){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100"  className="w-full md:w-6/6 bg-dark-100 rounded-md py-4 px-4">
            <div className="mt-2 mb-2">
                <div className="content flex py-2">
                    <h1 className="font-bold md:text-xl">{props.name}</h1>
                    <img src={props.image} className="w-8 max-h-8 mx-2"></img>
                </div>
                <p className="font-light md:text-lg">Finished: {props.completed}</p>
                <p className="font-light text-gray-400">{props.desc}</p>
            </div>
        </div>
    )
}