import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import TripForm from '../../components/trip/form'
import Container from '../../components/shared/container'
import { Heading, Text } from '../../components/shared/typography'

import { Trip } from '../../types/gotpttk'
import { useLocation, useNavigate } from 'react-router-dom'

const StyledContainer = styled(Container)`
  ${tw`p-6`}
`

const EditTripPage = () => {
  const navigate = useNavigate()
  const location = useLocation() as { state?: { trip: Trip } }
  return (
    <>
      <StyledContainer>
        <Heading margin="none">
          {location.state?.trip ? 'Edycja wycieczki' : 'Nowa wycieczka'}
        </Heading>
        <Text as="button" onClick={() => navigate(-1)} margin="md">
          Powrót
        </Text>
        <TripForm trip={location.state?.trip} />
      </StyledContainer>
    </>
  )
}

export default EditTripPage
