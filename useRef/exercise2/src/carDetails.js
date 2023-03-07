import { useEffect,useState,useRef } from "react";

export function CarDetails() {
    const[model, setModel] = useState({model:"BMW"});
    const[year, setYear] = useState({year: 2022});
    const[color, setColor] = useState({color:"Black"})

    const changeModel = useRef(model);
    const changeYear = useRef(year);
    const changeColor = useRef(color);

    useEffect(() => {
        changeModel.current = model;
        changeYear.current = year;
        changeColor.current = color;
    }, [model,year,color])

    const car = {model: changeModel.current, year: changeYear.current, color: changeColor.current}

    console.log(car);

    return(
        <form>
            <input
            name="model"
            ref={changeModel}
            onChange={e=>setModel(e.target.value)}
            />
            <input
            name="year"
            ref={changeYear}
            onChange={e=>setYear(e.target.value)}
            />
            <input
            name="color"
            ref={changeColor}
            onChange={e=>setColor(e.target.value)}
            />
        </form>
    )
}
//It does not seem right but I could nor find the problem so would you tell me 
//what am I missing,please!