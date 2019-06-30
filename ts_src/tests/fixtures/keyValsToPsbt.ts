const b = (hex: string): Buffer => Buffer.from(hex, 'hex');

export const fixtures = [
  {
    data: {
      globalMapKeyVals: [
        {
          key: b('00'),
          value: b('fb'),
        },
        {
          key: b('00'),
          value: b('fb'),
        },
      ],
      inputKeyVals: [],
      outputKeyVals: [],
    },
    exception: 'Format Error: GlobalMap has multiple UNSIGNED_TX',
  },
  {
    data: {
      globalMapKeyVals: [
        {
          key: b('ef'),
          value: b('fb'),
        },
      ],
      inputKeyVals: [
        [
          {
            key: b('01'),
            value: b(
              '70aaf00800000000160014d85c2b71d0060b09c9886aeb815e50991dda124d',
            ),
          },
          {
            key: b('00'),
            value: b('03'),
          },
        ],
      ],
      outputKeyVals: [],
    },
    exception: 'Format Error: Input has multiple \\[NON_\\]WITNESS_UTXO',
  },
  {
    data: {
      globalMapKeyVals: [],
      inputKeyVals: [
        [
          {
            key: b('00'),
            value: b('04'),
          },
          {
            key: b('01'),
            value: b('05'),
          },
        ],
      ],
      outputKeyVals: [],
    },
    exception: 'Format Error: Input has multiple \\[NON_\\]WITNESS_UTXO',
  },
  {
    data: {
      globalMapKeyVals: [],
      inputKeyVals: [
        [
          {
            key: b('02ffff'),
            value: b('00'),
          },
        ],
      ],
      outputKeyVals: [],
    },
    exception: 'Format Error: invalid pubkey in key 0x02',
  },
  {
    data: {
      globalMapKeyVals: [],
      inputKeyVals: [
        [
          {
            key: b('03'),
            value: b('01020304'),
          },
          {
            key: b('03'),
            value: b('01020305'),
          },
        ],
      ],
      outputKeyVals: [],
    },
    exception: 'Format Error: Input has multiple SIGHASH_TYPE',
  },
  {
    data: {
      globalMapKeyVals: [],
      inputKeyVals: [
        [
          {
            key: b('04'),
            value: b('01020304'),
          },
          {
            key: b('04'),
            value: b('01020305'),
          },
        ],
      ],
      outputKeyVals: [],
    },
    exception: 'Format Error: Input has multiple REDEEM_SCRIPT',
  },
  {
    data: {
      globalMapKeyVals: [],
      inputKeyVals: [
        [
          {
            key: b('09'),
            value: b('70736274'),
          },
          {
            key: b('05'),
            value: b('01020304'),
          },
          {
            key: b('05'),
            value: b('01020305'),
          },
        ],
      ],
      outputKeyVals: [],
    },
    exception: 'Format Error: Input has multiple WITNESS_SCRIPT',
  },
  {
    data: {
      globalMapKeyVals: [],
      inputKeyVals: [],
      outputKeyVals: [
        [
          {
            key: b('00'),
            value: b('01020304'),
          },
          {
            key: b('00'),
            value: b('01020305'),
          },
        ],
      ],
    },
    exception: 'Format Error: Output has multiple REDEEM_SCRIPT',
  },
  {
    data: {
      globalMapKeyVals: [],
      inputKeyVals: [],
      outputKeyVals: [
        [
          {
            key: b('ef'),
            value: b('01020304'),
          },
          {
            key: b('01'),
            value: b('01020304'),
          },
          {
            key: b('01'),
            value: b('01020305'),
          },
        ],
      ],
    },
    exception: 'Format Error: Output has multiple WITNESS_SCRIPT',
  },
];