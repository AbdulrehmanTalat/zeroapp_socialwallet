'use client'
import React, { useMemo, useState } from "react";
import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk'

import {
  SocialWallet,
  GoogleSocialWallet,
  FacebookSocialWallet,
  GithubSocialWallet,
  DiscordSocialWallet,
  TwitchSocialWallet,
  TwitterSocialWallet
} from '@zerodevapp/social-wallet';

const  Wallet = () => {
    const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const socialWallet = useMemo(() => {
    return new SocialWallet()
  }, [])
  
  const createWallet = async () => {
    setLoading(true)
    const signer = await getZeroDevSigner({
      projectId: 'de8cc925-88cb-429a-9dae-ac9161fcf242',
      owner: await getSocialWalletOwner('de8cc925-88cb-429a-9dae-ac9161fcf242', socialWallet)
    })
    setAddress(await signer.getAddress())
    setLoading(false)
  }

  const disconnect = async () => {
    await socialWallet.disconnect()
    setAddress('')
  }
 
  const connected = !!address

  return (
    <div>
      {connected && 
        <div>
          <label>Wallet: {address}</label>
        </div>
      }
      <div>
        {!connected && <button onClick={createWallet} disabled={loading}>{ loading ? 'loading...' : 'Create Wallet'}</button>}
        {connected && 
          <button onClick={disconnect} disabled={loading}>Disconnect</button>
        }
      </div>
    </div>
  )
}
export default Wallet