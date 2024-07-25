"use client";
import React, { useCallback, useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { createLinkToken, exchangePublicToken, getLoggedInUser } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';

declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

const ConnectingBankButton = forwardRef((props, ref) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({
    clickButton() {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  }));

  useEffect(() => {
    const fetchUserAndToken = async () => {
      try {
        const loggedInUser = await getLoggedInUser();
        if (loggedInUser) {
          const tokenData = await createLinkToken(loggedInUser);
          setToken(tokenData?.linkToken);
        }
      } catch (error) {
        console.error('Error fetching user or token:', error);
      }
    };
    fetchUserAndToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    try {
      const user = await getLoggedInUser();
      if (user) {
        await exchangePublicToken({
          publicToken: public_token,
          user,
        });
        router.push('/');
      }
    } catch (error) {
      console.error('Error exchanging public token:', error);
    }
  }, [router]);

  const config: PlaidLinkOptions = useMemo(() => ({
    token: token || '',
    onSuccess,
  }), [token, onSuccess]);

  const { open, ready } = usePlaidLink(config);

  return token ? (
    <div style={{ display: 'none' }}>
      <Button ref={buttonRef} onClick={() => open()} className="plaidlink-default" disabled={!ready}>
        <Image
          src="/icons/connect-bank.svg"
          alt="connect bank"
          width={24}
          height={24}
        />
        <p className='text-[16px] font-semibold text-black-2'>Connect</p>
      </Button>
    </div>
  ) : null;
});

ConnectingBankButton.displayName = 'ConnectingBankButton';

export default ConnectingBankButton;
