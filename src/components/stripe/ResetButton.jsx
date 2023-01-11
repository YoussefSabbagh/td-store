import { FaStore } from 'react-icons/fa';
// import './styles/common.css';
// import './styles/2-Card-Detailed.css';

export const ResetButton = ({ onClick }) => (
  <button type="button" className="ResetButton" onClick={onClick}>
    <FaStore className="text-3xl text-success" />
  </button>
);
