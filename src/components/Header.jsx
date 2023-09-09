import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range"
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import MainHeader from "./MainHeader";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) =>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name] : operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = ()=>{
        navigate("/hotels", {state:{destination, date, options}})
    }

    return (
        <>
            <header>
                <div className="headerContainer">
                    <MainHeader />

                    <h1>A Lifetime of discounts? It's Genius.</h1>
                    <p>
                        Get rewarded for your travels - unclock instant saving of 10% or more with a free account
                    </p>
                    <button>Sign/Register</button>
                </div>
            </header>

            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} />
                    <input type="text"
                        placeholder="Where are you going"
                        className="headerSearchInput"
                        onChange={(e) =>setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span
                        onClick={() => setOpenDate(!openDate)}
                    >{`${format(date[0].startDate, "dd/mm/yy")} to ${format(date[0].endDate, "dd/mm/yy")}`}</span>
                    {openDate && (
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />)}
                </div>

                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} />
                    <span onClick={()=>setOpenOptions(!openOptions)} >{`${options.adult} adult. ${options.children} children . ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <button 
                            disabled={options.adult <= 1}
                            className="optionCounterButton" onClick={()=>handleOption("adult", "d")} >-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <button 
                            disabled={options.children <= 0}
                            className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <button 
                            disabled={options.room <= 1}
                            className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </>
    );
};

export default Header;