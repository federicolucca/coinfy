const { createERC20 } = require('./ERC20_2')

module.exports = createERC20({
    symbol: 'ANT',
    name: 'Aragon',
    color: '#2cdee1',
    contract_address: '0x960b236a07cf122663c4303350609a66a7b288c0',
    labels: 'ant ethereum token erc20 ecr20',
    coin_decimals: 18,
    price_decimals: 2
})
