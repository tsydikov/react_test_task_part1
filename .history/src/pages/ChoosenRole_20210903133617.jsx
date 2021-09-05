import React, { useContext } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import { userContext } from '../context';
import { BORROWER } from '../constants';
import borrower from '../icons/borrower.svg';
import lender from '../icons/lender.svg';
import close from '../icons/lender.svg';
import { ReactSVG } from 'react-svg'
import cl from "../UI/Form/Form.module.css";
import Button from '../UI/button/Button';

const ChoosenRole = () => {
  const {user} = useContext(userContext)
  return (
    <MainLayout>
      <Form>
        <h1>
          the {user} 
          {(user === BORROWER) ? <ReactSVG src={borrower} /> : <ReactSVG src={lender} />}
        </h1>
        <ReactSVG src={close} />
        <h3>You have choosen the role - <strong>the {user}</strong></h3>
        <div className={cl.twoButtons}>
          <Button><ReactSVG src={borrower} />The {BORROWER}</Button>
          <Button><ReactSVG src={close} />
            Cancel</Button>
        </div>
        <svg width="12" height="12" viewBox="0 0 16 14" fill="red" background="transparent" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.28137 6.025L2.04949 3.96914C2.01976 3.70555 2.01976 3.43954 2.04949 3.17596L2.06622 3.02757C2.24374 1.45367 3.49977 0.208358 5.09633 0.0233262C5.3645 -0.00775506 5.63547 -0.00775506 5.90364 0.0233262C7.50017 0.208358 8.7562 1.45368 8.93373 3.02758L8.95041 3.17596C8.98019 3.43954 8.98019 3.70555 8.95041 3.96913L8.71856 6.025L9.22329 6.06469C10.0192 6.12733 10.6691 6.71673 10.7982 7.49297C11.0673 9.11192 11.0673 10.7632 10.7982 12.3823C10.6691 13.1585 10.0192 13.7479 9.22329 13.8105L8.12348 13.897C6.37727 14.0343 4.62276 14.0343 2.87655 13.897L1.77671 13.8105C0.980776 13.7479 0.330857 13.1585 0.201829 12.3823C-0.0672763 10.7632 -0.0672763 9.11192 0.201829 7.49297C0.330857 6.71673 0.980776 6.12733 1.77671 6.06469L2.28137 6.025ZM5.22538 1.10207C5.40798 1.08091 5.5925 1.08091 5.77503 1.10207C6.86205 1.22804 7.71714 2.0759 7.83807 3.14746L7.85476 3.29584C7.87549 3.47969 7.87549 3.66524 7.85476 3.8491L7.61871 5.9423C6.20787 5.8528 4.79261 5.8528 3.38177 5.9423L3.14568 3.8491C3.12494 3.66524 3.12494 3.47969 3.14568 3.29584L3.16241 3.14746C3.28328 2.0759 4.13843 1.22804 5.22538 1.10207ZM8.03588 7.06094C6.34812 6.92827 4.65227 6.92827 2.96447 7.06094L1.86464 7.14748C1.57432 7.17029 1.33726 7.3853 1.2902 7.66845C1.04041 9.17117 1.04041 10.7039 1.2902 12.2067C1.33726 12.4898 1.57432 12.7048 1.86464 12.7276L2.96447 12.8141C4.65227 12.9468 6.34812 12.9468 8.03588 12.8141L9.13569 12.7276C9.42607 12.7048 9.66307 12.4898 9.71019 12.2067C9.95998 10.7039 9.95998 9.17117 9.71019 7.66845C9.66307 7.3853 9.42607 7.17029 9.13569 7.14748L8.03588 7.06094Z" fill="#90F9AD"/>
</svg>
      </Form>
    </MainLayout>
  )
}

export default ChoosenRole;