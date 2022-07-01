import { useParams } from "react-router";
import TableForm from "../../features/TableForm/TableForm";
import { getTablesStatus } from "../../../redux/slices/tablesSlice";
import { useAppSelector } from "../../../redux/hooks";

const Table = () => {
  const { id } = useParams()
  const tablesStatus = useAppSelector(getTablesStatus)
 
  if(tablesStatus !== 'succeeded') return null
  return (
    <div className="py-3">
      <h1>{`Table ${id}`}</h1>
      <TableForm id={id} />
    </div>
  )
}

export default Table;