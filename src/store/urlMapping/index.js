function getDevRootUrl () {
  return 'https://api.et.vn.ua:8086/OnlineOrder/'
}

function getProdRootUrl () {
  return 'https://api.et.vn.ua:8086/OnlineOrder/'
}

function sendUserDataUrlDev () {
  return getDevRootUrl()
}

function getUserDataForFailedPaymentUrlDev (uid) {
  return getDevRootUrl() + uid
}

function getUserPhotoForFailedPaymentUrlDev (uid) {
  return getDevRootUrl() + 'photo/' + uid
}

function getUserDataByKeyAndPinUrlDev ({ key, pin }) {
  return getDevRootUrl() + `key/${key}/${pin}/`
}

function getPaymentUrlForGuidUrlDev (uid) {
  return getDevRootUrl() + 'GetPaymentUrlForGuid/' + uid
}

function getPaymentUrlDev () {
  return getDevRootUrl() + 'payment/'
}

function getVerifyCardByUserUrlDev (uid) {
  return getDevRootUrl() + 'VerifyCardByUser/' + uid
}

function sendUserDataUrlProd () {
  return getProdRootUrl()
}

function getUserDataForFailedPaymentUrlProd (uid) {
  return getProdRootUrl() + uid
}

function getUserPhotoForFailedPaymentUrlProd (uid) {
  return getProdRootUrl() + 'photo/' + uid
}

function getUserDataByKeyAndPinUrlProd ({ key, pin }) {
  return getProdRootUrl() + `key/${key}/${pin}/`
}

function getPaymentUrlForGuidUrlProd (uid) {
  return getProdRootUrl() + 'GetPaymentUrlForGuid/' + uid
}

function getPaymentUrlProd () {
  return getDevRootUrl() + 'payment/'
}

function getVerifyCardByUserUrlProd (uid) {
  return getProdRootUrl() + 'VerifyCardByUser/' + uid
}

const devUrls = {
  sendUserDataUrl: sendUserDataUrlDev,
  getUserDataForFailedPaymentUrl: getUserDataForFailedPaymentUrlDev,
  getUserPhotoForFailedPaymentUrl: getUserPhotoForFailedPaymentUrlDev,
  getUserDataByKeyAndPinUrl: getUserDataByKeyAndPinUrlDev,
  getPaymentUrlForGuidUrl: getPaymentUrlForGuidUrlDev,
  getVerifyCardByUserUrl: getVerifyCardByUserUrlDev,
  getPaymentUrl: getPaymentUrlDev

}
const prodUrls = {
  sendUserDataUrl: sendUserDataUrlProd,
  getUserDataForFailedPaymentUrl: getUserDataForFailedPaymentUrlProd,
  getUserPhotoForFailedPaymentUrl: getUserPhotoForFailedPaymentUrlProd,
  getUserDataByKeyAndPinUrl: getUserDataByKeyAndPinUrlProd,
  getPaymentUrlForGuidUrl: getPaymentUrlForGuidUrlProd,
  getVerifyCardByUserUrl: getVerifyCardByUserUrlProd,
  getPaymentUrl: getPaymentUrlProd

}

export default process.env.NODE_ENV === 'development' ? devUrls : prodUrls
