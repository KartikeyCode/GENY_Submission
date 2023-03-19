function Card(props){
    return(
        <div className="contact-card basis-72 shadow-md rounded-xl flex flex-col p-3 pb-5 bg-neutral-800">
                <img className="w-full h-full self-center rounded-md object-cover " src={props.img}/>
                <h3 className="text-lg text-slate-50">{props.title}</h3>
                <div className="info-group flex items-center">
                    <p className="text-md text-slate-500">{props.creator}</p>
                </div>
                <div className="info-group">
                    <p className="text-md text-slate-500">{props.views}</p>
                </div>
            </div>
        )
}

export default Card