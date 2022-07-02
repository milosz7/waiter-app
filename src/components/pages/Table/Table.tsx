import { useParams } from "react-router";
import TableForm from "../../features/TableForm/TableForm";
import { getTablesStatus, getTableById } from "../../../redux/slices/tablesSlice";
import { useAppSelector } from "../../../redux/hooks";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Table = () => {
  const { id } = useParams()
  const tablesStatus = useAppSelector(getTablesStatus)
  const tableData = useAppSelector(state => getTableById(state, id))
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!tableData) {
      navigate('/');
    }
  }, [tableData, navigate])
 
  if(tablesStatus === 'loading') return (
    <div className="mt-5 d-flex">
      <Spinner className="m-auto" animation="border" />
    </div>
  );

  if(tableData)
  return (
    <div className="py-3">
      <h1>{`Table ${id}`}</h1>
      <TableForm data={tableData} />
    </div>
  )
  return null
}

export default Table;