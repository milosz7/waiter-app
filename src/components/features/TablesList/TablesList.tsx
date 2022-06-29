import { useAppSelector } from "../../../redux/hooks";
import { getAllTables } from "../../../redux/slices/tablesSlice";
import TableCard from "../../views/TableCard/TableCard";
import { Spinner } from "react-bootstrap";

const TablesList = () => {
  const tableData = useAppSelector(getAllTables)
  
  if (!tableData) return <Spinner animation="border" />

  return (
    <div className='d-flex flex-column'>
      {tableData.map(({ id, status }, idx) => <TableCard key={idx} id={id} status={status} />)}
    </div>
  )
};

export default TablesList;