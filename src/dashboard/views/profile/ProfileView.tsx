

import { Card, Grid, SvgIconTypeMap, Divider } from '@mui/material';
import { HeaderCard } from './../../../components';
import { cardStyle } from './../../../styles';
import { AccountView, SecurityView } from './';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LockOpenOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { HeaderCardInterface } from './../../../common';



interface headerNames {
  account: HeaderCardInterface;
  security: HeaderCardInterface;
}

const viewHeader: headerNames = {
  account: {
    icon: <PersonOutlineOutlined fontSize={ 'large' }/>,
    title: 'headers.account'
  },
  security: {
    icon: <LockOpenOutlined fontSize={ 'large' } />,
    title: 'headers.security'
  },

}

export const ProfileView = () => {

  const { t } = useTranslation();
  
  const [selectView, setsSlectView] = useState<string>( viewHeader.account.title )

 
  const views = () => {
    switch ( selectView ) {
      case viewHeader.security.title:
      return <SecurityView />;
      default:
        return <AccountView />
    }
  };
  
  const handleSelectView = ( value : string ) => {
    
    setsSlectView( value );
  };

  
  
 
  return (
    <Card
    className={'animate__animated animate__fadeInUp animate__faster'}
    
      sx={[
        cardStyle,
        {
          m: 2,
        }
      ]}
      >
       

          <Grid container 
                direction="row"
                justifyContent="left"
                alignItems="center"
                // sx={{
                //   borderBottom: 'solid',
                //   borderBottomWidth: 'thin',
                //   borderBottomColor: 'primary.gray'
                // }}
              >
              {
                Object.values( viewHeader ).map(( { icon, title }: HeaderCardInterface ) => {
                  // console.log( 'item ', item );
                  
                  return <HeaderCard key={ title } active={ title.includes( selectView ) } icon={ icon } title={ t(`${title}`) } onClik={ () => handleSelectView( title ) } />
                })
              
              }
          </Grid>

          <Divider  />

         
          { views() }
            
             
              
    </Card>
  )
}
