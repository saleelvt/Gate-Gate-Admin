import Breadcrumb from '../Breadcrumbs/Breadcrumb';
 
import TableTwo from '../../components/Table/TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Service" />

      <div className="flex flex-col gap-10">
  
        <TableTwo />
 
      </div>
    </>
  );
};

export default Tables;
