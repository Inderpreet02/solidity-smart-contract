// https://eth-ropsten.alchemyapi.io/v2/rRTaeTE3l2dgSBcFKs1h44gzY2EacjDe

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/g8pfnDFHuKCP0sW9qqz8sKOXD__dt5d-',
      accounts: [ '069f280cc268e011ccbe73cfa2cf5926299058875b538efe9ae2b2a0254237ef' ]
    }
  }
}
