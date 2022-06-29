import { Button } from 'react-bootstrap';

const TableCard = ({ id, status }: { id: number; status: string }) => {
  return (
    <div className="border-bottom d-flex justify-content-between py-3">
      <div className="d-flex align-items-center">
        <h2 className='m-0'>{`Table ${id}`}</h2>
        <p className='m-0 ps-3'>
          <span className="fw-bold">Status: </span>
          {status}
        </p>
      </div>
      <Button className="align-self-center" variant="primary">Show more</Button>
    </div>
  );
};

export default TableCard;
