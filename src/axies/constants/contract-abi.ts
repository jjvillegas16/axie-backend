export const contractAbi = [
  {
    constant: true,
    inputs: [{ name: '_axieId', type: 'uint256' }],
    name: 'getAxie',
    outputs: [
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
