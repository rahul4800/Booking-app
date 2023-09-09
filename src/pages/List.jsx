
import Navbar from "../components/Navbar";
import MainHeader from "../components/MainHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../components/SearchItem";

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false);

    return (
        <div>
            <Navbar />
            <MainHeader />
            <div className="ListContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1>Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span
                                className="dateSpan"
                                onClick={() => setOpenDate(!openDate)}>{`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy"
                                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="isItem">
                            <label>Options</label>
                            <div className="isOptions">
                                <div className="lsOptionItem">
                                    <span>
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" />
                                </div>

                                <div className="lsOptionItem">
                                    <span>
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" />
                                </div>

                                <div className="lsOptionItem">
                                    <span>Adult</span>
                                    <input type="number" min={1} placeholder={options.adult} />
                                </div>

                                <div className="lsOptionItem">
                                    <span>Children </span>
                                    <input type="number" min={0} placeholder={options.children} />
                                </div>

                                <div className="lsOptionItem">
                                    <span>Room </span>
                                    <input type="number" min={1} placeholder={options.room} />
                                </div>
                            </div>

                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default List;