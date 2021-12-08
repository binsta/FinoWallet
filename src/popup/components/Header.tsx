import React from 'react'
import "./Header.css"
import { NodeEndpoint } from '../../utils/utils'



const AddressNode: any = {
    mainnet: NodeEndpoint.Mainnet,
    testnet: NodeEndpoint.Testnet,
}
const Header = () => {
    return (
        <div>
            <h1>Change Node</h1>
        </div>
    )
}

export default Header
