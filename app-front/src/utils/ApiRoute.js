const host = 'http://localhost:5000'

export default host;
export const registerUserRoute = `${host}/api/register/client`
export const loginUserRoute = `${host}/api/login/client`
export const getRoom = `${host}/api/room`
export const findRoomAvailable = `${host}/api/rooms`
export const checkoutStripe = `${host}/create-checkout-session`
export const saveBooking = `${host}/api/book`