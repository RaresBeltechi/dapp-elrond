import React from 'react';
import {
  useGetAccountInfo,
  useGetNetworkConfig
} from '@elrondnetwork/dapp-core/hooks';
import { TransactionsTable } from '@elrondnetwork/dapp-core/UI/TransactionsTable';
import { TransactionType } from './types';

// const fakeSender =
//   'erd000000000000000000000000000000000000000000000000000000000a';

export const ExtendedTransactionsList = ({
  transactions
}: {
  transactions: TransactionType[];
}) => {
  const { network } = useGetNetworkConfig();
  const account = useGetAccountInfo();

  return (
    <div className='p-3 mt-3'>
      <h4 className='mb-3 font-weight-normal'>Smart Contract Transactions</h4>
      <TransactionsTable
        transactions={transactions}
        address={account.address}
        directionCol={true}
        // showLockedAccounts={true}
      />
      <div className='d-flex justify-content-center'>
        <a
          href={`${network.explorerAddress}/address/${account.address}`}
          {...{
            target: '_blank'
          }}
        >
          See all transactions
        </a>
      </div>
    </div>
  );
};
