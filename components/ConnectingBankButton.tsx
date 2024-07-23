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
  const [user, setUser] = useState<User | null>(null);
  const buttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clickButton() {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  }));

  useEffect(() => {
    const gettingUser = async () => {
      const loggedIn = await getLoggedInUser();
      setUser(loggedIn);
    };
    gettingUser();
  }, []);

  useEffect(() => {
    const getLinkToken = async () => {
      if (user) {
        const data = await createLinkToken(user);
        setToken(data?.linkToken);
      }
    };
    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    if (user) {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });
      router.push('/');
    }
  }, [user, router]);

  const config: PlaidLinkOptions = {
    token: token || '',
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
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
  );
});

export default ConnectingBankButton;
