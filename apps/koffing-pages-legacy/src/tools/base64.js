class base64 {
  static encode = function (unencoded) {
    return new Buffer(unencoded || '').toString('base64')
  }

  static decode = function (encoded) {
    return new Buffer(encoded || '', 'base64').toString('utf8')
  }

  static urlEncode = function (unencoded) {
    let encoded = base64.encode(unencoded)
    return encoded.replace('+', '-').replace('/', '_').replace(/=+$/, '')
  }

  static urlDecode = function (encoded) {
    encoded = encoded.replace('-', '+').replace('_', '/')
    while (encoded.length % 4) encoded += '='
    return base64.decode(encoded)
  }
}

export default base64
