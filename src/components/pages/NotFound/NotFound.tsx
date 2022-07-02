import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from './NotFound.module.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.layoutBox}>
      <div className="m-auto text-center">
      <h1 className="mb-4">The page you were looking for was not found.</h1>
      <Button variant="primary" className="mb-3" type="button" onClick={() => navigate('/')}>Return to homepage</Button>
      </div>
    </div>
  )
}

export default NotFound;