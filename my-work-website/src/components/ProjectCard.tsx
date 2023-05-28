
export default function ProjectCard( props: {name: string, completed: string, desc: string, image: any, link: string}){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100"  className="h-80 w-full md:w-6/6 bg-dark-100 rounded-md py-4 px-6">
            <div className="mt-2 mb-2">
                <div className="content flex py-2">
                    <h1 className="font-bold md:text-3xl">{props.name}</h1>
                    <img src={props.image} className="w-8 max-h-8 mx-2"></img>
                </div>
                <p className="font-light md:text-2xl mb-2">Finished: {props.completed}</p>
                <p className="font-light text-gray-400 md:text-xl">{props.desc}</p>
                <a href={props.link} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border 
                border-teal-800 border border-4 absolute my-4">
                LINK
                </a>
            </div>
        </div>
    )
}