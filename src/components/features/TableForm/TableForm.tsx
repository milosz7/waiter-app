import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import styles from './TableForm.module.scss';
import { editTablesData } from '../../../redux/slices/tablesSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';

interface Data {
  id: number;
  status: string;
  currentPeopleNumber: number;
  maxPeopleNumber: number;
  bill: number;
}

const TableForm = ({ data }: { data: Data }) => {
  const tableStatuses = ['Busy', 'Free', 'Cleaning', 'Reserved'];
  const [formData, setFormData] = useState(data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const changeMin = (value: string) => {
    const newValue = parseInt(value) ? parseInt(value) : 0;
    if (newValue > formData.maxPeopleNumber && newValue <= 10) {
      setFormData({ ...formData, currentPeopleNumber: newValue, maxPeopleNumber: newValue });
    } else if (newValue <= 10) {
      setFormData({ ...formData, currentPeopleNumber: newValue });
    }
  };

  const changeMax = (value: string) => {
    const newValue = parseInt(value) ? parseInt(value) : 0;
    if (newValue < formData.currentPeopleNumber && newValue <= 10) {
      setFormData({ ...formData, currentPeopleNumber: newValue, maxPeopleNumber: newValue });
    } else if (newValue <= 10) {
      setFormData({ ...formData, maxPeopleNumber: newValue });
    }
  };

  const changeSelect = (status: string) => {
    if (status === 'Free' || 'Cleaning') {
      setFormData({ ...formData, status, currentPeopleNumber: 0, bill: 0 });
    } else if (status !== 'Busy') {
      setFormData({ ...formData, status, bill: 0 });
    } else {
      setFormData({ ...formData, status });
    }
  };

  const changeBill = (value: string) => {
    const bill = parseInt(value) ? parseInt(value) : 0;
    setFormData({ ...formData, bill });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTablesData(formData));
    navigate('/');
  };

  const { status, currentPeopleNumber, maxPeopleNumber, bill } = formData;

  return (
    <Form onSubmit={e => handleSubmit(e)} className="col-12 col-sm-6 col-lg-4 mt-3">
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold mb-2">Status:</Form.Label>
        <Form.Select value={status} onChange={(e) => changeSelect(e.target.value)}>
          {tableStatuses.map((status, idx) => (
            <option key={idx} value={status}>
              {status}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 d-inline-block w-50">
        <Form.Label className="fw-bold mb-2">People:</Form.Label>
        <div>
          <Form.Control
            className={styles.fieldSmall}
            onChange={(e) => changeMin(e.target.value)}
            value={currentPeopleNumber}
          ></Form.Control>
          <p className="d-inline mx-2">/</p>
          <Form.Control
            className={styles.fieldSmall}
            onChange={(e) => changeMax(e.target.value)}
            value={maxPeopleNumber}
          ></Form.Control>
        </div>
      </Form.Group>
      {status === 'Busy' && (
        <Form.Group className="mb-3 d-inline-block w-50 m-auto">
          <Form.Label className="fw-bold mb-2">Bill:</Form.Label>
          <div>
            <p className="d-inline m-0 me-2">$</p>
            <Form.Control
              className={styles.billField}
              value={bill}
              onChange={(e) => changeBill(e.target.value)}
            ></Form.Control>
          </div>
        </Form.Group>
      )}
      <Button className="mt-1 d-block" type="submit" variant="primary">
        Update
      </Button>
    </Form>
  );
};

export default TableForm;
