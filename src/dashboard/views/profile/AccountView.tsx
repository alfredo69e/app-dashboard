import { Grid } from '@mui/material';
import { ChangeAvatar } from './ChangeAvatar';
import { InputProfile } from './InputProfile';



export const AccountView = () => {

  return (
         

        <Grid container spacing={2} p={4} >

            <ChangeAvatar />

            <InputProfile />

        </Grid>


  )
}
