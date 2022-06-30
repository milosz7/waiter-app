import { useAppSelector } from "../../../redux/hooks";
import { getAllTables, getTablesStatus } from "../../../redux/slices/tablesSlice";
import TableCard from "../../views/TableCard/TableCard";
import { Spinner } from "react-bootstrap";

const TablesList = () => {
  const tableData = useAppSelector(getAllTables)
  const tableStatus = useAppSelector(getTablesStatus)

  return (
    <div className='d-flex flex-column'>
      {tableStatus === 'loading' && <Spinner className="m-auto" animation="border" />}
      {tableData.map(({ id, status }, idx) => <TableCard key={idx} id={id} status={status} />)}
    </div>
  )
};

export default TablesList;