import React, { useEffect, useRef, useState } from "react";
import experienceData from '../json/experience.json';
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

const ExpirancePage = () => {
    const [showJob, setShowJob] = useState<number>(99)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const durationWork = (start: string, end?: string): string => {
        // Helper function to parse `dd-mm-yyyy` into a Date object
        const parseDate = (dateStr: string): Date => {
            const [day, month, year] = dateStr.split("-").map(Number);
            return new Date(year, month - 1, day); // JS Date uses 0-based months
        };

        const startDate = parseDate(start);
        const endDate = end ? parseDate(end) : new Date(); // Default to current date

        // Ensure valid dates
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            throw new Error("Invalid date format. Use 'dd-mm-yyyy'.");
        }

        // Calculate year, month, and day differences
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
        let days = endDate.getDate() - startDate.getDate();

        // Adjust for negative months or days
        if (days < 0) {
            months -= 1;
            days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate(); // Days in the previous month
        }
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // Build the duration string
        const parts = [];
        if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
        if (months > 0) parts.push(`${months} mon`);
        // if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);

        return parts.length > 0 ? parts.join(" ") : "0 days";
    };
    const dateSimple = (start: string, end?: string) => {
        const parseDate = (dateStr: string): string => {
            const [day, month, year] = dateStr.split("-").map(Number);
            let strMonth = ""
            switch (month) {
                case 1:
                    strMonth = "Jan"
                    break;
                case 2:
                    strMonth = "Feb"
                    break;
                case 3:
                    strMonth = "Mar"
                    break;
                case 4:
                    strMonth = "Apr"
                    break;
                case 5:
                    strMonth = "Mei"
                    break;
                case 6:
                    strMonth = "Jun"
                    break;
                case 7:
                    strMonth = "Jul"
                    break;
                case 8:
                    strMonth = "Ags"
                    break;
                case 9:
                    strMonth = "Sep"
                    break;
                case 10:
                    strMonth = "Okt"
                    break;
                case 11:
                    strMonth = "Nov"
                    break;
                case 12:
                    strMonth = "Des"
                    break;
                default:
                    break;
            }
            return strMonth + " " + year;
        }
        const startFormat = start.substring(0, 2) + " " + parseDate(start)
        const endFormat = end != null ? end.substring(0, 2) + " " + parseDate(end) : "current"
        return startFormat + " - " + endFormat
    }
    const onsite = (listOnsite?: string[]) => {
        if (listOnsite != null && listOnsite.length > 0) {
            let onsite = "";
            for (let i = 0; i < listOnsite.length; i++) {
                const element = listOnsite[i];
                onsite = onsite + element + " | ";
            }
            // Remove the last " | " using slice
            return onsite.slice(0, -3);
        } else {
            return "";
        }
    };
    useEffect(() => {
        // Scroll to the active card when it is expanded
        if (showJob !== 99) {
            console.log("ection")
            cardRefs.current[showJob]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [showJob]);
    return (
        <div className='col-span-1 p-4 '>
            <div className="text-white ">
                <h2 className="text-xl font-bold">My Experience</h2>
                {[...experienceData].reverse().map((item, i) => (
                    <div key={i} ref={(el) => (cardRefs.current[i] = el)}>
                        <button onClick={() => showJob !== i ? setShowJob(i) : setShowJob(99)}
                            className={`items-center mt-3 bg-gray-700 p-3 rounded-lg w-full }`
                            }>
                            <div className="grid grid-cols-3">
                                <div className='text-left col-span-2'>
                                    <div className="flex">
                                        <h3 className="text-lg font-semibold">{item.company}</h3>
                                        {item.selesai == null ? <h1 className='text-green-500 ml-1'>(current)</h1> : null}
                                    </div>
                                </div>
                                <div className='grow text-right text-white'>
                                    <h4>{durationWork(item.mulai, item.selesai)}</h4>
                                </div>
                            </div>

                            <div className="grid grid-cols-2">
                                <div className="justify-items-start">
                                    {item.oursource != null ? <h1>Onsite to: </h1> : null}
                                    <h1 className="text-left">{onsite(item.oursource)}</h1>
                                </div>
                                <div className="justify-items-end self-end ">
                                    {showJob !== i && showJob === 99 ? <BiArrowToBottom className="text-2xl" /> :
                                        <BiArrowToTop className="text-2xl" />}
                                </div>
                            </div>
                        </button>
                        <div className={`mt-1 bg-white text-black p-4 rounded-t-lg ${showJob === i && showJob !== 99 ? "block" : "hidden"}`}>
                            <div className="border-b-2 border-black">
                                <h1>{dateSimple(item.mulai, item.selesai)}</h1>
                            </div>

                            {item.job.map((v, i) => (
                                <div key={i} className={`flex`}>
                                    <h1>{i + 1}.</h1>
                                    <h1 key={i} className="ml-2">{v}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ExpirancePage