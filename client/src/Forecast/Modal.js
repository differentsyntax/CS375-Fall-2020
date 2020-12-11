import { LineChart } from 'react-chartkick'
import 'chart.js'

const Modal = ({ count, data, handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const timeArray = ['12:00 AM', '3:00 AM', '6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'];
  const day = data[count]['date'].split(',')[0];
  let c = 0;
//   let temp = [];
  let chartData = {};

  for(let i=0; i < data.length; i++) {
      if(data[i]["date"].split(',')[0] === day) {
        // temp.push(data[i]["temp"]);
        chartData[timeArray[c]] = data[i]["temp"]; 
        c += 1;
      }
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <LineChart data={ chartData } />
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;