import React from 'react'
import Sdk, { Api } from "@findora-network/findora-sdk.js"
import { Keypair } from '@findora-network/findora-sdk.js/dist/api'
import "./CreateAccount.css"

const password = "123"
const createKeypair = async () => {
    const mnemonic = await Keypair.getMnemonic(24);
    const WalletInfo = await Keypair.restoreFromMnemonic(mnemonic, password);

}

const CreateAccount = () => {
    return (
        <div>
            <button>Create Account</button>
        </div>
    )
}

export default CreateAccount
