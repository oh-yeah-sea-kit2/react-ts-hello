import React from 'react';


type SummaryProps = {
  numOfPeople: number;
  totalAmount: number;
}

export const Summary: React.FC<SummaryProps> = props => {
  return (
    <div>
      <div className="party">
        <input type="text" className="party"
          defaultValue={props.numOfPeople} />
        <span>名様</span>
      </div>
      <div className="total-amount">
        <span>合計</span>
        <input type="text" className="total-amount"
          defaultValue={props.totalAmount} />
        <span>円</span>
      </div>
    </div>
  );
}
