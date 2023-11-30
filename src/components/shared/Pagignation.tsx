import ReactPaginate from "react-paginate"
import {PiArrowCircleLeftFill, PiArrowCircleRightFill} from 'react-icons/pi'

export const Pagignation = (props: any) => {
    console.log(props.forcePage);
    
    return (
        <ReactPaginate
            onPageChange = {props.onPageChange}
            pageCount={props.pageCount}
            previousLabel={<PiArrowCircleLeftFill />}
            nextLabel={<PiArrowCircleRightFill />}
            forcePage={props.forcePage}
            activeClassName={'item active-page '}
            breakClassName={'item break-me '}
            breakLabel={'...'}
            containerClassName={'pagination'}
            disabledClassName={'disabled-page'}
            nextClassName={"item next "}
            pageClassName={'item pagination-page '}
            pageRangeDisplayed={2}
            previousClassName={"item previous"}
        />
    )
}