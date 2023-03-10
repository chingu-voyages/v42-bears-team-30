const host = 'https://chingu-bt-30-back.onrender.com'

export default host;
export const registerUserRoute = `${host}/api/register/client`
export const loginUserRoute = `${host}/api/login/client`
export const getRoom = `${host}/api/room`
export const findRoomAvailable = `${host}/api/rooms`
export const checkoutStripe = `${host}/create-checkout-session`
export const saveBooking = `${host}/api/book`