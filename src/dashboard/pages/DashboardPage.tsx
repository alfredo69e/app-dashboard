import { useAuth } from './../../hooks';
import { DashboardLayout } from './../layout/DashboardLayout';
import { DashboardView } from './../views';

export const DashboardPage = () => {


  return (
    <> 
      <DashboardLayout >

        <DashboardView />
        
      </DashboardLayout>
    </>
  )
}
