/* eslint-disable import/prefer-default-export */
export const BACKEND_URL = 'http://localhost:8080'

export const ASSETS_URL = `${BACKEND_URL}/confirmation/photo`

export const ROUTES_URL = `${BACKEND_URL}/segment`
export const PRIVATE_ROUTES_URL = `${BACKEND_URL}/trip/privateSegment`
export const POINTS_URL = `${BACKEND_URL}/trip/terrainPoints`
export const TRIPS_URL = `${BACKEND_URL}/trip/trip`
export const ADJUSTED_ROUTES_URL = `${BACKEND_URL}/trip/neighboringSegments`
export const CONFIRMATION_URL = `${BACKEND_URL}/confirmation`
export const CONFIRMATION_IMAGE_URL = `${CONFIRMATION_URL}/photo`
export const CONFIRMATION_ADD_URL = `${CONFIRMATION_URL}/withPhoto`
export const VERIFICATION_URL = `${BACKEND_URL}/confirmation`
export const VERIFICATION_TRIPS_URL = `${BACKEND_URL}/confirmation/trips`
export const VERIFICATION_TRIP_URL = `${BACKEND_URL}/confirmation/trip`
export const MOUNTAIN_RANGES_URL = `${BACKEND_URL}/trip/mountainRanges/1`