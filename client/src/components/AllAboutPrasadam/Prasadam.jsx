import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import WhatIsPrasadam from './Prasadam Details/WhatIsPrasadam';
import WhatWeCanOffer from './Prasadam Details/WhatWeCanOffer';
import PrasadamMaking from './Prasadam Details/PrasadamMaking';
import OfferingsToKrishna from './Prasadam Details/OfferingsToKrishna';


const Prasadam = () => {
  return (
      <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 15 }} >
          <Grid xs={4} sm={4} md={5}>
            <WhatIsPrasadam />
          </Grid>
          <Grid xs={4} sm={4} md={5}>
            <WhatWeCanOffer />
          </Grid>
          <Grid xs={4} sm={4} md={5}>
            <PrasadamMaking />
          </Grid>
          <Grid xs={4} sm={8} md={15}>
            <OfferingsToKrishna />
          </Grid>
      </Grid>
  )
}

export default Prasadam
